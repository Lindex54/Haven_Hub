const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }),
)

app.use(express.json({ limit: '50kb' }))

const BREVO_EMAIL_URL = 'https://api.brevo.com/v3/smtp/email'
const MAX_EMAIL_ATTEMPTS = 3
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

class InquiryValidationError extends Error {}

const isPlainObject = (value) =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const readString = (
  values,
  field,
  { required = false, maxLength },
) => {
  const value = values[field]

  if (value === undefined || value === null) {
    if (required) {
      throw new InquiryValidationError(`${field} is required.`)
    }
    return ''
  }

  if (typeof value !== 'string') {
    throw new InquiryValidationError(`${field} must be a string.`)
  }

  const normalizedValue = value.trim()

  if (required && !normalizedValue) {
    throw new InquiryValidationError(`${field} is required.`)
  }

  if (normalizedValue.length > maxLength) {
    throw new InquiryValidationError(`${field} is too long.`)
  }

  return normalizedValue
}

const readBoolean = (values, field, { required = false } = {}) => {
  const value = values[field]

  if (value === undefined) {
    if (required) {
      throw new InquiryValidationError(`${field} is required.`)
    }
    return false
  }

  if (typeof value !== 'boolean') {
    throw new InquiryValidationError(`${field} must be true or false.`)
  }

  return value
}

const readInteger = (
  values,
  field,
  { required = false, min = 0, max = 100 },
) => {
  const value = values[field]

  if (value === undefined || value === null || value === '') {
    if (required) {
      throw new InquiryValidationError(`${field} is required.`)
    }
    return ''
  }

  if (
    (typeof value !== 'string' && typeof value !== 'number') ||
    !/^\d+$/.test(String(value))
  ) {
    throw new InquiryValidationError(`${field} must be a whole number.`)
  }

  const numberValue = Number(value)

  if (!Number.isSafeInteger(numberValue) || numberValue < min || numberValue > max) {
    throw new InquiryValidationError(`${field} is outside the allowed range.`)
  }

  return String(numberValue)
}

const validateEmail = (email) => {
  if (!EMAIL_PATTERN.test(email)) {
    throw new InquiryValidationError('A valid email address is required.')
  }
}

const validatePhone = (phone, field = 'phone') => {
  if (phone.replace(/\D/g, '').length < 7) {
    throw new InquiryValidationError(`${field} is invalid.`)
  }
}

const validateDate = (date, field) => {
  if (!DATE_PATTERN.test(date)) {
    throw new InquiryValidationError(`${field} must be a valid date.`)
  }

  const [year, month, day] = date.split('-').map(Number)
  const parsedDate = new Date(Date.UTC(year, month - 1, day))

  if (
    parsedDate.getUTCFullYear() !== year ||
    parsedDate.getUTCMonth() !== month - 1 ||
    parsedDate.getUTCDate() !== day
  ) {
    throw new InquiryValidationError(`${field} must be a valid date.`)
  }
}

const validateInquiryValues = (formType, values) => {
  const normalizedValues = {
    fullName: readString(values, 'fullName', { required: true, maxLength: 100 }),
    email: readString(values, 'email', { required: true, maxLength: 254 }),
    phone: readString(values, 'phone', { required: true, maxLength: 30 }),
  }

  validateEmail(normalizedValues.email)
  validatePhone(normalizedValues.phone)

  if (formType === 'contact') {
    normalizedValues.inquiryType = readString(values, 'inquiryType', {
      maxLength: 100,
    })
    normalizedValues.message = readString(values, 'message', {
      required: true,
      maxLength: 5000,
    })
    return normalizedValues
  }

  normalizedValues.whatsapp = readString(values, 'whatsapp', { maxLength: 30 })
  normalizedValues.country = readString(values, 'country', {
    required: true,
    maxLength: 100,
  })
  normalizedValues.arrivalDate = readString(values, 'arrivalDate', {
    required: true,
    maxLength: 10,
  })
  normalizedValues.departureDate = readString(values, 'departureDate', {
    required: true,
    maxLength: 10,
  })
  normalizedValues.adults = readInteger(values, 'adults', {
    required: true,
    min: 1,
    max: 100,
  })
  normalizedValues.children = readInteger(values, 'children', {
    required: true,
    max: 100,
  })
  normalizedValues.visitType = readString(values, 'visitType', { maxLength: 100 })
  normalizedValues.experienceSelection = readString(values, 'experienceSelection', {
    maxLength: 100,
  })
  normalizedValues.accommodationRequired = readString(
    values,
    'accommodationRequired',
    { maxLength: 10 },
  )
  normalizedValues.roomType = readString(values, 'roomType', { maxLength: 100 })
  normalizedValues.rooms = readInteger(values, 'rooms', { min: 1, max: 100 })
  normalizedValues.nights = readInteger(values, 'nights', { min: 1, max: 365 })
  normalizedValues.transportRequired = readBoolean(values, 'transportRequired')
  normalizedValues.mealsRequired = readBoolean(values, 'mealsRequired')
  normalizedValues.guideRequired = readBoolean(values, 'guideRequired')
  normalizedValues.groupSupport = readBoolean(values, 'groupSupport')
  normalizedValues.accessibilityRequirements = readString(
    values,
    'accessibilityRequirements',
    { maxLength: 2000 },
  )
  normalizedValues.specialRequests = readString(values, 'specialRequests', {
    maxLength: 2000,
  })
  normalizedValues.consent = readBoolean(values, 'consent', { required: true })

  if (normalizedValues.whatsapp) {
    validatePhone(normalizedValues.whatsapp, 'whatsapp')
  }

  validateDate(normalizedValues.arrivalDate, 'arrivalDate')
  validateDate(normalizedValues.departureDate, 'departureDate')

  if (normalizedValues.departureDate < normalizedValues.arrivalDate) {
    throw new InquiryValidationError('Departure date cannot be before arrival date.')
  }

  if (normalizedValues.accommodationRequired === 'Yes' && !normalizedValues.nights) {
    throw new InquiryValidationError('nights is required when accommodation is requested.')
  }

  if (!normalizedValues.consent) {
    throw new InquiryValidationError('Consent is required.')
  }

  return normalizedValues
}

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }

    return entities[character]
  })

const escapeInquiryValues = (values) =>
  Object.fromEntries(
    Object.entries(values).map(([field, value]) => [
      field,
      typeof value === 'string' ? escapeHtml(value) : value,
    ]),
  )

const wait = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

const isRetryableBrevoFailure = (error) => {
  if (error.status) {
    return error.status >= 500 || error.status === 408 || error.status === 429
  }

  return (
    error.name === 'AbortError' ||
    error.name === 'TimeoutError' ||
    error instanceof TypeError
  )
}

async function sendBrevoEmail(emailData) {
  for (let attempt = 1; attempt <= MAX_EMAIL_ATTEMPTS; attempt += 1) {
    console.log(`Sending Brevo email (attempt ${attempt}/${MAX_EMAIL_ATTEMPTS})`)

    try {
      const response = await fetch(BREVO_EMAIL_URL, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'api-key': process.env.BREVO_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify(emailData),
        signal: AbortSignal.timeout(30000),
      })

      if (!response.ok) {
        const error = new Error(
          `Brevo API request failed with status ${response.status}`,
        )
        error.status = response.status
        throw error
      }

      return await response.json()
    } catch (error) {
      const shouldRetry =
        attempt < MAX_EMAIL_ATTEMPTS && isRetryableBrevoFailure(error)

      if (!shouldRetry) {
        throw error
      }

      const retryDelay = attempt * 1000
      console.warn(
        `Brevo email attempt ${attempt} failed; retrying in ${retryDelay}ms.`,
      )
      await wait(retryDelay)
    }
  }
}

// Basic API test
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Whispers of Lake Katwe API is running',
  })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
  })
})

// Receive enquiries and booking requests from the website
app.post('/api/inquiries', async (req, res) => {
  try {
    if (!isPlainObject(req.body)) {
      throw new InquiryValidationError('Request body must be a JSON object.')
    }

    const { formType, values } = req.body

    if (formType !== 'contact' && formType !== 'plan-visit') {
      throw new InquiryValidationError('Invalid form type.')
    }

    if (!isPlainObject(values)) {
      throw new InquiryValidationError('Form values must be a JSON object.')
    }

    const validatedValues = validateInquiryValues(formType, values)
    const emailValues = escapeInquiryValues(validatedValues)

    let subject
    let htmlContent

    // CONTACT FORM
    if (formType === 'contact') {
      subject = `New Website Enquiry - ${validatedValues.fullName}`

      htmlContent = `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Website Enquiry</h2>

            <p>
              A new enquiry has been submitted through the
              Whispers of Lake Katwe website.
            </p>

            <hr>

            <p><strong>Name:</strong> ${emailValues.fullName}</p>
            <p><strong>Email:</strong> ${emailValues.email}</p>
            <p><strong>Phone:</strong> ${emailValues.phone || 'Not provided'}</p>
            <p>
              <strong>Inquiry Type:</strong>
              ${emailValues.inquiryType || 'General inquiry'}
            </p>

            <h3>Message</h3>
            <p>${emailValues.message || 'No message provided'}</p>
          </body>
        </html>
      `
    }

    // PLAN YOUR VISIT / BOOKING FORM
    else if (formType === 'plan-visit') {
      subject = `New Visit Request - ${validatedValues.fullName}`

      htmlContent = `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Plan Your Visit Request</h2>

            <p>
              A visitor has submitted a new visit request through
              the Whispers of Lake Katwe website.
            </p>

            <hr>

            <h3>Personal Details</h3>

            <p><strong>Name:</strong> ${emailValues.fullName}</p>
            <p><strong>Email:</strong> ${emailValues.email}</p>
            <p><strong>Phone:</strong> ${emailValues.phone || 'Not provided'}</p>
            <p><strong>WhatsApp:</strong> ${emailValues.whatsapp || 'Not provided'}</p>
            <p><strong>Country:</strong> ${emailValues.country || 'Not provided'}</p>

            <h3>Visit Details</h3>

            <p><strong>Arrival Date:</strong> ${emailValues.arrivalDate || 'Not provided'}</p>
            <p><strong>Departure Date:</strong> ${emailValues.departureDate || 'Not provided'}</p>
            <p><strong>Adults:</strong> ${emailValues.adults || '0'}</p>
            <p><strong>Children:</strong> ${emailValues.children || '0'}</p>
            <p><strong>Visit Type:</strong> ${emailValues.visitType || 'Not provided'}</p>
            <p>
              <strong>Experience:</strong>
              ${emailValues.experienceSelection || 'Not provided'}
            </p>

            <h3>Accommodation</h3>

            <p>
              <strong>Accommodation Required:</strong>
              ${emailValues.accommodationRequired || 'Not provided'}
            </p>
            <p><strong>Room Type:</strong> ${emailValues.roomType || 'Not provided'}</p>
            <p><strong>Rooms:</strong> ${emailValues.rooms || 'Not provided'}</p>
            <p><strong>Nights:</strong> ${emailValues.nights || 'Not provided'}</p>

            <h3>Additional Services</h3>

            <p>
              <strong>Transport Required:</strong>
              ${emailValues.transportRequired ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Meals Required:</strong>
              ${emailValues.mealsRequired ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Guide Required:</strong>
              ${emailValues.guideRequired ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Group Support:</strong>
              ${emailValues.groupSupport ? 'Yes' : 'No'}
            </p>

            <h3>Other Information</h3>

            <p>
              <strong>Accessibility Requirements:</strong><br>
              ${emailValues.accessibilityRequirements || 'None provided'}
            </p>

            <p>
              <strong>Special Requests:</strong><br>
              ${emailValues.specialRequests || 'None provided'}
            </p>
          </body>
        </html>
      `
    }

    const result = await sendBrevoEmail({
      sender: {
        name: process.env.BREVO_SENDER_NAME,
        email: process.env.BREVO_SENDER_EMAIL,
      },

      to: [
        {
          email: process.env.INQUIRY_RECEIVER_EMAIL,
          name: 'Whispers of Lake Katwe',
        },
      ],

      // This makes Gmail Reply go to the visitor
      replyTo: {
        email: validatedValues.email,
        name: validatedValues.fullName,
      },

      subject,
      htmlContent,
    })

    console.log(`Inquiry email sent successfully (${formType})`)

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been submitted successfully.',
      messageId: result.messageId,
    })
  } catch (error) {
    if (error instanceof InquiryValidationError) {
      return res.status(400).json({
        success: false,
        message: error.message,
      })
    }

    console.error('Inquiry email delivery failed:', {
      message: error.message,
      status: error.status,
    })

    res.status(500).json({
      success: false,
      message: 'Unable to submit your inquiry at this time.',
    })
  }
})

app.use((error, req, res, next) => {
  if (error.type === 'entity.too.large') {
    return res.status(413).json({
      success: false,
      message: 'Request body is too large.',
    })
  }

  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return res.status(400).json({
      success: false,
      message: 'Request body must contain valid JSON.',
    })
  }

  console.error('Unexpected server error:', { message: error.message })
  return res.status(500).json({
    success: false,
    message: 'An unexpected server error occurred.',
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
