// Format số có dấu phẩy ngăn cách hàng nghìn
export function formatNumber(number) {
  return new Intl.NumberFormat().format(number)
}

// Cắt chuỗi nếu quá dài
export function truncate(text, maxLength = 50) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

// Lấy token từ localStorage
export function getToken() {
  return localStorage.getItem('token') || ''
}

// Thời gian hiện tại dưới dạng yyyy-mm-dd
export function getToday() {
  return new Date().toISOString().split('T')[0]
}

/**
 * Format số thành tiền VND, ví dụ: 1000000 => "1.000.000đ"
 */
export function formatCurrency(value) {
  if (typeof value !== 'number') return '0đ';
  return value.toLocaleString('vi-VN') + 'đ';
}

/**
 * Format số thành tiền có đơn vị VND (cách dùng khác), ví dụ: 1000000 => "1.000.000 VND"
 */
export function formatVnd(value) {
  if (typeof value !== 'number') return '0 VND';
  return value.toLocaleString('vi-VN') + ' VND';
}
