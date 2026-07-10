import Button from '../common/Button'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { experiences } from '../../data/experiences'

function FeaturedExperiences() {
  return (
    <PageSection className="bg-soft-background/80">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Experiences"
          title="Guided experiences built for curious, well-prepared travellers."
          description="Choose from guided tours, nature walks, birdwatching, heritage visits and planning support for groups, schools and photography-focused travel."
        />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {experiences.filter((item) => item.featured).slice(0, 4).map((item) => (
            <article key={item.slug} className="card flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-dark">
                {item.category}
              </span>
              <h3 className="text-card-title font-semibold text-text-main">{item.title}</h3>
              <p className="flex-1 text-sm leading-7 text-text-muted">{item.shortDescription}</p>
              <Button to={`/experiences/${item.slug}`} variant="outline">
                View experience
              </Button>
            </article>
          ))}
        </div>
        <Button to="/experiences">Explore All Experiences</Button>
      </div>
    </PageSection>
  )
}

export default FeaturedExperiences
