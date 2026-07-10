import Button from '../common/Button'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { travelTips } from '../../data/travelInformation'

function TravelInformationPreview() {
  return (
    <PageSection className="bg-soft-background/80">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Travel Information"
          title="Practical visitor guidance before you arrive."
          description="Use these preparation notes as a starting point, then request a tailored plan if you need itinerary or logistics support."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {travelTips.slice(0, 6).map((tip) => (
            <div key={tip} className="rounded-2xl border border-border bg-surface px-5 py-4 shadow-soft">
              <p className="text-sm leading-7 text-text-muted">{tip}</p>
            </div>
          ))}
        </div>
        <Button to="/plan-your-visit" variant="outline">
          Travel Information
        </Button>
      </div>
    </PageSection>
  )
}

export default TravelInformationPreview
