import { BedDouble, Check, Maximize, Users } from 'lucide-react'
import { useParams } from 'react-router-dom'
import Button from '../../components/common/Button'
import PageSection from '../../components/common/PageSection'
import EmptyState from '../../components/common/EmptyState'
import Breadcrumb from '../../components/common/Breadcrumb'
import { accommodation } from '../../data/accommodation'
import { formatCurrency } from '../../utils/currency'
import { usePageMeta } from '../../utils/pageMeta'

function AccommodationDetailsPage({ slug: slugProp }) {
  const { slug: slugParam } = useParams()
  const slug = slugProp ?? slugParam
  const item = accommodation.find((entry) => entry.slug === slug)
  usePageMeta(item?.name ?? 'Accommodation')

  if (!item) return <main><PageSection><EmptyState description="The accommodation option you requested could not be found." title="Accommodation not found" /></PageSection></main>

  return (
    <main>
      <section className="relative isolate min-h-[560px] overflow-hidden bg-primary">
        <img alt={item.imageAlt} className="absolute inset-0 -z-20 h-full w-full object-cover" src={item.image} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/72 to-primary/15" />
        <div className="container-custom py-10 lg:py-16">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Stay', path: '/stay' }, { label: item.name }]} />
          <div className="mt-24 max-w-2xl text-text-white lg:mt-36">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">{item.category}</span>
            <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">{item.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">{item.description}</p>
          </div>
        </div>
      </section>
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.4fr]">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-dark">The room</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Everything you need to settle in</h2>
              <p className="mt-4 max-w-2xl muted-text">{item.shortDescription} Designed as a welcoming starting point for every kind of Lake Katwe visit.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-cream p-5"><Users className="text-primary" /><p className="mt-4 text-sm text-text-muted">Guests</p><p className="mt-1 font-semibold">Up to {item.capacity}</p></div>
              <div className="rounded-2xl bg-cream p-5"><BedDouble className="text-primary" /><p className="mt-4 text-sm text-text-muted">Sleeping</p><p className="mt-1 font-semibold">{item.beds}</p></div>
              <div className="rounded-2xl bg-cream p-5"><Maximize className="text-primary" /><p className="mt-4 text-sm text-text-muted">Room size</p><p className="mt-1 font-semibold">{item.size}</p></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Included with your stay</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {item.amenities.map((amenity) => <div key={amenity} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm"><Check size={18} className="shrink-0 text-primary" />{amenity}</div>)}
              </div>
            </div>
          </div>
          <aside className="h-fit rounded-[24px] border border-border bg-surface p-6 shadow-card lg:sticky lg:top-28">
            <p className="text-sm font-medium text-text-muted">From</p>
            <p className="mt-1 text-3xl font-bold text-primary">{formatCurrency(item.price, item.currency)}</p>
            <p className="mt-1 text-sm text-text-muted">per room · per {item.priceUnit}</p>
            <div className="my-6 border-t border-border" />
            <p className="text-sm leading-6 text-text-muted">{item.status === 'On request' ? 'Tell us about your group and we will build a suitable rooming plan.' : 'Send us your preferred dates and we will confirm availability and final arrangements.'}</p>
            <Button to="/plan-your-visit" className="mt-6 w-full">Check availability</Button>
            <Button to="/stay" variant="outline" className="mt-3 w-full">View all rooms</Button>
          </aside>
        </div>
      </PageSection>
    </main>
  )
}

export default AccommodationDetailsPage
