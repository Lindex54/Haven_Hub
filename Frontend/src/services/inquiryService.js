import { apiRequest } from './api'

export async function submitInquiry(formType, values) {
  return apiRequest('/api/inquiries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      formType,
      values,
    }),
  })
}
