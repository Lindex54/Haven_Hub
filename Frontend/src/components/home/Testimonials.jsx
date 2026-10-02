import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { testimonials } from '../../data/testimonials'

function Testimonials() {
  return (
    <PageSection className="bg-surface">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="Visitor feedback"
          description="A few words from guests who have spent time exploring Lake Katwe with us."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="card space-y-4 bg-background">
              <p className="text-lg leading-8 text-text-main">&ldquo;{item.quote}&rdquo;</p>
              <footer className="text-sm font-medium text-text-muted">
                {item.name} &bull; {item.type}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </PageSection>
  )
}

export default Testimonials
