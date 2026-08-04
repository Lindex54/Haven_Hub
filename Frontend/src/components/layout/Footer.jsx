import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'

function FooterLink({ children, to }) {
  return (
    <Link className="text-sm text-white/65 transition hover:text-secondary" to={to}>
      {children}
    </Link>
  )
}

function Footer() {
  return (
    <footer className="bg-primary text-text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.45fr_0.7fr_0.7fr_1.1fr] lg:gap-8">
          <div className="max-w-sm">
            <Link className="inline-block" to="/" aria-label="Wispers of Lake Katwe home">
              <span className="text-2xl font-bold tracking-tight">Wispers</span>
              <span className="ml-2 text-sm font-medium uppercase tracking-[0.22em] text-secondary">Lake Katwe</span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/70">Your easy starting point for meaningful days around Lake Katwe.</p>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-white" to="/plan-your-visit">
              Plan your visit <ArrowUpRight size={17} />
            </Link>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Explore</h2>
            <nav className="mt-5 flex flex-col gap-3">
              <FooterLink to="/discover">Discover Lake Katwe</FooterLink>
              <FooterLink to="/experiences">Tours & experiences</FooterLink>
              <FooterLink to="/stay">Accommodation</FooterLink>
              <FooterLink to="/gallery">Gallery</FooterLink>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Helpful links</h2>
            <nav className="mt-5 flex flex-col gap-3">
              <FooterLink to="/about">About us</FooterLink>
              <FooterLink to="/about/faqs">FAQs</FooterLink>
              <FooterLink to="/stay/information">Stay information</FooterLink>
              <FooterLink to="/contact">Contact us</FooterLink>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Get in touch</h2>
            <div className="mt-5 space-y-4 text-sm text-white/70">
              <a className="flex items-start gap-3 transition hover:text-secondary" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}><Phone size={17} className="mt-0.5 shrink-0 text-secondary" />{siteConfig.phone}</a>
              <a className="flex items-start gap-3 transition hover:text-secondary" href={`mailto:${siteConfig.email}`}><Mail size={17} className="mt-0.5 shrink-0 text-secondary" />{siteConfig.email}</a>
              <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-secondary" />{siteConfig.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wispers of Lake Katwe</p>
          <div className="flex gap-5">
            <Link className="transition hover:text-white" to="/privacy">Privacy</Link>
            <Link className="transition hover:text-white" to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
