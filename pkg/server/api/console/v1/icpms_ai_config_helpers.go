package console_v1

import (
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/probo"
	"go.probo.inc/probo/pkg/server/api/console/v1/types"
)

// toAiConfigType converts coredata.IcpmsAiConfig to GraphQL types.IcpmsAiConfig.
// NEVER exposes the full API key — only a masked version is returned.
func toAiConfigType(cfg *coredata.IcpmsAiConfig) *types.IcpmsAiConfig {
	if cfg == nil {
		return nil
	}
	t := &types.IcpmsAiConfig{
		OrganizationID:  cfg.OrganizationID,
		Provider:        types.IcpmsAiProvider(cfg.Provider),
		DefaultModel:    cfg.DefaultModel,
		IsEnabled:       cfg.IsEnabled,
		IsKeyConfigured: cfg.APIKey != nil && *cfg.APIKey != "",
		UpdatedAt:       cfg.UpdatedAt,
	}
	if cfg.APIKey != nil && *cfg.APIKey != "" {
		masked := probo.MaskAPIKey(*cfg.APIKey)
		t.APIKeyMasked = &masked
	}
	return t
}
