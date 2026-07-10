import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { testimonials } from '../../data/testimonials'

function Testimonials() {
  return (
    <PageSection>
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="Sample visitor feedback for the new travel-focused direction."
          description="These entries are mock content only and can be replaced with verified testimonials later."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="card space-y-4">
              <p className="text-base leading-8 text-text-main">"{item.quote}"</p>
              <footer className="text-sm text-text-muted">
                {item.name} • {item.type}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </PageSection>
  )
}

export default Testimonials
