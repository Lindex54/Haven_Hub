import { ShieldCheck, Sparkles, TreePalm } from 'lucide-react'
import Button from '../common/Button'
import SectionHeader from '../common/SectionHeader'

const highlights = [
  {
    title: 'Calm lodge atmosphere',
    description: 'Quiet surroundings and warm interiors shaped for relaxed stays.',
    icon: TreePalm,
  },
  {
    title: 'Trusted service',
    description: 'Thoughtful support from booking to check-out for a smoother visit.',
    icon: ShieldCheck,
  },
  {
    title: 'Premium comfort',
    description: 'A polished experience built around easy hospitality and restful rooms.',
    icon: Sparkles,
  },
]

function AboutPreview() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom space-y-12">
        <SectionHeader
          eyebrow="About StayNest"
          title="A lodge experience designed for comfort and ease"
          description="StayNest blends practical hospitality with a calm, premium atmosphere for business trips, family stays, and weekend escapes."
          align="left"
        />

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="overflow-hidden rounded-[28px] shadow-medium">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
              alt="StayNest interior"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="card h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-subtitle leading-subtitle font-semibold text-text-main">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-small leading-small text-text-muted">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/about">Learn More</Button>
              <Button to="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
