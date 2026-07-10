import { Link } from 'react-router-dom'
import { footerNavigation } from '../../config/navigation'
import { siteConfig } from '../../config/siteConfig'
import { socialLinks } from '../../config/socialLinks'
import SocialLinks from '../common/SocialLinks'

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-main">
        {title}
      </h2>
      <ul className="space-y-3 text-sm text-text-muted">
        {links.map((link) => (
          <li key={link.path}>
            <Link className="transition hover:text-primary" to={link.path}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/92">
      <div className="container-custom py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.9fr_0.9fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <h2 className="text-card-title font-bold text-text-main">{siteConfig.name}</h2>
            <p className="text-sm leading-7 text-text-muted">{siteConfig.tagline}</p>
            <p className="text-sm leading-7 text-text-muted">
              Wispers of Lake Katwe is an independent tourism and hospitality
              business offering guided experiences, visitor planning and accommodation
              services around Lake Katwe, Uganda.
            </p>
          </div>
          <FooterColumn links={footerNavigation.discover} title="Discover" />
          <FooterColumn links={footerNavigation.experiences} title="Experiences" />
          <FooterColumn links={footerNavigation.stay} title="Stay" />
          <FooterColumn links={footerNavigation.visitorSupport} title="Visitor Information" />
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-main">
              Contact
            </h2>
            <div className="space-y-3 text-sm text-text-muted">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.whatsapp}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.location}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-main">
              Social Media
            </h2>
            <SocialLinks links={socialLinks} />
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-main">
              Legal
            </h2>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <Link className="transition hover:text-primary" to="/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-primary" to="/terms">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
