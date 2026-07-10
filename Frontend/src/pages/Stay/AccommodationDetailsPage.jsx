import { useParams } from 'react-router-dom'
import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import EmptyState from '../../components/common/EmptyState'
import { accommodation } from '../../data/accommodation'
import { formatCurrency } from '../../utils/currency'
import { usePageMeta } from '../../utils/pageMeta'

function AccommodationDetailsPage({ slug: slugProp }) {
  const { slug: slugParam } = useParams()
  const slug = slugProp ?? slugParam
  const item = accommodation.find((entry) => entry.slug === slug)
  usePageMeta(item?.name ?? 'Accommodation')

  if (!item) {
    return (
      <main>
        <PageSection>
          <EmptyState
            description="The accommodation option you requested could not be found."
            title="Accommodation not found"
          />
        </PageSection>
      </main>
    )
  }

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Stay', path: '/stay' },
          { label: item.name },
        ]}
        description={item.description}
        eyebrow={item.category}
        image={item.image}
        title={item.name}
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div className="card space-y-4">
            <h2 className="text-card-title font-semibold text-text-main">Room details</h2>
            <p className="muted-text">{item.description}</p>
            <ul className="space-y-3 text-sm leading-7 text-text-muted">
              <li>Capacity: {item.capacity} guests</li>
              <li>Beds: {item.beds}</li>
              <li>Status: {item.status}</li>
              <li>Amenities: {item.amenities.join(', ')}</li>
              <li>
                Rate: {formatCurrency(item.price, item.currency)} / {item.priceUnit}
              </li>
            </ul>
          </div>
          <aside className="card space-y-4">
            <h2 className="text-card-title font-semibold text-text-main">Request accommodation</h2>
            <p className="muted-text">
              Availability and final arrangements are confirmed after inquiry review.
            </p>
            <Button to="/plan-your-visit">Check availability</Button>
          </aside>
        </div>
      </PageSection>
    </main>
  )
}

export default AccommodationDetailsPage
