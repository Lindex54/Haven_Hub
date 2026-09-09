import { CalendarDays, Compass, House, Shield, Users, MapPin } from 'lucide-react'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'

const reasons = [
  { icon: MapPin, label: 'Local knowledge' },
  { icon: CalendarDays, label: 'Flexible planning' },
  { icon: Compass, label: 'Guided experiences' },
  { icon: House, label: 'Comfortable accommodation' },
  { icon: Users, label: 'Group visit support' },
  { icon: Shield, label: 'Responsible visitor practices' },
]

function WhyTravelWithUs() {
  return (
    <PageSection className="bg-cream">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Why Travel With Us"
          title="Why travel with us"
          description="The focus is on helping visitors shape a thoughtful trip around real interests, pacing and logistics."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 shadow-soft"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon aria-hidden="true" size={18} />
              </span>
              <p className="font-medium text-text-main">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  )
}

export default WhyTravelWithUs
