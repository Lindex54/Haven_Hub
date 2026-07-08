import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from '../common/Button'

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'Rooms',
    to: '/rooms',
    children: [
      { label: 'All Rooms', to: '/rooms' },
      { label: 'Deluxe Rooms', to: '/rooms/deluxe' },
      { label: 'Standard Rooms', to: '/rooms/standard' },
      { label: 'Executive Suites', to: '/rooms/executive' },
      { label: 'Family Rooms', to: '/rooms/family' },
    ],
  },
  {
    label: 'Experiences',
    to: '/experiences',
    children: [
      { label: 'All Experiences', to: '/experiences' },
      { label: 'Restaurant & Dining', to: '/experiences/restaurant' },
      { label: 'Conference Hall', to: '/experiences/conference' },
      { label: 'Gardens', to: '/experiences/gardens' },
      { label: 'Secure Parking', to: '/experiences/parking' },
      { label: 'Free Wi-Fi', to: '/experiences/wifi' },
      { label: 'Events', to: '/experiences/events' },
      { label: 'Local Attractions', to: '/experiences/attractions' },
    ],
  },
  {
    label: 'Gallery',
    to: '/gallery',
    children: [
      { label: 'Full Gallery', to: '/gallery' },
      { label: 'Rooms Gallery', to: '/gallery/rooms' },
      { label: 'Exterior Gallery', to: '/gallery/exterior' },
      { label: 'Restaurant Gallery', to: '/gallery/restaurant' },
      { label: 'Conference Gallery', to: '/gallery/conference' },
      { label: 'Gardens Gallery', to: '/gallery/gardens' },
      { label: 'Events Gallery', to: '/gallery/events' },
    ],
  },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About StayNest', to: '/about' },
      { label: 'Our Story', to: '/about/story' },
      { label: 'Mission & Vision', to: '/about/mission' },
      { label: 'Our Team', to: '/about/team' },
      { label: 'FAQs', to: '/about/faqs' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState('')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navbarClass = isScrolled
    ? 'border-b border-border/80 bg-surface/95 shadow-navbar backdrop-blur-xl'
    : 'bg-surface/92 shadow-navbar backdrop-blur-xl'

  const activeRoot = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean)
    return parts[0] ?? ''
  }, [location.pathname])

  const rootIsActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return activeRoot === to.replace('/', '')
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="container-custom">
        <nav className="flex min-h-[5.5rem] items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-subtitle leading-subtitle font-bold text-text-white">
              S
            </span>
            <div className="flex flex-col">
              <span className="text-nav leading-nav font-bold text-text-main">
                StayNest
              </span>
              <span className="text-xs uppercase tracking-[0.24em] text-text-light">
                Lodge
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-2">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="group relative">
                    <NavLink
                      to={item.to}
                      className={`inline-flex items-center gap-1 rounded-full px-4 py-3 text-nav leading-nav font-semibold transition-colors duration-200 ${
                        rootIsActive(item.to)
                          ? 'bg-primary/8 text-primary'
                          : 'text-text-muted hover:text-primary'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </NavLink>
                    <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-3 rounded-card border border-border bg-surface p-3 opacity-0 shadow-navbar transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `block rounded-button px-4 py-3 text-small leading-small transition ${
                                isActive
                                  ? 'bg-primary/8 font-semibold text-primary'
                                  : 'text-text-muted hover:bg-primary/5 hover:text-primary'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-full px-4 py-3 text-nav leading-nav font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'bg-primary/8 text-primary'
                          : 'text-text-muted hover:text-primary'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>

            <Button to="/book-now">Book Now</Button>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-soft transition hover:border-primary lg:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      <div
        className={`overflow-hidden border-t border-border/70 bg-surface/98 transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[80svh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom flex flex-col gap-2 py-4">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="rounded-card border border-border/60">
                <div className="flex items-center justify-between gap-3 p-2">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex-1 rounded-button px-4 py-3 text-nav leading-nav font-semibold ${
                        isActive || rootIsActive(item.to)
                          ? 'text-primary'
                          : 'text-text-main'
                      }`
                    }
                    onClick={() => {
                      setIsOpen(false)
                      setOpenMobileGroup('')
                    }}
                  >
                    {item.label}
                  </NavLink>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() =>
                      setOpenMobileGroup((group) =>
                        group === item.label ? '' : item.label,
                      )
                    }
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        openMobileGroup === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openMobileGroup === item.label
                      ? 'max-h-[24rem] pb-2 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-1 px-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `block rounded-button px-4 py-3 text-small leading-small ${
                            isActive
                              ? 'bg-primary/8 font-semibold text-primary'
                              : 'text-text-muted hover:bg-primary/5 hover:text-primary'
                          }`
                        }
                        onClick={() => {
                          setIsOpen(false)
                          setOpenMobileGroup('')
                        }}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-button px-4 py-3 text-nav leading-nav font-semibold ${
                    isActive
                      ? 'bg-primary/8 text-primary'
                      : 'text-text-main hover:bg-primary/5 hover:text-primary'
                  }`
                }
                onClick={() => {
                  setIsOpen(false)
                  setOpenMobileGroup('')
                }}
              >
                {item.label}
              </NavLink>
            ),
          )}
          <Button
            to="/book-now"
            className="mt-2 justify-center"
            onClick={() => {
              setIsOpen(false)
              setOpenMobileGroup('')
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
