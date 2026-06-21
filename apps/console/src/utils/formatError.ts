/**
 * Chuyển đổi error message kỹ thuật sang tiếng Việt thân thiện với người dùng.
 */
export function formatError(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);

  if (
    msg.includes("Failed to fetch") ||
    msg.includes("NetworkError") ||
    msg.includes("network error") ||
    msg.includes("ERR_CONNECTION_REFUSED") ||
    msg.includes("Unable to connect")
  ) {
    return "Chưa kết nối với server";
  }

  if (msg.includes("UNAUTHENTICATED") || msg.includes("authentication is required")) {
    return "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại";
  }

  if (msg.includes("FORBIDDEN") || msg.includes("not authorized")) {
    return "Bạn không có quyền thực hiện thao tác này";
  }

  if (msg.includes("INTERNAL_SERVER_ERROR")) {
    return "Lỗi máy chủ, vui lòng thử lại";
  }

  return msg;
}
