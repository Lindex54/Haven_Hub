import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { usePageMeta } from '../../utils/pageMeta'

function InquiryConfirmationPage() {
  usePageMeta('Inquiry Confirmation')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Inquiry Confirmation' }]}
        description="Thank you for reaching out. Our team will follow up to confirm availability, pricing and next steps."
        eyebrow="Inquiry submitted"
        title="Your request has been received"
      />
      <PageSection>
        <div className="card max-w-3xl space-y-5">
          <p className="muted-text">
            Your visit request has been submitted. Our team will contact you to confirm availability, pricing and arrangements.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/plan-your-visit">Plan another visit</Button>
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </PageSection>
    </main>
  )
}

export default InquiryConfirmationPage
