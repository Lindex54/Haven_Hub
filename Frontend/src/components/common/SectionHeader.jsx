function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl space-y-4 ${alignClass}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="section-title">{title}</h2>
        {description ? <p className="muted-text">{description}</p> : null}
      </div>
    </div>
  )
}

export default SectionHeader
