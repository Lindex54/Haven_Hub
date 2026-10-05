const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
).replace(/\/+$/, '')

export async function apiRequest(path, options = {}) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const headers = new Headers(options.headers)

  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json')
  }

  let response

  try {
    response = await fetch(`${API_BASE_URL}${normalizedPath}`, {
      ...options,
      headers,
    })
  } catch (error) {
    throw new Error('Unable to connect to the server.', { cause: error })
  }

  const responseText = await response.text()
  let responseData = null

  if (responseText) {
    try {
      responseData = JSON.parse(responseText)
    } catch {
      throw new Error('The server returned an invalid response.')
    }
  }

  if (!response.ok) {
    const message =
      typeof responseData?.message === 'string'
        ? responseData.message
        : `Request failed with status ${response.status}.`

    throw new Error(message)
  }

  return responseData
}
