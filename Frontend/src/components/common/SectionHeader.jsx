function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
}) {
  const alignment =
    align === 'left' ? 'mx-0 text-left' : 'mx-auto text-center items-center'
  const isDark = theme === 'dark'
  const eyebrowClass = isDark
    ? 'bg-text-white/10 text-secondary-light'
    : 'bg-primary/10 text-primary'
  const titleClass = isDark ? 'text-text-white' : 'text-text-main'
  const descriptionClass = isDark ? 'text-text-white/75' : 'text-text-muted'

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span
          className={`inline-flex w-fit rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] ${eyebrowClass}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className={`section-title ${titleClass}`}>{title}</h2>
        {description ? (
          <p className={`muted-text ${descriptionClass}`}>{description}</p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeader
