export function validateEmail(value) {
  return /\S+@\S+\.\S+/.test(value)
}

export function validatePhone(value) {
  return String(value ?? '').replace(/\D/g, '').length >= 7
}
