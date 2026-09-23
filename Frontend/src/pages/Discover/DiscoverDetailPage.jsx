import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { discoverPages } from '../../data/discover'
import { nearbyAttractions } from '../../data/nearbyAttractions'
import { usePageMeta } from '../../utils/pageMeta'

function DiscoverDetailPage({ slug }) {
  const page = discoverPages[slug]
  usePageMeta(page.title)

  const hasSidebar = slug !== 'salt-mining'

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Discover', path: '/discover' },
          { label: page.title },
        ]}
        description={page.description}
        eyebrow={page.eyebrow}
        image={page.image}
        title={page.title}
      />
      <PageSection>
        <div className={`grid gap-6 ${hasSidebar ? 'lg:grid-cols-[1fr_0.72fr]' : ''}`}>
          <div className="space-y-6">
            {page.sections.map((section) => (
              <article key={section.heading} className={section.image ? undefined : 'card'}>
                {section.image ? (
                  <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
                    <div className="card">
                      <h2 className="text-card-title font-semibold text-text-main">{section.heading}</h2>
                      <p className="mt-4 muted-text">{section.body}</p>
                    </div>
                    <img
                      alt={section.imageAlt || section.heading}
                      className="h-full w-full rounded-card object-cover shadow-card"
                      loading="lazy"
                      src={section.image}
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-card-title font-semibold text-text-main">{section.heading}</h2>
                    {section.body ? <p className="mt-4 muted-text">{section.body}</p> : null}
                    {section.list ? (
                      <ul className="mt-4 space-y-3">
                        {section.list.map((item) => (
                          <li key={item} className="flex gap-3 muted-text">
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-secondary"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                )}
              </article>
            ))}
            {!hasSidebar ? (
              <div className="card flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-card-title font-semibold text-text-main">Suggested next step</h2>
                  <p className="mt-2 muted-text">
                    If you would like to turn this interest into a full trip, send us your preferred dates and priorities.
                  </p>
                </div>
                <Button to="/plan-your-visit">Plan Your Visit</Button>
              </div>
            ) : null}
          </div>
          {hasSidebar ? (
            <aside className="space-y-6">
              {slug === 'nearby-attractions' ? (
                <div className="card space-y-4">
                  <h2 className="text-card-title font-semibold text-text-main">Sample nearby attractions</h2>
                  {nearbyAttractions.map((item) => (
                    <div key={item.id} className="rounded-2xl bg-soft-background p-4">
                      <h3 className="font-semibold text-text-main">{item.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-text-muted">{item.summary}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card space-y-4">
                  <h2 className="text-card-title font-semibold text-text-main">Suggested next step</h2>
                  <p className="muted-text">
                    If you would like to turn this interest into a full trip, send us your preferred dates and priorities.
                  </p>
                  <Button to="/plan-your-visit">Plan Your Visit</Button>
                </div>
              )}
            </aside>
          ) : null}
        </div>
      </PageSection>
    </main>
  )
}

export default DiscoverDetailPage
