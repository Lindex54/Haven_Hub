function SocialLinks({ links }) {
  return (
    <ul className="space-y-3 text-sm text-text-muted">
      {links.map((link) => (
        <li key={link.label}>
          {link.disabled || !link.href ? (
            <span>{link.label} (coming soon)</span>
          ) : (
            <a className="transition hover:text-primary" href={link.href}>
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
