import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'

const reasons = [
  'Local knowledge',
  'Flexible planning',
  'Guided experiences',
  'Comfortable accommodation',
  'Group visit support',
  'Responsible visitor practices',
]

function WhyTravelWithUs() {
  return (
    <PageSection>
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Why Travel With Us"
          title="Support that stays practical, welcoming and flexible."
          description="The focus is on helping visitors shape a thoughtful trip around real interests, pacing and logistics."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-2xl border border-border bg-surface px-5 py-4 shadow-soft">
              <p className="font-medium text-text-main">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  )
}

export default WhyTravelWithUs
