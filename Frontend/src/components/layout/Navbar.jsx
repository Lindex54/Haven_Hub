import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import wispersLogo from '../../assets/images/brand/wispers_logo.png'
import { publicNavigation } from '../../config/navigation'
import { siteConfig } from '../../config/siteConfig'
import Button from '../common/Button'

function isPathActive(currentPath, path) {
  if (path === '/') return currentPath === '/'
  return currentPath === path || currentPath.startsWith(`${path}/`)
}

function Navbar() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [desktopOpen, setDesktopOpen] = useState('')
  const [mobileOpen, setMobileOpen] = useState('')
  const closeTimerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setMobileOpen('')
        setDesktopOpen('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const standardItems = publicNavigation.filter((item) => !item.cta)
  const ctaItem = publicNavigation.find((item) => item.cta)

  const openDesktopMenu = (label) => {
    window.clearTimeout(closeTimerRef.current)
    setDesktopOpen(label)
  }

  const queueDesktopClose = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setDesktopOpen('')
    }, 140)
  }

  const closeMobileMenu = () => {
    setIsOpen(false)
    setMobileOpen('')
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border/80 bg-surface/95 shadow-navbar backdrop-blur-xl'
          : 'bg-surface/88 backdrop-blur-xl'
      }`}
    >
      <div className="container-custom">
        <nav className="flex min-h-[5.5rem] items-center justify-between gap-6">
          <Link className="flex shrink-0 items-center" to="/" aria-label={`${siteConfig.name} home`}>
            <img
              alt={siteConfig.name}
              className="h-20 w-auto max-w-[18rem] object-contain sm:max-w-[24rem]"
              src={wispersLogo}
            />
          </Link>

          <div className="hidden items-center gap-5 xl:flex">
            <div className="flex items-center gap-1">
              {standardItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        queueDesktopClose()
                      }
                    }}
                    onFocus={() => openDesktopMenu(item.label)}
                    onMouseEnter={() => openDesktopMenu(item.label)}
                    onMouseLeave={queueDesktopClose}
                  >
                    <NavLink
                      className={`inline-flex items-center gap-1 rounded-full px-4 py-3 text-nav font-semibold transition ${
                        isPathActive(pathname, item.path)
                          ? 'bg-primary/8 text-primary'
                          : 'text-text-muted hover:text-primary'
                      }`}
                      to={item.path}
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </NavLink>
                    <div
                      aria-label={`${item.label} submenu`}
                      className={`absolute left-0 top-full z-50 mt-2 w-72 rounded-card border border-border bg-surface p-3 shadow-navbar transition ${
                        desktopOpen === item.label
                          ? 'visible translate-y-0 opacity-100'
                          : 'invisible -translate-y-2 opacity-0'
                      }`}
                      id={`${item.label}-menu`}
                    >
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            className={({ isActive }) =>
                              `block rounded-button px-4 py-3 text-sm transition ${
                                isActive
                                  ? 'bg-primary/8 font-semibold text-primary'
                                  : 'text-text-muted hover:bg-primary/5 hover:text-primary'
                              }`
                            }
                            to={child.path}
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
                    className={({ isActive }) =>
                      `rounded-full px-4 py-3 text-nav font-semibold transition ${
                        isActive ? 'bg-primary/8 text-primary' : 'text-text-muted hover:text-primary'
                      }`
                    }
                    end={item.path === '/'}
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>

            <Button className="whitespace-nowrap" to={ctaItem.path}>
              {ctaItem.label}
            </Button>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-soft xl:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      <div
        className={`border-t border-border/70 bg-surface/98 transition-all duration-300 xl:hidden ${
          isOpen
            ? 'h-[calc(100dvh-5.5rem)] max-h-[calc(100dvh-5.5rem)] overflow-hidden opacity-100'
            : 'h-0 max-h-0 overflow-hidden opacity-0'
        }`}
        id="mobile-navigation"
      >
        <div className="container-custom flex h-full flex-col gap-2 overflow-y-auto overscroll-contain py-4 [-webkit-overflow-scrolling:touch]">
          {standardItems.map((item) =>
            item.children ? (
              <div key={item.label} className="rounded-card border border-border/70">
                <div className="flex items-center gap-2 p-2">
                  <NavLink
                    className={`flex-1 rounded-button px-4 py-3 text-nav font-semibold ${
                      isPathActive(pathname, item.path) ? 'text-primary' : 'text-text-main'
                    }`}
                    onClick={closeMobileMenu}
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                  <button
                    aria-controls={`${item.label}-mobile-menu`}
                    aria-expanded={mobileOpen === item.label}
                    aria-label={`Toggle ${item.label} submenu`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary"
                    onClick={() =>
                      setMobileOpen((current) => (current === item.label ? '' : item.label))
                    }
                    type="button"
                  >
                    <ChevronDown
                      className={`transition-transform ${mobileOpen === item.label ? 'rotate-180' : ''}`}
                      size={18}
                    />
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileOpen === item.label ? 'max-h-[28rem] pb-2 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  id={`${item.label}-mobile-menu`}
                >
                  <div className="space-y-1 px-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        className={({ isActive }) =>
                          `block rounded-button px-4 py-3 text-sm ${
                            isActive
                              ? 'bg-primary/8 font-semibold text-primary'
                              : 'text-text-muted hover:bg-primary/5 hover:text-primary'
                          }`
                        }
                        onClick={closeMobileMenu}
                        to={child.path}
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
                className={({ isActive }) =>
                  `rounded-button px-4 py-3 text-nav font-semibold ${
                    isActive ? 'bg-primary/8 text-primary' : 'text-text-main hover:bg-primary/5 hover:text-primary'
                  }`
                }
                end={item.path === '/'}
                onClick={closeMobileMenu}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ),
          )}
          <Button className="mt-2 justify-center" onClick={closeMobileMenu} to={ctaItem.path}>
            {ctaItem.label}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
