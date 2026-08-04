import { ArrowRight, BedDouble, Check, Users } from 'lucide-react'
import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { accommodation } from '../../data/accommodation'
import { formatCurrency } from '../../utils/currency'
import { usePageMeta } from '../../utils/pageMeta'

function StayPage() {
  usePageMeta('Accommodation')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Stay' }]}
        description="A restful Lake Katwe base for couples, families and groups—thoughtfully arranged around the way you travel."
        eyebrow="Stay with us"
        title="Rooms made for unwinding"
      />
      <PageSection>
        <div className="mb-12 grid gap-6 rounded-[28px] bg-primary p-7 text-text-white shadow-card md:grid-cols-3 md:p-9">
          {[
            ['Four distinct stays', 'Choose the room style that fits your journey.'],
            ['Near Lake Katwe', 'A comfortable base for tours and local discovery.'],
            ['Personal planning', 'We can combine rooms, meals and experiences.'],
          ].map(([title, text]) => (
            <div key={title} className="border-white/15 md:border-r md:pr-6 last:border-0">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-white/75">{text}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-dark">Find your fit</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-main">Choose your stay</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-text-muted">Rates are per room, per night. Group arrangements are tailored to your itinerary.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {accommodation.map((item) => (
            <article key={item.slug} className="group overflow-hidden rounded-[24px] border border-border bg-surface shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-medium">
              <div className="relative h-64 overflow-hidden">
                <img alt={item.imageAlt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={item.image} />
                <span className="absolute left-5 top-5 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-soft">{item.category}</span>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
              <div className="space-y-5 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-text-main">{item.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-text-muted">{item.shortDescription}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold text-primary">{formatCurrency(item.price, item.currency)}</p>
                    <p className="text-xs text-text-muted">per {item.priceUnit}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 border-y border-border py-4 text-sm text-text-muted">
                  <span className="inline-flex items-center gap-2"><Users size={17} className="text-primary" />Up to {item.capacity} guests</span>
                  <span className="inline-flex items-center gap-2"><BedDouble size={17} className="text-primary" />{item.beds}</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-muted">
                  {item.amenities.slice(0, 3).map((amenity) => <span key={amenity} className="inline-flex items-center gap-1.5"><Check size={15} className="text-primary" />{amenity}</span>)}
                </div>
                <Button to={`/stay/${item.slug}`} variant="outline" className="w-full">Explore this room <ArrowRight size={17} /></Button>
              </div>
            </article>
          ))}
        </div>
      </PageSection>
    </main>
  )
}

export default StayPage
