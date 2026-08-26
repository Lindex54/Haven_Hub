import {
  ArrowUpRight,
  Backpack,
  Clock3,
  Compass,
  Gauge,
  MapPin,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { useParams } from 'react-router-dom'
import Button from '../../components/common/Button'
import EmptyState from '../../components/common/EmptyState'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { experiences } from '../../data/experiences'
import { usePageMeta } from '../../utils/pageMeta'

const sectionStyles = {
  highlights: {
    icon: Sparkles,
    eyebrow: 'The experience',
    title: 'What makes it memorable',
    tone: 'bg-secondary/12 text-secondary-dark',
  },
  carry: {
    icon: Backpack,
    eyebrow: 'Come prepared',
    title: 'What to bring',
    tone: 'bg-lake-blue/10 text-lake-blue',
  },
}

function DetailList({ items, type }) {
  const style = sectionStyles[type]
  const Icon = style.icon

  return (
    <section className="border-t border-primary/12 py-8 first:border-t-0 first:pt-0 sm:py-10">
      <div className="grid gap-6 sm:grid-cols-[12rem_1fr] sm:gap-10">
        <div>
          <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${style.tone}`}>
            <Icon aria-hidden="true" size={19} strokeWidth={2.2} />
          </span>
          <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary-dark">
            {style.eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-text-main">{style.title}</h2>
        </div>
        <ul className="grid content-start gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              className="flex min-h-14 items-center gap-3 rounded-2xl border border-primary/15 bg-white px-4 py-3 text-[0.95rem] font-medium leading-6 text-[#3f4c47] shadow-[0_8px_30px_rgba(22,68,55,0.06)]"
              key={item}
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${style.tone}`}>
                <Icon aria-hidden="true" size={14} strokeWidth={2.4} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

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

  const facts = [
    { icon: Clock3, label: 'Duration', value: experience.duration },
    { icon: Users, label: 'Group size', value: experience.groupSize },
    { icon: Gauge, label: 'Activity level', value: experience.difficulty },
    { icon: MapPin, label: 'Meeting point', value: experience.meetingPoint },
  ]

  return (
    <main className="overflow-hidden bg-cream">
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

      <section className="relative z-10 -mt-1 pb-20 sm:pb-24 lg:pb-28">
        <div className="container-custom">
          <div className="-translate-y-8 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[0_24px_70px_rgba(22,68,55,0.14)]">
            <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
              {facts.map(({ icon: Icon, label, value }, index) => (
                <div
                  className={`flex gap-4 px-5 py-5 sm:px-6 lg:py-6 ${
                    index ? 'border-t border-border/70 sm:border-l sm:border-t-0' : ''
                  } ${index === 2 ? 'sm:border-l-0 lg:border-l' : ''}`}
                  key={label}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <div>
                    <dt className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#65716d]">{label}</dt>
                    <dd className="mt-1 text-sm font-semibold leading-5 text-text-main">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-16">
            <div>
              <div className="max-w-3xl pb-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary-dark">Designed around you</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.04em] text-text-main sm:text-4xl">
                  A closer, more meaningful way to experience Lake Katwe.
                </h2>
                <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#3f4c47]">{experience.shortDescription}</p>
              </div>

              <div className="rounded-[1.75rem] border border-primary/10 bg-white/80 px-5 py-8 shadow-[0_20px_60px_rgba(22,68,55,0.05)] backdrop-blur-sm sm:px-8 lg:px-10">
                <DetailList items={experience.highlights} type="highlights" />
                <DetailList items={experience.whatToCarry} type="carry" />
              </div>

              <section className="mt-14">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary-dark">The flow of your day</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-text-main">A sample itinerary</h2>
                  </div>
                  <Route aria-hidden="true" className="hidden text-primary/20 sm:block" size={52} strokeWidth={1.5} />
                </div>
                <ol className="mt-8 grid gap-4 md:grid-cols-3">
                  {experience.itinerary.map((item, index) => (
                    <li className="relative overflow-hidden rounded-[1.5rem] bg-primary p-6 text-white" key={item}>
                      <span className="absolute -right-3 -top-8 text-[7rem] font-bold leading-none text-white/[0.055]">
                        {index + 1}
                      </span>
                      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary-dark">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="relative mt-8 text-base font-semibold leading-6">{item}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="mt-6 flex gap-4 rounded-[1.5rem] border border-secondary/25 bg-secondary/10 p-5 sm:p-6">
                <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-secondary-dark" size={24} />
                <div>
                  <h2 className="font-bold text-text-main">Travel with confidence</h2>
                  <ul className="mt-2 space-y-1 text-[0.95rem] font-medium leading-6 text-[#3f4c47]">
                    {experience.safetyNotes.map((note) => <li key={note}>{note}</li>)}
                  </ul>
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-primary p-7 text-white shadow-[0_28px_70px_rgba(22,68,55,0.25)]">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[38px] border-white/[0.04]" />
                <Compass aria-hidden="true" className="relative text-secondary" size={30} />
                <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.22em] text-secondary-light">Plan this experience</p>
                <h2 className="relative mt-3 text-2xl font-bold leading-tight tracking-[-0.03em]">Your Lake Katwe story starts here.</h2>
                <p className="relative mt-4 text-[0.95rem] leading-7 text-white/85">
                  Share your dates and interests. We’ll shape the pace, meeting point and arrangements around your visit.
                </p>
                <div className="relative my-6 h-px bg-white/15" />
                <p className="relative text-xs font-medium text-white/75">Pricing</p>
                <p className="relative mt-1 text-xl font-bold text-secondary-light">{experience.priceLabel}</p>
                <Button className="relative mt-6 w-full bg-secondary text-primary-dark hover:bg-secondary-light" to="/plan-your-visit">
                  Request a tailored plan <ArrowUpRight size={18} />
                </Button>
                <p className="relative mt-4 text-center text-xs font-medium leading-5 text-white/70">No commitment · Personal response from our local team</p>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-primary/15 bg-white p-4 text-[0.95rem] font-medium leading-6 text-[#3f4c47] shadow-[0_8px_30px_rgba(22,68,55,0.05)]">
                <ShieldCheck aria-hidden="true" className="shrink-0 text-primary" size={20} />
                Routes and timing are adapted to weather, local conditions and your group.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ExperienceDetailsPage
