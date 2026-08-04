import Button from '../common/Button'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { accommodation } from '../../data/accommodation'
import { formatCurrency } from '../../utils/currency'

function AccommodationPreview() {
  return (
    <PageSection className="bg-soft-background/80">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Stay"
          title="Accommodation that supports the wider Lake Katwe visitor experience."
          description="Use your stay as a comfortable base for guided visits, photography plans and group travel."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {accommodation.filter((item) => item.featured).map((item) => (
            <article key={item.slug} className="group overflow-hidden rounded-card border border-border bg-surface shadow-card">
              <img
                alt={item.imageAlt}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                src={item.image}
              />
              <div className="space-y-4 p-6">
              <h3 className="text-card-title font-semibold text-text-main">{item.name}</h3>
              <p className="text-sm leading-7 text-text-muted">{item.shortDescription}</p>
              <div className="space-y-1 text-sm text-text-muted">
                <p>Capacity: {item.capacity} guests</p>
                <p>Amenities: {item.amenities.slice(0, 3).join(', ')}</p>
                <p className="font-semibold text-primary">
                  {formatCurrency(item.price, item.currency)} / {item.priceUnit}
                </p>
              </div>
              <Button to={`/stay/${item.slug}`} variant="outline">
                View accommodation
              </Button>
              </div>
            </article>
          ))}
        </div>
        <Button to="/stay">View Accommodation</Button>
      </div>
    </PageSection>
  )
}

export default AccommodationPreview
