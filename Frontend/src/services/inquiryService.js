const STORAGE_KEY = 'salt-savannah-inquiries'

function readStoredInquiries() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
    return []
  }
}

function persistInquiry(payload) {
  const existing = readStoredInquiries()
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, payload]))
}

export async function submitInquiry(formType, values) {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 900)
  })

  persistInquiry({
    id: crypto.randomUUID(),
    formType,
    submittedAt: new Date().toISOString(),
    values,
  })

  return {
    success: true,
    message:
      'Your visit request has been submitted. Our team will contact you to confirm availability, pricing and arrangements.',
  }
}
