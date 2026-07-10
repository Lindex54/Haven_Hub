import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { usePageMeta } from '../../utils/pageMeta'

function PrivacyPage() {
  usePageMeta('Privacy')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Privacy' }]}
        description="A simple placeholder privacy page for the current inquiry-based frontend."
        eyebrow="Legal"
        title="Privacy"
      />
      <PageSection>
        <div className="card">
          <p className="muted-text">
            Inquiry details submitted through this frontend are currently stored locally for development and will later be connected to a backend workflow.
          </p>
        </div>
      </PageSection>
    </main>
  )
}

export default PrivacyPage
