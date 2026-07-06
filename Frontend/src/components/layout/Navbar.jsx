import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from '../common/Button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="container-custom">
        <nav className="flex min-h-[5.5rem] items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3">
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
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-nav leading-nav font-semibold text-text-muted transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Button href="#contact">Book Now</Button>
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
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom flex flex-col gap-2 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-button px-4 py-3 text-nav leading-nav font-semibold text-text-main transition hover:bg-primary/5 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-2 justify-center" onClick={() => setIsOpen(false)}>
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
