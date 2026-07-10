import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import Button from '../../components/common/Button'
import { usePageMeta } from '../../utils/pageMeta'

function AboutPage() {
  usePageMeta('About the Company')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
        description="Learn about the company direction, guides, responsible visitor approach and practical visitor support."
        eyebrow="About"
        title="About the Company"
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: 'Independent company profile',
              body: 'Wispers of Lake Katwe is presented as an independent private tourism and hospitality business serving visitors around Lake Katwe. The site does not claim ownership, official authority or public-site management.',
            },
            {
              title: 'How we support travellers',
              body: 'The platform combines destination discovery, guided experiences, accommodation planning and inquiry-based trip design for individuals and groups.',
            },
          ].map((item) => (
            <article key={item.title} className="card space-y-4">
              <h2 className="text-card-title font-semibold text-text-main">{item.title}</h2>
              <p className="muted-text">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button to="/about/guides">Meet Our Guides</Button>
        </div>
      </PageSection>
    </main>
  )
}

export default AboutPage
