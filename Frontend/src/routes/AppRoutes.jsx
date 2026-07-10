import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import AboutDetailPage from '../pages/About/AboutDetailPage'
import AboutPage from '../pages/About/AboutPage'
import ContactPage from '../pages/Contact/ContactPage'
import DiscoverDetailPage from '../pages/Discover/DiscoverDetailPage'
import DiscoverPage from '../pages/Discover/DiscoverPage'
import NotFoundPage from '../pages/Errors/NotFoundPage'
import ExperienceDetailsPage from '../pages/Experiences/ExperienceDetailsPage'
import ExperiencesPage from '../pages/Experiences/ExperiencesPage'
import GalleryCategoryPage from '../pages/Gallery/GalleryCategoryPage'
import GalleryPage from '../pages/Gallery/GalleryPage'
import HomePage from '../pages/Home/HomePage'
import PrivacyPage from '../pages/Legal/PrivacyPage'
import TermsPage from '../pages/Legal/TermsPage'
import BookingConfirmationPage from '../pages/PlanVisit/BookingConfirmationPage'
import InquiryConfirmationPage from '../pages/PlanVisit/InquiryConfirmationPage'
import PlanVisitPage from '../pages/PlanVisit/PlanVisitPage'
import AccommodationDetailsPage from '../pages/Stay/AccommodationDetailsPage'
import StayPage from '../pages/Stay/StayPage'
import StayInformationPage from '../pages/Stay/StayInformationPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route element={<HomePage />} path="/" />

        <Route element={<DiscoverPage />} path="/discover" />
        <Route element={<DiscoverDetailPage slug="lake-katwe" />} path="/discover/lake-katwe" />
        <Route element={<DiscoverDetailPage slug="salt-mining" />} path="/discover/salt-mining" />
        <Route element={<DiscoverDetailPage slug="nature" />} path="/discover/nature" />
        <Route element={<DiscoverDetailPage slug="community" />} path="/discover/community" />
        <Route element={<DiscoverDetailPage slug="wildlife" />} path="/discover/wildlife" />
        <Route
          element={<DiscoverDetailPage slug="nearby-attractions" />}
          path="/discover/nearby-attractions"
        />

        <Route element={<ExperiencesPage />} path="/experiences" />
        <Route
          element={<ExperienceDetailsPage slug="lake-katwe-tour" />}
          path="/experiences/lake-katwe-tour"
        />
        <Route
          element={<ExperienceDetailsPage slug="salt-mining" />}
          path="/experiences/salt-mining"
        />
        <Route
          element={<ExperienceDetailsPage slug="nature-walks" />}
          path="/experiences/nature-walks"
        />
        <Route
          element={<ExperienceDetailsPage slug="birdwatching" />}
          path="/experiences/birdwatching"
        />
        <Route
          element={<ExperienceDetailsPage slug="community" />}
          path="/experiences/community"
        />
        <Route
          element={<ExperienceDetailsPage slug="photography" />}
          path="/experiences/photography"
        />
        <Route
          element={<ExperienceDetailsPage slug="cultural-tour" />}
          path="/experiences/cultural-tour"
        />
        <Route
          element={<ExperienceDetailsPage slug="group-visits" />}
          path="/experiences/group-visits"
        />
        <Route element={<ExperienceDetailsPage />} path="/experiences/:slug" />

        <Route element={<StayPage />} path="/stay" />
        <Route element={<AccommodationDetailsPage slug="standard" />} path="/stay/standard" />
        <Route element={<AccommodationDetailsPage slug="deluxe" />} path="/stay/deluxe" />
        <Route element={<AccommodationDetailsPage slug="family" />} path="/stay/family" />
        <Route element={<AccommodationDetailsPage slug="groups" />} path="/stay/groups" />
        <Route element={<StayInformationPage />} path="/stay/information" />
        <Route element={<AccommodationDetailsPage />} path="/stay/:slug" />

        <Route element={<GalleryPage />} path="/gallery" />
        <Route
          element={<GalleryCategoryPage category="lake-katwe" />}
          path="/gallery/lake-katwe"
        />
        <Route
          element={<GalleryCategoryPage category="salt-mining" />}
          path="/gallery/salt-mining"
        />
        <Route element={<GalleryCategoryPage category="nature" />} path="/gallery/nature" />
        <Route element={<GalleryCategoryPage category="wildlife" />} path="/gallery/wildlife" />
        <Route
          element={<GalleryCategoryPage category="community" />}
          path="/gallery/community"
        />
        <Route element={<GalleryCategoryPage category="tours" />} path="/gallery/tours" />
        <Route
          element={<GalleryCategoryPage category="accommodation" />}
          path="/gallery/accommodation"
        />

        <Route element={<AboutPage />} path="/about" />
        <Route element={<AboutDetailPage slug="story" />} path="/about/story" />
        <Route element={<AboutDetailPage slug="guides" />} path="/about/guides" />
        <Route
          element={<AboutDetailPage slug="community-commitment" />}
          path="/about/community-commitment"
        />
        <Route
          element={<AboutDetailPage slug="responsible-tourism" />}
          path="/about/responsible-tourism"
        />
        <Route element={<AboutDetailPage slug="faqs" />} path="/about/faqs" />

        <Route element={<ContactPage />} path="/contact" />
        <Route element={<PlanVisitPage />} path="/plan-your-visit" />
        <Route element={<InquiryConfirmationPage />} path="/inquiry-confirmation" />
        <Route element={<BookingConfirmationPage />} path="/booking-confirmation" />
        <Route element={<PrivacyPage />} path="/privacy" />
        <Route element={<TermsPage />} path="/terms" />
        <Route element={<NotFoundPage />} path="/not-found" />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Routes>
  )
}

export default AppRoutes
