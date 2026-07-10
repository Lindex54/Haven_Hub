import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitInquiry } from '../../services/inquiryService'
import { validateEmail, validatePhone } from '../../utils/validators'
import Button from '../common/Button'
import useToast from '../common/useToast'
import FormField from './FormField'

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  inquiryType: 'General inquiry',
  message: '',
}

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { showToast } = useToast()

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!values.fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!validateEmail(values.email)) nextErrors.email = 'Enter a valid email address.'
    if (!validatePhone(values.phone)) nextErrors.phone = 'Enter a valid phone number.'
    if (!values.message.trim()) nextErrors.message = 'Please share your inquiry.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) return

    setIsSubmitting(true)
    showToast('Sending your inquiry...', 'info')

    try {
      await submitInquiry('contact', values)
      showToast('Inquiry sent successfully.', 'success')
      navigate('/inquiry-confirmation')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="card space-y-5" onSubmit={handleSubmit}>
      <h2 className="text-card-title font-bold text-text-main">Send an inquiry</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          error={errors.fullName}
          label="Full name"
          name="fullName"
          onChange={updateValue}
          value={values.fullName}
        />
        <FormField
          error={errors.email}
          label="Email address"
          name="email"
          onChange={updateValue}
          type="email"
          value={values.email}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          error={errors.phone}
          label="Phone number"
          name="phone"
          onChange={updateValue}
          type="tel"
          value={values.phone}
        />
        <FormField
          as="select"
          label="Inquiry type"
          name="inquiryType"
          onChange={updateValue}
          options={[
            { label: 'General inquiry', value: 'General inquiry' },
            { label: 'Transport inquiry', value: 'Transport inquiry' },
            { label: 'Accommodation request', value: 'Accommodation request' },
            { label: 'Custom visit request', value: 'Custom visit request' },
          ]}
          value={values.inquiryType}
        />
      </div>
      <FormField
        as="textarea"
        className="min-h-36 resize-y"
        error={errors.message}
        label="Message"
        name="message"
        onChange={updateValue}
        value={values.message}
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
        <Button to="/plan-your-visit" variant="outline">
          Plan Your Visit
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
