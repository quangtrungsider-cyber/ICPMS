// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"time"

	"go.probo.inc/probo/pkg/gid"
)

// IcpmsAiConfig stores per-organization AI provider configuration.
// API keys are stored server-side only; the UI receives a masked version.
type IcpmsAiConfig struct {
	TenantID       gid.TenantID `db:"tenant_id"`
	OrganizationID gid.GID      `db:"organization_id"`
	Provider       string       `db:"provider"`
	APIKey         *string      `db:"api_key"`
	DefaultModel   *string      `db:"default_model"`
	IsEnabled      bool         `db:"is_enabled"`
	CreatedAt      time.Time    `db:"created_at"`
	UpdatedAt      time.Time    `db:"updated_at"`
}
