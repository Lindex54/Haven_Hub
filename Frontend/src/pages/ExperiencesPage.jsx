import {
  CarFront,
  ConciergeBell,
  MapPinned,
  Trees,
  UtensilsCrossed,
  Wifi,
} from 'lucide-react'
import PageHero from '../components/common/PageHero'
import PageSection from '../components/common/PageSection'
import SectionHeader from '../components/common/SectionHeader'
import { experiences } from '../data/experiences'

const iconMap = {
  restaurant: UtensilsCrossed,
  conference: ConciergeBell,
  gardens: Trees,
  parking: CarFront,
  wifi: Wifi,
  events: ConciergeBell,
  attractions: MapPinned,
}

function ExperiencesPage({
  items = experiences,
  title = 'All Experiences',
  description,
}) {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title={title}
        description={
          description ??
          'Discover the facilities and services that make StayNest more than just a room booking.'
        }
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Experiences', to: '/experiences' },
          { label: title },
        ]}
      />
      <PageSection background="bg-cream">
        <div className="space-y-10">
          <SectionHeader
            align="left"
            title={title}
            description="From dining to event support, our spaces are designed to make each stay feel smooth and welcoming."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => {
              const Icon = iconMap[item.slug] ?? ConciergeBell

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
                    <p className="muted-text">{item.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </PageSection>
    </>
  )
}

export default ExperiencesPage
