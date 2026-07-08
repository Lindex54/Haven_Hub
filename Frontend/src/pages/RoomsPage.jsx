import PageHero from '../components/common/PageHero'
import PageSection from '../components/common/PageSection'
import RoomCard from '../components/common/RoomCard'
import SectionHeader from '../components/common/SectionHeader'
import { rooms } from '../data/rooms'

function RoomsPage({ filteredRooms = rooms, title = 'All Rooms', description, eyebrow = 'Rooms' }) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={
          description ??
          'Browse our room collection and choose the space that fits your pace, comfort preferences, and travel plans.'
        }
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Rooms', to: '/rooms' },
          { label: title },
        ]}
      />
      <PageSection>
        <div className="space-y-10">
          <SectionHeader
            align="left"
            title={title}
            description="Each room is designed for convenience, restful comfort, and a polished StayNest experience."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </PageSection>
    </>
  )
}

export default RoomsPage
