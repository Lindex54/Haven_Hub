import Button from '../common/Button'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { packages } from '../../data/packages'

function TourPackagesPreview() {
  return (
    <PageSection>
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Packages"
          title="Flexible package ideas for short stays, combined visits and group planning."
          description="Use these sample package structures as starting points for customised itineraries."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.slug} className="card space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-earth-brown">
                  {item.duration}
                </p>
                <h3 className="text-card-title font-semibold text-text-main">{item.name}</h3>
              </div>
              <p className="text-sm leading-7 text-text-muted">{item.summary}</p>
              <p className="text-sm font-semibold text-primary">{item.priceLabel}</p>
            </article>
          ))}
        </div>
        <Button to="/experiences">View Tour Packages</Button>
      </div>
    </PageSection>
  )
}

export default TourPackagesPreview
