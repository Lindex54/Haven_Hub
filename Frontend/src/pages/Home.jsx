import AvailabilityBar from '../components/home/AvailabilityBar'
import AboutPreview from '../components/home/AboutPreview'
import ContactCTA from '../components/home/ContactCTA'
import ExperiencesPreview from '../components/home/ExperiencesPreview'
import FeaturedRooms from '../components/home/FeaturedRooms'
import GalleryPreview from '../components/home/GalleryPreview'
import Hero from '../components/home/Hero'
import Testimonials from '../components/home/Testimonials'

function Home() {
  return (
    <main>
      <Hero />
      <AvailabilityBar />
      <FeaturedRooms />
      <ExperiencesPreview />
      <GalleryPreview />
      <AboutPreview />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}

export default Home
