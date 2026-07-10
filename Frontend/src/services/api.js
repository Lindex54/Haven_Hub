const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost/salt-savannah-api'

export async function apiRequest(path, options = {}) {
  return {
    ok: true,
    path: `${API_BASE_URL}${path}`,
    options,
  }
}
