import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import AboutPage from './pages/AboutPage'
import BookNowPage from './pages/BookNowPage'
import ContactPage from './pages/ContactPage'
import ExperiencesPage from './pages/ExperiencesPage'
import GalleryPage from './pages/GalleryPage'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import RoomsPage from './pages/RoomsPage'
import SimpleContentPage from './pages/SimpleContentPage'
import { experiences } from './data/experiences'
import { gallery } from './data/gallery'
import { rooms } from './data/rooms'

function App() {
  const deluxeRooms = rooms.filter((room) => room.slug === 'deluxe')
  const standardRooms = rooms.filter((room) => room.slug === 'standard')
  const executiveRooms = rooms.filter((room) => room.slug === 'executive')
  const familyRooms = rooms.filter((room) => room.slug === 'family')

  const experienceItems = {
    restaurant: experiences.filter((item) => item.slug === 'restaurant'),
    conference: experiences.filter((item) => item.slug === 'conference'),
    gardens: experiences.filter((item) => item.slug === 'gardens'),
    parking: experiences.filter((item) => item.slug === 'parking'),
    wifi: experiences.filter((item) => item.slug === 'wifi'),
    events: experiences.filter((item) => item.slug === 'events'),
    attractions: experiences.filter((item) => item.slug === 'attractions'),
  }

  const galleryItems = {
    rooms: gallery.filter((item) => item.category === 'rooms'),
    exterior: gallery.filter((item) => item.category === 'exterior'),
    restaurant: gallery.filter((item) => item.category === 'restaurant'),
    conference: gallery.filter((item) => item.category === 'conference'),
    gardens: gallery.filter((item) => item.category === 'gardens'),
    events: gallery.filter((item) => item.category === 'events'),
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route
            path="/rooms/deluxe"
            element={
              <RoomsPage
                filteredRooms={deluxeRooms}
                title="Deluxe Rooms"
                description="Elegant deluxe spaces for guests who want extra comfort and a calm, polished stay."
              />
            }
          />
          <Route
            path="/rooms/standard"
            element={
              <RoomsPage
                filteredRooms={standardRooms}
                title="Standard Rooms"
                description="Clean, efficient rooms designed for short stays, business visits, and practical comfort."
              />
            }
          />
          <Route
            path="/rooms/executive"
            element={
              <RoomsPage
                filteredRooms={executiveRooms}
                title="Executive Suites"
                description="Refined suites with extra space, upgraded finishes, and a more premium private stay."
              />
            }
          />
          <Route
            path="/rooms/family"
            element={
              <RoomsPage
                filteredRooms={familyRooms}
                title="Family Rooms"
                description="Flexible room options built for group comfort, shared convenience, and easier family travel."
              />
            }
          />

          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route
            path="/experiences/:slug"
            element={<Navigate to="/experiences" replace />}
          />
          <Route
            path="/experiences/restaurant"
            element={
              <ExperiencesPage
                items={experienceItems.restaurant}
                title="Restaurant & Dining"
                description="Enjoy warm meals, relaxed dining, and a lodge atmosphere that makes breakfast and dinner feel easy."
              />
            }
          />
          <Route
            path="/experiences/conference"
            element={
              <ExperiencesPage
                items={experienceItems.conference}
                title="Conference Hall"
                description="Professional event space for meetings, presentations, workshops, and team sessions."
              />
            }
          />
          <Route
            path="/experiences/gardens"
            element={
              <ExperiencesPage
                items={experienceItems.gardens}
                title="Gardens"
                description="Relax outdoors in landscaped spaces designed for morning calm, evening walks, and quiet breaks."
              />
            }
          />
          <Route
            path="/experiences/parking"
            element={
              <ExperiencesPage
                items={experienceItems.parking}
                title="Secure Parking"
                description="Enjoy easy arrivals and added peace of mind with dependable on-site parking."
              />
            }
          />
          <Route
            path="/experiences/wifi"
            element={
              <ExperiencesPage
                items={experienceItems.wifi}
                title="Free Wi-Fi"
                description="Stay connected across rooms and shared spaces with dependable internet access."
              />
            }
          />
          <Route
            path="/experiences/events"
            element={
              <ExperiencesPage
                items={experienceItems.events}
                title="Events"
                description="Plan intimate celebrations, private gatherings, and lodge-hosted moments with a polished backdrop."
              />
            }
          />
          <Route
            path="/experiences/attractions"
            element={
              <ExperiencesPage
                items={experienceItems.attractions}
                title="Local Attractions"
                description="Explore nearby city highlights and local experiences while keeping StayNest as your calm home base."
              />
            }
          />

          <Route path="/gallery" element={<GalleryPage />} />
          <Route
            path="/gallery/rooms"
            element={
              <GalleryPage
                items={galleryItems.rooms}
                title="Rooms Gallery"
                description="See the room interiors, bed setups, and polished finishes guests enjoy at StayNest."
              />
            }
          />
          <Route
            path="/gallery/exterior"
            element={
              <GalleryPage
                items={galleryItems.exterior}
                title="Exterior Gallery"
                description="Explore the outside look and arrival atmosphere of the StayNest property."
              />
            }
          />
          <Route
            path="/gallery/restaurant"
            element={
              <GalleryPage
                items={galleryItems.restaurant}
                title="Restaurant Gallery"
                description="A closer look at our dining setup, serving environment, and restaurant ambiance."
              />
            }
          />
          <Route
            path="/gallery/conference"
            element={
              <GalleryPage
                items={galleryItems.conference}
                title="Conference Gallery"
                description="Preview the conference hall setup for work sessions, planning days, and corporate retreats."
              />
            }
          />
          <Route
            path="/gallery/gardens"
            element={
              <GalleryPage
                items={galleryItems.gardens}
                title="Gardens Gallery"
                description="Discover the greenery, quiet paths, and outdoor corners that support the StayNest atmosphere."
              />
            }
          />
          <Route
            path="/gallery/events"
            element={
              <GalleryPage
                items={galleryItems.events}
                title="Events Gallery"
                description="See how StayNest spaces adapt for special gatherings, celebrations, and hosted moments."
              />
            }
          />

          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/about/story"
            element={
              <SimpleContentPage
                eyebrow="Our Story"
                title="The StayNest Story"
                description="StayNest began with a simple idea: create a lodge that feels premium, calm, and easy to book without unnecessary complexity."
                breadcrumbs={[
                  { label: 'Home', to: '/' },
                  { label: 'About', to: '/about' },
                  { label: 'Our Story' },
                ]}
              >
                <div className="card max-w-3xl">
                  <p className="muted-text">
                    Our story centers on thoughtful hospitality, polished spaces,
                    and dependable guest support. Every part of the experience is
                    meant to feel welcoming from the first click to final checkout.
                  </p>
                </div>
              </SimpleContentPage>
            }
          />
          <Route
            path="/about/mission"
            element={
              <SimpleContentPage
                eyebrow="Mission & Vision"
                title="Mission & Vision"
                description="We aim to deliver comfortable stays, easy booking, and guest-focused service that feels personal and reliable."
                breadcrumbs={[
                  { label: 'Home', to: '/' },
                  { label: 'About', to: '/about' },
                  { label: 'Mission & Vision' },
                ]}
              >
                <div className="grid gap-6 lg:grid-cols-2">
                  <article className="card">
                    <h2 className="text-card-title leading-card-title font-bold text-text-main">
                      Mission
                    </h2>
                    <p className="mt-3 muted-text">
                      To make every lodge stay feel easy, restful, and confidently
                      supported.
                    </p>
                  </article>
                  <article className="card">
                    <h2 className="text-card-title leading-card-title font-bold text-text-main">
                      Vision
                    </h2>
                    <p className="mt-3 muted-text">
                      To become a trusted hospitality destination known for calm,
                      modern comfort and reliable service.
                    </p>
                  </article>
                </div>
              </SimpleContentPage>
            }
          />
          <Route
            path="/about/team"
            element={
              <SimpleContentPage
                eyebrow="Our Team"
                title="Meet the StayNest Team"
                description="A supportive hospitality team focused on guest comfort, operational consistency, and thoughtful service."
                breadcrumbs={[
                  { label: 'Home', to: '/' },
                  { label: 'About', to: '/about' },
                  { label: 'Our Team' },
                ]}
              >
                <div className="grid gap-6 md:grid-cols-3">
                  {['Guest Services', 'Operations', 'Hospitality'].map((team) => (
                    <article key={team} className="card">
                      <h2 className="text-subtitle leading-subtitle font-semibold text-text-main">
                        {team}
                      </h2>
                      <p className="mt-3 text-small leading-small text-text-muted">
                        A dedicated group helping guests feel welcomed, informed,
                        and well supported throughout their stay.
                      </p>
                    </article>
                  ))}
                </div>
              </SimpleContentPage>
            }
          />
          <Route
            path="/about/faqs"
            element={
              <SimpleContentPage
                eyebrow="FAQs"
                title="Frequently Asked Questions"
                description="Answers to common questions about reservations, check-in, amenities, and guest support."
                breadcrumbs={[
                  { label: 'Home', to: '/' },
                  { label: 'About', to: '/about' },
                  { label: 'FAQs' },
                ]}
              >
                <div className="space-y-4">
                  {[
                    ['What time is check-in?', 'Check-in begins at 2:00 PM, with support available if you need help planning arrival.'],
                    ['Do you offer breakfast?', 'Yes, selected rooms include breakfast and dining service is available on-site.'],
                    ['Can I book for a group?', 'Yes, group and family stays can be coordinated through our booking or contact pages.'],
                  ].map(([question, answer]) => (
                    <article key={question} className="card">
                      <h2 className="text-subtitle leading-subtitle font-semibold text-text-main">
                        {question}
                      </h2>
                      <p className="mt-3 muted-text">{answer}</p>
                    </article>
                  ))}
                </div>
              </SimpleContentPage>
            }
          />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-now" element={<BookNowPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
