// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"fmt"
	"time"

	"github.com/jackc/pgx/v5"
	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
)

// IcpmsCodeService sinh mã nghiệp vụ có cấu trúc:
// [MODULE]-[DOCUMENT_CODE]-[YEAR]-[SEQUENCE]
// Ví dụ: REQ-ND125-2026-0001, AIR-ND125-2026-0001, CHK-ND125-2026-0001
type IcpmsCodeService struct {
	svc *Service
}

// NextBusinessCode trả về mã nghiệp vụ tiếp theo cho tổ hợp (module, documentCode, year).
// Sequence tự tăng atomic, reset theo năm và theo từng tổ hợp.
func (s *IcpmsCodeService) NextBusinessCode(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
	module string,
	documentCode string,
	year int,
) (string, error) {
	var seq int
	err := s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		rows, err := tx.Query(ctx, `
			INSERT INTO icpms_code_sequences (tenant_id, organization_id, module, document_code, year, next_val)
			VALUES (@tenant_id, @org_id, @module, @document_code, @year, 2)
			ON CONFLICT (tenant_id, organization_id, module, document_code, year)
			DO UPDATE SET next_val = icpms_code_sequences.next_val + 1
			RETURNING next_val - 1
		`, pgx.StrictNamedArgs{
			"tenant_id":     scope.GetTenantID(),
			"org_id":        orgID,
			"module":        module,
			"document_code": documentCode,
			"year":          year,
		})
		if err != nil {
			return err
		}
		val, err := pgx.CollectExactlyOneRow(rows, func(row pgx.CollectableRow) (int, error) {
			var v int
			return v, row.Scan(&v)
		})
		if err != nil {
			return err
		}
		seq = val
		return nil
	})
	if err != nil {
		return "", fmt.Errorf("cannot generate business code: %w", err)
	}
	return fmt.Sprintf("%s-%s-%d-%04d", module, documentCode, year, seq), nil
}

// ReserveBlock atomically reserves `count` sequential slots and returns the first slot number.
// Use this when generating multiple codes in one batch (e.g. bulk requirements).
func (s *IcpmsCodeService) ReserveBlock(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
	module string,
	documentCode string,
	year int,
	count int,
) (firstSeq int, err error) {
	if count <= 0 {
		return 0, fmt.Errorf("count must be positive")
	}
	err = s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		rows, qErr := tx.Query(ctx, `
			INSERT INTO icpms_code_sequences (tenant_id, organization_id, module, document_code, year, next_val)
			VALUES (@tenant_id, @org_id, @module, @document_code, @year, @count + 1)
			ON CONFLICT (tenant_id, organization_id, module, document_code, year)
			DO UPDATE SET next_val = icpms_code_sequences.next_val + @count
			RETURNING next_val - @count
		`, pgx.StrictNamedArgs{
			"tenant_id":     scope.GetTenantID(),
			"org_id":        orgID,
			"module":        module,
			"document_code": documentCode,
			"year":          year,
			"count":         count,
		})
		if qErr != nil {
			return qErr
		}
		val, scanErr := pgx.CollectExactlyOneRow(rows, func(row pgx.CollectableRow) (int, error) {
			var v int
			return v, row.Scan(&v)
		})
		if scanErr != nil {
			return scanErr
		}
		firstSeq = val
		return nil
	})
	return firstSeq, err
}

// ResetSequence resets the counter for (module, documentCode, year) back to 1.
// Call this before ReserveBlock when regenerating codes for a document from scratch,
// so that codes start at 0001 instead of continuing from a previous run.
func (s *IcpmsCodeService) ResetSequence(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
	module string,
	documentCode string,
	year int,
) error {
	return s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		_, err := conn.Exec(ctx, `
			UPDATE icpms_code_sequences
			   SET next_val = 1
			 WHERE tenant_id     = @tenant_id
			   AND organization_id = @org_id
			   AND module         = @module
			   AND document_code  = @document_code
			   AND year           = @year
		`, pgx.StrictNamedArgs{
			"tenant_id":     scope.GetTenantID(),
			"org_id":        orgID,
			"module":        module,
			"document_code": documentCode,
			"year":          year,
		})
		return err
	})
}

// FormatCode returns the formatted business code string.
func FormatBusinessCode(module, documentCode string, year, seq int) string {
	return fmt.Sprintf("%s-%s-%d-%04d", module, documentCode, year, seq)
}

// BusinessCodeForDocument sinh mã nghiệp vụ từ document, trả về fallback nếu document_code chưa được đặt.
// fallback là mã cũ kiểu Unix-timestamp.
func (s *IcpmsCodeService) BusinessCodeForDocument(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
	module string,
	doc *coredata.IcpmsDocument,
	fallback string,
) string {
	if doc == nil || doc.DocumentCode == nil || *doc.DocumentCode == "" {
		return fallback
	}
	code, err := s.NextBusinessCode(ctx, scope, orgID, module, *doc.DocumentCode, time.Now().Year())
	if err != nil {
		return fallback
	}
	return code
}
