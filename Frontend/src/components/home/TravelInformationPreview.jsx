import { Bus, Camera, CloudSun, Footprints, Shirt, Users } from 'lucide-react'
import CtaBar from '../common/CtaBar'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { travelTips } from '../../data/travelInformation'

const tipIcons = [Footprints, CloudSun, Camera, Bus, Shirt, Users]

function TravelInformationPreview() {
  return (
    <PageSection className="bg-soft-background">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Travel Information"
          title="Travel information"
          description="Use these preparation notes as a starting point, then request a tailored plan if you need itinerary or logistics support."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {travelTips.slice(0, 6).map((tip, index) => {
            const Icon = tipIcons[index] ?? Footprints
            return (
              <div
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface px-6 py-5 shadow-soft"
                key={tip}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <p className="text-lg leading-8 text-text-main">{tip}</p>
              </div>
            )
          })}
        </div>
        <CtaBar to="/plan-your-visit">Plan Your Visit</CtaBar>
      </div>
    </PageSection>
  )
}

export default TravelInformationPreview
