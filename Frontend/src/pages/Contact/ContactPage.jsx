import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import ContactForm from '../../components/forms/ContactForm'
import { siteConfig } from '../../config/siteConfig'
import { usePageMeta } from '../../utils/pageMeta'

function ContactPage() {
  usePageMeta('Contact')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
        description="Reach out for custom itineraries, accommodation requests, transport questions or general travel planning."
        eyebrow="Contact"
        title="Contact Us"
      />
      <PageSection>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="card space-y-5">
            <h2 className="text-card-title font-bold text-text-main">Contact information</h2>
            <div className="space-y-4 text-sm leading-7 text-text-muted">
              <p>Phone: {siteConfig.phone}</p>
              <p>WhatsApp: {siteConfig.whatsapp}</p>
              <p>Email: {siteConfig.email}</p>
              <p>Operating hours: {siteConfig.hours}</p>
              <p>Location: {siteConfig.location}</p>
              <p>Map: Placeholder only until a verified location reference is provided.</p>
              <p>Emergency contact: Placeholder to be confirmed if applicable.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </PageSection>
    </main>
  )
}

export default ContactPage
