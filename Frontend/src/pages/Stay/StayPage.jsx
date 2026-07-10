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
        description="Browse accommodation options that support tours, group planning and wider Lake Katwe travel."
        eyebrow="Stay"
        title="Accommodation"
      />
      <PageSection>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {accommodation.map((item) => (
            <article key={item.slug} className="card space-y-4">
              <h2 className="text-card-title font-semibold text-text-main">{item.name}</h2>
              <p className="text-sm leading-7 text-text-muted">{item.description}</p>
              <div className="space-y-2 text-sm text-text-muted">
                <p>Capacity: {item.capacity} guests</p>
                <p>Beds: {item.beds}</p>
                <p>Amenities: {item.amenities.join(', ')}</p>
                <p>Status: {item.status}</p>
                <p className="font-semibold text-primary">
                  {formatCurrency(item.price, item.currency)} / {item.priceUnit}
                </p>
              </div>
              <Button to={`/stay/${item.slug}`} variant="outline">
                View accommodation
              </Button>
            </article>
          ))}
        </div>
      </PageSection>
    </main>
  )
}

export default StayPage
