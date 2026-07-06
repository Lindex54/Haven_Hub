import { Star } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import { testimonials } from '../../data/testimonials'

function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom space-y-12">
        <SectionHeader
          eyebrow="Reviews"
          title="What Our Guests Say"
          description="Warm feedback from guests who came for comfort, convenience, and a memorable lodge stay."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="card flex h-full flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
            >
              <div className="flex items-center gap-1 text-secondary">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-body leading-body text-text-muted">
                "{item.review}"
              </p>

              <div className="mt-auto border-t border-border pt-5">
                <p className="text-subtitle leading-subtitle font-semibold text-text-main">
                  {item.name}
                </p>
                <p className="text-small leading-small text-text-light">
                  {item.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
