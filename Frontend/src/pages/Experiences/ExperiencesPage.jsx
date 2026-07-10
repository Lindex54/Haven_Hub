import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { experiences } from '../../data/experiences'
import { packages } from '../../data/packages'
import { usePageMeta } from '../../utils/pageMeta'

function ExperiencesPage() {
  usePageMeta('Tours and Experiences')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Tours & Experiences' }]}
        description="Browse guided tours, heritage visits, photography outings and flexible group-focused planning options."
        eyebrow="Experiences"
        title="Tours and Experiences"
      />
      <PageSection>
        <div className="space-y-10">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {experiences.map((item) => (
              <article key={item.slug} className="card flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-dark">
                  {item.category}
                </span>
                <h2 className="text-card-title font-semibold text-text-main">{item.title}</h2>
                <p className="flex-1 text-sm leading-7 text-text-muted">{item.shortDescription}</p>
                <div className="text-sm text-text-muted">
                  <p>{item.duration}</p>
                  <p>{item.priceLabel}</p>
                </div>
                <Button to={`/experiences/${item.slug}`} variant="outline">
                  View experience
                </Button>
              </article>
            ))}
          </div>
          <div className="space-y-6">
            <h2 className="text-card-title font-semibold text-text-main">Sample package ideas</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {packages.map((item) => (
                <article key={item.slug} className="card space-y-3">
                  <p className="text-sm font-semibold text-earth-brown">{item.duration}</p>
                  <h3 className="text-xl font-semibold text-text-main">{item.name}</h3>
                  <p className="text-sm leading-7 text-text-muted">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </main>
  )
}

export default ExperiencesPage
