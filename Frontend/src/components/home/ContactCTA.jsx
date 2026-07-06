import Button from '../common/Button'

function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,_#1f5e4a_0%,_#164437_100%)] px-6 py-10 text-text-white shadow-medium sm:px-8 lg:px-12 lg:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 text-left">
              <span className="inline-flex rounded-full bg-text-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary-light">
                Ready to plan?
              </span>
              <h2 className="text-section-title leading-section-title tracking-section-title font-bold">
                Need help booking your stay?
              </h2>
              <p className="max-w-2xl text-body leading-body text-text-white/78">
                Our team is ready to help you choose the right room and plan a
                comfortable visit.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button
                href="#contact"
                variant="outline"
                className="border-text-white/15 bg-text-white/8 text-text-white hover:bg-text-white/14 hover:text-text-white"
              >
                Contact Us
              </Button>
              <Button href="#availability" variant="secondary">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
