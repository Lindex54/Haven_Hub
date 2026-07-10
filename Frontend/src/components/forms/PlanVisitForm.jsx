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
  whatsapp: '',
  country: '',
  arrivalDate: '',
  departureDate: '',
  adults: '1',
  children: '0',
  visitType: 'Guided tour',
  experienceSelection: 'Lake Katwe Guided Tour',
  accommodationRequired: 'Yes',
  roomType: 'Standard Room',
  rooms: '1',
  nights: '1',
  transportRequired: false,
  mealsRequired: false,
  guideRequired: true,
  groupSupport: false,
  accessibilityRequirements: '',
  specialRequests: '',
  consent: false,
}

function PlanVisitForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { showToast } = useToast()

  const updateValue = (event) => {
    const { name, value, type, checked } = event.target
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!values.fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!validateEmail(values.email)) nextErrors.email = 'Enter a valid email address.'
    if (!validatePhone(values.phone)) nextErrors.phone = 'Enter a valid phone number.'
    if (values.whatsapp && !validatePhone(values.whatsapp)) {
      nextErrors.whatsapp = 'Enter a valid WhatsApp number.'
    }
    if (!values.country.trim()) nextErrors.country = 'Country of residence is required.'
    if (!values.arrivalDate) nextErrors.arrivalDate = 'Arrival date is required.'
    if (!values.departureDate) nextErrors.departureDate = 'Departure date is required.'
    if (values.arrivalDate && values.departureDate && values.departureDate < values.arrivalDate) {
      nextErrors.departureDate = 'Departure date must be after arrival date.'
    }
    if (Number(values.adults) < 1) nextErrors.adults = 'At least one adult is required.'
    if (Number(values.children) < 0) nextErrors.children = 'Children count cannot be negative.'
    if (values.accommodationRequired === 'Yes' && Number(values.nights) < 1) {
      nextErrors.nights = 'Number of nights must be at least 1.'
    }
    if (!values.consent) nextErrors.consent = 'Please confirm consent before submitting.'

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) return

    setIsSubmitting(true)
    showToast('Submitting your visit request...', 'info')

    try {
      await submitInquiry('plan-visit', values)
      showToast('Visit request submitted successfully.', 'success')
      navigate('/inquiry-confirmation')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <section className="card space-y-5">
        <h2 className="text-card-title font-bold text-text-main">Personal details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField error={errors.fullName} label="Full name" name="fullName" onChange={updateValue} value={values.fullName} />
          <FormField error={errors.email} label="Email" name="email" onChange={updateValue} type="email" value={values.email} />
          <FormField error={errors.phone} label="Phone number" name="phone" onChange={updateValue} type="tel" value={values.phone} />
          <FormField error={errors.whatsapp} label="WhatsApp number" name="whatsapp" onChange={updateValue} type="tel" value={values.whatsapp} />
          <FormField error={errors.country} label="Country of residence" name="country" onChange={updateValue} value={values.country} />
        </div>
      </section>

      <section className="card space-y-5">
        <h2 className="text-card-title font-bold text-text-main">Visit details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField error={errors.arrivalDate} label="Preferred arrival date" name="arrivalDate" onChange={updateValue} type="date" value={values.arrivalDate} />
          <FormField error={errors.departureDate} label="Preferred departure date" name="departureDate" onChange={updateValue} type="date" value={values.departureDate} />
          <FormField error={errors.adults} label="Number of adults" min="1" name="adults" onChange={updateValue} type="number" value={values.adults} />
          <FormField error={errors.children} label="Number of children" min="0" name="children" onChange={updateValue} type="number" value={values.children} />
          <FormField
            as="select"
            label="Visit type"
            name="visitType"
            onChange={updateValue}
            options={[
              'Guided tour',
              'Accommodation',
              'Tour and accommodation package',
              'Group visit',
              'School visit',
              'Research visit',
              'Photography visit',
              'Transport request',
              'Custom itinerary',
            ].map((option) => ({ label: option, value: option }))}
            value={values.visitType}
          />
        </div>
      </section>

      <section className="card space-y-5">
        <h2 className="text-card-title font-bold text-text-main">Experience selection</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            as="select"
            label="Preferred experience"
            name="experienceSelection"
            onChange={updateValue}
            options={[
              'Lake Katwe Guided Tour',
              'Salt-Mining Experience',
              'Nature Walk',
              'Birdwatching',
              'Community Experience',
              'Photography Tour',
              'Cultural Tour',
              'Nearby attraction visit',
            ].map((option) => ({ label: option, value: option }))}
            value={values.experienceSelection}
          />
        </div>
      </section>

      <section className="card space-y-5">
        <h2 className="text-card-title font-bold text-text-main">Accommodation</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            as="select"
            label="Accommodation required"
            name="accommodationRequired"
            onChange={updateValue}
            options={[
              { label: 'Yes', value: 'Yes' },
              { label: 'No', value: 'No' },
            ]}
            value={values.accommodationRequired}
          />
          <FormField
            as="select"
            label="Preferred room type"
            name="roomType"
            onChange={updateValue}
            options={[
              'Standard Room',
              'Deluxe Room',
              'Family Room',
              'Group Accommodation',
            ].map((option) => ({ label: option, value: option }))}
            value={values.roomType}
          />
          <FormField label="Number of rooms" min="1" name="rooms" onChange={updateValue} type="number" value={values.rooms} />
          <FormField error={errors.nights} label="Number of nights" min="1" name="nights" onChange={updateValue} type="number" value={values.nights} />
        </div>
      </section>

      <section className="card space-y-5">
        <h2 className="text-card-title font-bold text-text-main">Additional services</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['transportRequired', 'Transport required'],
            ['mealsRequired', 'Meals required'],
            ['guideRequired', 'Guide required'],
            ['groupSupport', 'Group planning support'],
          ].map(([name, label]) => (
            <label key={name} className="flex items-center gap-3 rounded-2xl border border-border bg-soft-background px-4 py-3">
              <input checked={values[name]} name={name} onChange={updateValue} type="checkbox" />
              <span className="text-sm font-medium text-text-main">{label}</span>
            </label>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            as="textarea"
            className="min-h-28 resize-y"
            label="Accessibility requirements"
            name="accessibilityRequirements"
            onChange={updateValue}
            value={values.accessibilityRequirements}
          />
          <FormField
            as="textarea"
            className="min-h-28 resize-y"
            label="Special requests"
            name="specialRequests"
            onChange={updateValue}
            value={values.specialRequests}
          />
        </div>
      </section>

      <section className="card space-y-4">
        <label className="flex items-start gap-3">
          <input checked={values.consent} name="consent" onChange={updateValue} type="checkbox" />
          <span className="text-sm leading-7 text-text-muted">
            I confirm that my information may be used to respond to this inquiry.
          </span>
        </label>
        {errors.consent ? <p className="text-sm text-error">{errors.consent}</p> : null}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Submitting...' : 'Submit Visit Request'}
          </Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </section>
    </form>
  )
}

export default PlanVisitForm
