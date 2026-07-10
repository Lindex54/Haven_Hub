import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { usePageMeta } from '../../utils/pageMeta'

function TermsPage() {
  usePageMeta('Terms')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Terms' }]}
        description="A simple placeholder terms page for the current inquiry-based frontend."
        eyebrow="Legal"
        title="Terms"
      />
      <PageSection>
        <div className="card">
          <p className="muted-text">
            Information on this site is presented for planning and inquiry purposes. Availability, pricing and arrangements are confirmed after direct follow-up.
          </p>
        </div>
      </PageSection>
    </main>
  )
}

export default TermsPage
