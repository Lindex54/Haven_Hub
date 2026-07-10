import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import ScrollToTop from '../components/layout/ScrollToTop'

function PublicLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.12),_transparent_18%),linear-gradient(180deg,_#f8f5ef_0%,_#f5f7f3_42%,_#f5f7f3_100%)]">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayout
