import { useParams } from 'react-router-dom'
import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import EmptyState from '../../components/common/EmptyState'
import { experiences } from '../../data/experiences'
import { usePageMeta } from '../../utils/pageMeta'

function ExperienceDetailsPage({ slug: slugProp }) {
  const { slug: slugParam } = useParams()
  const slug = slugProp ?? slugParam
  const experience = experiences.find((item) => item.slug === slug)

  usePageMeta(experience?.title ?? 'Experience')

  if (!experience) {
    return (
      <main>
        <PageSection>
          <EmptyState
            description="The experience you requested could not be found."
            title="Experience not found"
          />
        </PageSection>
      </main>
    )
  }

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Tours & Experiences', path: '/experiences' },
          { label: experience.title },
        ]}
        description={experience.description}
        eyebrow={experience.category}
        image={experience.image}
        title={experience.title}
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="space-y-6">
            {[
              ['Highlights', experience.highlights],
              ['Included', experience.included],
              ['Excluded', experience.excluded],
              ['What to carry', experience.whatToCarry],
              ['Sample itinerary', experience.itinerary],
              ['Safety notes', experience.safetyNotes],
            ].map(([heading, items]) => (
              <article key={heading} className="card">
                <h2 className="text-card-title font-semibold text-text-main">{heading}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-text-muted">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <aside className="space-y-6">
            <div className="card space-y-4">
              <h2 className="text-card-title font-semibold text-text-main">Experience details</h2>
              <div className="space-y-2 text-sm text-text-muted">
                <p>Duration: {experience.duration}</p>
                <p>Group size: {experience.groupSize}</p>
                <p>Difficulty: {experience.difficulty}</p>
                <p>Meeting point: {experience.meetingPoint}</p>
                <p className="font-semibold text-primary">{experience.priceLabel}</p>
              </div>
              <Button to="/plan-your-visit">Request quotation</Button>
            </div>
          </aside>
        </div>
      </PageSection>
    </main>
  )
}

export default ExperienceDetailsPage
