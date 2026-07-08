import PageHero from '../components/common/PageHero'
import PageSection from '../components/common/PageSection'
import Button from '../components/common/Button'

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact StayNest"
        description="Reach out for booking help, room recommendations, event questions, or general inquiries."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />
      <PageSection>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="card space-y-5">
            <h2 className="text-card-title leading-card-title font-bold text-text-main">
              Contact Information
            </h2>
            <div className="space-y-4 text-body leading-body text-text-muted">
              <p>Phone: +256 700 000 000</p>
              <p>Email: info@staynest.com</p>
              <p>Location: Kampala, Uganda</p>
              <p>Hours: Monday - Sunday, 7:00 AM - 10:00 PM</p>
            </div>
          </div>

          <form className="card space-y-5" onSubmit={(event) => event.preventDefault()}>
            <h2 className="text-card-title leading-card-title font-bold text-text-main">
              Send a Message
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="input-field" type="text" placeholder="Full name" />
              <input className="input-field" type="email" placeholder="Email address" />
            </div>
            <input className="input-field" type="text" placeholder="Subject" />
            <textarea
              className="input-field min-h-36 resize-none"
              placeholder="Tell us how we can help"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit">Send Inquiry</Button>
              <Button to="/book-now" variant="outline">
                Go to Booking
              </Button>
            </div>
          </form>
        </div>
      </PageSection>
    </>
  )
}

export default ContactPage
