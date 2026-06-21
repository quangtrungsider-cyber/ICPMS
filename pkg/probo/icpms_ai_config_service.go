// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"time"

	"github.com/jackc/pgx/v5"
	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
)

// IcpmsAiConfigService manages per-organization AI provider settings.
type IcpmsAiConfigService struct {
	svc *Service
}

// Get returns the config for a given provider, or nil if not configured.
func (s *IcpmsAiConfigService) Get(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
	provider string,
) (*coredata.IcpmsAiConfig, error) {
	var cfg coredata.IcpmsAiConfig
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx,
			`SELECT * FROM icpms_ai_configs WHERE tenant_id = @tenant_id AND organization_id = @org_id AND provider = @provider`,
			pgx.StrictNamedArgs{
				"tenant_id": scope.GetTenantID(),
				"org_id":    orgID,
				"provider":  provider,
			},
		)
		if err != nil {
			return err
		}
		cfg, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsAiConfig])
		return err
	})
	if err != nil {
		if err == pgx.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}
	return &cfg, nil
}

// ListForOrganization returns all AI configs for an organization.
func (s *IcpmsAiConfigService) ListForOrganization(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
) ([]*coredata.IcpmsAiConfig, error) {
	var cfgs []*coredata.IcpmsAiConfig
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx,
			`SELECT * FROM icpms_ai_configs WHERE tenant_id = @tenant_id AND organization_id = @org_id ORDER BY provider`,
			pgx.StrictNamedArgs{
				"tenant_id": scope.GetTenantID(),
				"org_id":    orgID,
			},
		)
		if err != nil {
			return err
		}
		cfgs, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsAiConfig])
		return err
	})
	return cfgs, err
}

// Upsert creates or updates an AI config.
// Pass a non-nil apiKey to set/update the key; nil keeps the existing key unchanged.
func (s *IcpmsAiConfigService) Upsert(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
	provider string,
	apiKey *string,
	defaultModel *string,
	isEnabled bool,
) (*coredata.IcpmsAiConfig, error) {
	now := time.Now()
	err := s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			INSERT INTO icpms_ai_configs (tenant_id, organization_id, provider, api_key, default_model, is_enabled, created_at, updated_at)
			VALUES (@tenant_id, @org_id, @provider, @api_key, @default_model, @is_enabled, @now, @now)
			ON CONFLICT (tenant_id, organization_id, provider) DO UPDATE SET
				api_key       = CASE WHEN @api_key IS NOT NULL THEN @api_key ELSE icpms_ai_configs.api_key END,
				default_model = @default_model,
				is_enabled    = @is_enabled,
				updated_at    = @now
		`, pgx.StrictNamedArgs{
			"tenant_id":     scope.GetTenantID(),
			"org_id":        orgID,
			"provider":      provider,
			"api_key":       apiKey,
			"default_model": defaultModel,
			"is_enabled":    isEnabled,
			"now":           now,
		})
		return err
	})
	if err != nil {
		return nil, err
	}
	return s.Get(ctx, scope, orgID, provider)
}

// MaskAPIKey returns a masked version of the key: "AIza...abcd" (first 4 + last 4 chars).
// Never returns the full key to the client.
func MaskAPIKey(key string) string {
	if len(key) <= 8 {
		return "****"
	}
	return key[:4] + "..." + key[len(key)-4:]
}
