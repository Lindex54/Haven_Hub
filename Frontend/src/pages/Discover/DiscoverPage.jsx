import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import Button from '../../components/common/Button'
import SectionHeader from '../../components/common/SectionHeader'
import { discoverHighlights } from '../../data/discover'
import { usePageMeta } from '../../utils/pageMeta'

function DiscoverPage() {
  usePageMeta('Discover Lake Katwe')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Discover' }]}
        description="Explore Lake Katwe through destination discovery, heritage context, nature, community and wildlife-focused planning."
        eyebrow="Discover"
        title="Discover Lake Katwe"
      />
      <PageSection>
        <div className="space-y-10">
          <SectionHeader
            title="A fuller picture of the destination."
            description="This section introduces the core themes visitors may want to explore before choosing experiences, accommodation or a custom itinerary."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {discoverHighlights.map((item) => (
              <article key={item.path} className="card space-y-4">
                <h2 className="text-card-title font-semibold text-text-main">{item.title}</h2>
                <p className="text-sm leading-7 text-text-muted">{item.description}</p>
                <Button to={item.path} variant="outline">
                  Explore page
                </Button>
              </article>
            ))}
          </div>
        </div>
      </PageSection>
    </main>
  )
}

export default DiscoverPage
