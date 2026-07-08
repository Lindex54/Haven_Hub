import {
  CarFront,
  ConciergeBell,
  MapPinned,
  Trees,
  UtensilsCrossed,
  Wifi,
} from 'lucide-react'
import Button from '../common/Button'
import SectionHeader from '../common/SectionHeader'
import { experiences } from '../../data/experiences'

const iconMap = {
  'Restaurant & Dining': UtensilsCrossed,
  'Conference Hall': ConciergeBell,
  Gardens: Trees,
  'Secure Parking': CarFront,
  'Free Wi-Fi': Wifi,
  Events: ConciergeBell,
  'Local Attractions': MapPinned,
}

function ExperiencesPreview() {
  return (
    <section id="experiences" className="section-padding bg-cream">
      <div className="container-custom space-y-12">
        <SectionHeader
          eyebrow="Facilities"
          title="Experiences & Facilities"
          description="Everything you need for a comfortable and enjoyable stay."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {experiences.slice(0, 5).map((item) => {
            const Icon = iconMap[item.title]

            return (
              <article
                key={item.id}
                className="card flex h-full flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-subtitle leading-subtitle font-semibold text-text-main">
                    {item.title}
                  </h3>
                  <p className="text-small leading-small text-text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Button to="/experiences" variant="outline">
            Explore Experiences
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ExperiencesPreview
