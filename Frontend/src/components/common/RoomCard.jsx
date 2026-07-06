import { BedDouble, ChevronRight, Users } from 'lucide-react'
import Button from './Button'

function formatPrice(price) {
  return `UGX ${price.toLocaleString('en-US')} / night`
}

function RoomCard({ room }) {
  return (
    <article className="group overflow-hidden rounded-card border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
      <div className="relative overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-success px-3 py-1 text-xs font-semibold text-text-white shadow-soft">
          {room.status}
        </span>
        <span className="absolute bottom-5 right-5 rounded-full bg-surface/92 px-3 py-1 text-xs font-semibold text-primary shadow-soft">
          {room.type}
        </span>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-card-title leading-card-title tracking-card-title font-bold text-text-main">
              {room.name}
            </h3>
            <p className="text-right text-price leading-price font-extrabold text-primary">
              UGX {room.price.toLocaleString('en-US')}
            </p>
          </div>

          <p className="muted-text">{room.description}</p>
          <p className="text-small leading-small font-medium text-text-muted">
            {formatPrice(room.price)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {room.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-cream px-3 py-2 text-xs font-medium text-text-muted"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border pt-5">
          <div className="flex flex-wrap gap-4 text-small leading-small text-text-muted">
            <span className="inline-flex items-center gap-2">
              <Users size={16} className="text-primary" />
              {room.capacity} Guests
            </span>
            <span className="inline-flex items-center gap-2">
              <BedDouble size={16} className="text-primary" />
              {room.type}
            </span>
          </div>

          <Button variant="outline" className="px-4 py-3">
            View Details
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </article>
  )
}

export default RoomCard
