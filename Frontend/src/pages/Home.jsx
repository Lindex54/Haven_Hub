import AvailabilityBar from '../components/home/AvailabilityBar'
import ContactCTA from '../components/home/ContactCTA'
import ExperiencesPreview from '../components/home/ExperiencesPreview'
import FeaturedRooms from '../components/home/FeaturedRooms'
import GalleryPreview from '../components/home/GalleryPreview'
import Hero from '../components/home/Hero'
import Testimonials from '../components/home/Testimonials'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.12),_transparent_18%),linear-gradient(180deg,_#f8f5ef_0%,_#f5f7fa_38%,_#f5f7fa_100%)]">
      <Navbar />
      <main>
        <Hero />
        <AvailabilityBar />
        <FeaturedRooms />
        <ExperiencesPreview />
        <GalleryPreview />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home
