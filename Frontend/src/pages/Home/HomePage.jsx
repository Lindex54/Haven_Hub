import ContactCTA from '../../components/home/ContactCTA'
import AccommodationPreview from '../../components/home/AccommodationPreview'
import DiscoverPreview from '../../components/home/DiscoverPreview'
import FeaturedExperiences from '../../components/home/FeaturedExperiences'
import GalleryPreview from '../../components/home/GalleryPreview'
import GuidesPreview from '../../components/home/GuidesPreview'
import Hero from '../../components/home/Hero'
import NatureHeritagePreview from '../../components/home/NatureHeritagePreview'
import Testimonials from '../../components/home/Testimonials'
import TourPackagesPreview from '../../components/home/TourPackagesPreview'
import TravelInformationPreview from '../../components/home/TravelInformationPreview'
import VisitorPlannerBar from '../../components/home/VisitorPlannerBar'
import WhyTravelWithUs from '../../components/home/WhyTravelWithUs'
import { usePageMeta } from '../../utils/pageMeta'

function HomePage() {
  usePageMeta()

  return (
    <main className="home-page">
      <Hero />
      <VisitorPlannerBar />
      <DiscoverPreview />
      <FeaturedExperiences />
      <TourPackagesPreview />
      <AccommodationPreview />
      <NatureHeritagePreview />
      <GalleryPreview />
      <WhyTravelWithUs />
      <GuidesPreview />
      <Testimonials />
      <TravelInformationPreview />
      <ContactCTA />
    </main>
  )
}

export default HomePage
