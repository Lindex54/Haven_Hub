import RoomCard from '../common/RoomCard'
import SectionHeader from '../common/SectionHeader'
import { rooms } from '../../data/rooms'
import Button from '../common/Button'

function FeaturedRooms() {
  return (
    <section id="rooms" className="section-padding">
      <div className="container-custom space-y-12">
        <SectionHeader
          eyebrow="Rooms"
          title="Featured Rooms"
          description="Choose from our comfortable rooms designed for peaceful stays and memorable experiences."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button to="/rooms" variant="outline">
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedRooms
