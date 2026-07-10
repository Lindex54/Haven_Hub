import Button from '../common/Button'
import PageSection from '../common/PageSection'

function ContactCTA() {
  return (
    <PageSection>
      <div className="rounded-[32px] bg-[linear-gradient(135deg,_rgba(31,94,74,0.96),_rgba(122,81,51,0.9))] px-6 py-10 text-text-white shadow-card sm:px-8 lg:px-12 lg:py-14">
        <div className="max-w-3xl space-y-5">
          <h2 className="text-section-title font-bold leading-section-title text-text-white">
            Ready to explore Lake Katwe?
          </h2>
          <p className="text-base leading-8 text-white/85">
            Tell us what you would like to experience, and our team will help you plan your visit, accommodation and activities.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="bg-white text-primary hover:bg-white/90" to="/plan-your-visit">
              Plan Your Visit
            </Button>
            <Button className="border-white/30 bg-white/10 text-white hover:bg-white/15" to="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </PageSection>
  )
}

export default ContactCTA
