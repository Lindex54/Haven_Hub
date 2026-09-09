function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-5xl ${alignClass}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 text-2xl font-bold leading-tight text-text-main sm:text-3xl lg:text-[2rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-text-muted">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
