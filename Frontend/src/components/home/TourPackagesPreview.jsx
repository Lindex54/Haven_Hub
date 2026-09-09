import { Clock } from 'lucide-react'
import CtaBar from '../common/CtaBar'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { packages } from '../../data/packages'

function TourPackagesPreview() {
  return (
    <PageSection className="bg-surface">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Packages"
          title="Tour packages"
          description="A starting point for your itinerary — every package can be tailored to your pace and interests."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.slug} className="card flex flex-col space-y-5">
              <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Clock aria-hidden="true" size={20} />
              </span>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-earth-brown">
                  {item.duration}
                </p>
                <h3 className="text-card-title font-semibold text-text-main">{item.name}</h3>
              </div>
              <p className="flex-1 text-base leading-7 text-text-muted">{item.summary}</p>
              <div className="flex flex-wrap gap-2">
                {item.activities.map((activity) => (
                  <span
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-text-muted"
                    key={activity}
                  >
                    {activity}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-primary">{item.priceLabel}</p>
            </article>
          ))}
        </div>
        <CtaBar to="/experiences">View Tour Packages</CtaBar>
      </div>
    </PageSection>
  )
}

export default TourPackagesPreview
