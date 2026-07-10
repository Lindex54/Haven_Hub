import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import PlanVisitForm from '../../components/forms/PlanVisitForm'
import { travelTips } from '../../data/travelInformation'
import { usePageMeta } from '../../utils/pageMeta'

function PlanVisitPage() {
  usePageMeta('Plan Your Visit')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Plan Your Visit' }]}
        description="Tell us about your preferred dates, experiences, accommodation needs and logistics so we can help shape the visit."
        eyebrow="Plan Your Visit"
        title="Plan Your Visit"
      />
      <PageSection>
        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr]">
          <PlanVisitForm />
          <aside className="space-y-6">
            <div className="card space-y-4">
              <h2 className="text-card-title font-bold text-text-main">What happens next?</h2>
              <p className="muted-text">
                Your visit request has been submitted. Our team will contact you to confirm availability, pricing and arrangements.
              </p>
            </div>
            <div className="card space-y-4">
              <h2 className="text-card-title font-bold text-text-main">Travel notes</h2>
              <ul className="space-y-3 text-sm leading-7 text-text-muted">
                {travelTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </PageSection>
    </main>
  )
}

export default PlanVisitPage
