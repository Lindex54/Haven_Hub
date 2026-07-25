import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../common/SectionHeader'
import { experiences } from '../../data/experiences'
import backgroundImage from '../../assets/images/discover/lake-katwe-local-salt-guide.jpg'

function FeaturedExperiences() {
  const featuredExperiences = experiences
    .filter((item) => item.featured)
    .slice(0, 4)

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center grayscale"
        loading="lazy"
        src={backgroundImage}
      />
      <div className="absolute inset-0 -z-20 bg-cream/88" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(248,245,239,0.72)_0%,_rgba(248,245,239,0.45)_45%,_rgba(31,94,74,0.12)_100%)]" />

      <div className="container-custom py-16 md:py-20 lg:py-24">
        <div className="space-y-12">
          <SectionHeader
            eyebrow="Experiences"
            title="Guided experiences built for curious, well-prepared travellers."
            description="Choose from guided tours, nature walks, birdwatching and heritage visits shaped around thoughtful local guidance."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredExperiences.map((item) => (
              <article
                className="flex min-h-[25rem] flex-col bg-surface px-7 py-9 text-center shadow-medium lg:px-8 lg:py-11"
                key={item.slug}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-dark">
                  {item.category}
                </p>
                <h3 className="mt-5 text-card-title font-bold text-primary-dark">
                  {item.title}
                </h3>
                <p className="mt-7 flex-1 text-sm leading-7 text-text-muted">
                  {item.shortDescription}
                </p>
                <Link
                  className="group mt-8 inline-flex items-center justify-center gap-3 font-semibold text-primary transition-colors hover:text-primary-dark"
                  to={`/experiences/${item.slug}`}
                >
                  View experience
                  <span className="grid size-8 place-items-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-primary-dark">
                    <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Link
        className="group flex min-h-20 w-full items-center justify-center gap-4 bg-primary px-6 py-5 text-center text-lg font-bold text-white transition-colors hover:bg-primary-dark"
        to="/experiences"
      >
        Explore All Experiences
        <span className="grid size-9 place-items-center rounded-full bg-secondary text-primary-dark transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight aria-hidden="true" size={18} />
        </span>
      </Link>
    </section>
  )
}

export default FeaturedExperiences