const quickLinks = ['Home', 'Rooms', 'Experiences', 'Gallery', 'About', 'Contact']
const socialLinks = ['Facebook', 'Instagram', 'X/Twitter', 'LinkedIn']

function Footer() {
  return (
    <footer id="contact" className="bg-primary text-text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <h3 className="text-card-title leading-card-title font-bold">
              StayNest Lodge
            </h3>
            <p className="max-w-md text-body leading-body text-text-white/75">
              Comfortable stays, easy bookings, unforgettable experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-subtitle leading-subtitle font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3 text-body leading-body text-text-white/75">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace('/', '').replace(' ', '-')}`}
                    className="transition hover:text-secondary-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-subtitle leading-subtitle font-semibold">Contact</h4>
            <ul className="space-y-3 text-body leading-body text-text-white/75">
              <li>Phone: +256 700 000 000</li>
              <li>Email: info@staynest.com</li>
              <li>Location: Kampala, Uganda</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-subtitle leading-subtitle font-semibold">Social</h4>
            <ul className="space-y-3 text-body leading-body text-text-white/75">
              {socialLinks.map((link) => (
                <li key={link}>
                  <a href="#home" className="transition hover:text-secondary-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-text-white/15 pt-6 text-small leading-small text-text-white/60">
          © 2026 StayNest Lodge. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
