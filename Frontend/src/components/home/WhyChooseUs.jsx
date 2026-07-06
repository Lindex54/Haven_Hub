import { BadgeCheck, Coins, MapPin, ShieldCheck } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'

const reasons = [
  {
    title: 'Comfort',
    description:
      'Thoughtfully designed spaces, restful rooms, and a calm atmosphere that feels genuinely welcoming.',
    icon: BadgeCheck,
  },
  {
    title: 'Security',
    description:
      'Trusted staff support, secure parking, and a dependable environment for both families and business guests.',
    icon: ShieldCheck,
  },
  {
    title: 'Affordable Rates',
    description:
      'Balanced pricing that keeps quality high while making extended or short stays more accessible.',
    icon: Coins,
  },
  {
    title: 'Great Location',
    description:
      'Convenient access to Kampala essentials while still offering a peaceful lodge experience away from the rush.',
    icon: MapPin,
  },
]

function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-primary">
      <div className="container-custom space-y-12">
        <SectionHeader
          eyebrow="Why StayNest"
          title="Why Choose StayNest?"
          description="A modern lodge experience shaped around comfort, confidence, and easy planning."
          theme="dark"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <article
                key={reason.title}
                className="rounded-card border border-text-white/10 bg-text-white/8 p-6 text-text-white shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/18 text-secondary-light">
                  <Icon size={24} />
                </div>
                <h3 className="text-subtitle leading-subtitle font-semibold">
                  {reason.title}
                </h3>
                <p className="mt-3 text-small leading-small text-text-white/75">
                  {reason.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
