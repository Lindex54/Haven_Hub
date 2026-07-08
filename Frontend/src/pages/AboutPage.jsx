import { BadgeCheck, Coins, MapPin, ShieldCheck } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import PageSection from '../components/common/PageSection'
import SectionHeader from '../components/common/SectionHeader'

const reasons = [
  {
    title: 'Comfort',
    description:
      'Thoughtfully arranged rooms and shared areas designed to make each visit easier and more restful.',
    icon: BadgeCheck,
  },
  {
    title: 'Security',
    description:
      'Reliable support, secure parking, and a calm environment for both private and work-related stays.',
    icon: ShieldCheck,
  },
  {
    title: 'Affordable Rates',
    description:
      'Flexible accommodation options that balance value with a premium guest experience.',
    icon: Coins,
  },
  {
    title: 'Great Location',
    description:
      'A convenient Kampala base with easy access to the city while still feeling relaxed and tucked away.',
    icon: MapPin,
  },
]

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About StayNest"
        description="Learn what shapes the StayNest lodge experience and why guests keep choosing our spaces for comfort, convenience, and calm."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'About StayNest' },
        ]}
      />
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            <SectionHeader
              align="left"
              title="A modern lodge rooted in easy hospitality"
              description="StayNest was shaped for guests who want clean design, dependable service, and a booking experience that feels simple from the start."
            />
            <p className="muted-text">
              Whether you are visiting for a quick city stop, a team retreat, or
              a weekend reset, our goal is to make your stay feel polished,
              welcoming, and practical.
            </p>
          </div>
          <div className="overflow-hidden rounded-[32px] shadow-medium">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80"
              alt="StayNest lodge view"
              className="h-full min-h-[340px] w-full object-cover"
            />
          </div>
        </div>
      </PageSection>
      <PageSection background="bg-cream">
        <div className="space-y-10">
          <SectionHeader
            title="Why guests choose StayNest"
            description="Our priorities stay consistent across rooms, dining, guest support, and shared spaces."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <article key={reason.title} className="card h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-subtitle leading-subtitle font-semibold text-text-main">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-small leading-small text-text-muted">
                    {reason.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </PageSection>
    </>
  )
}

export default AboutPage
