import Breadcrumb from './Breadcrumb'

function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  breadcrumbs = [],
  cta,
}) {
  const text = subtitle ?? description

  return (
    <section className="relative isolate overflow-hidden bg-warm-cream pb-14 pt-16 lg:pb-20 lg:pt-24">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-15"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,124,140,0.16),_transparent_26%),linear-gradient(180deg,_rgba(248,245,239,0.92)_0%,_rgba(245,247,243,0.96)_100%)]" />
      <div className="container-custom">
        <div className="max-w-4xl space-y-5 rounded-[32px] border border-border/70 bg-surface/88 px-6 py-10 shadow-navbar backdrop-blur sm:px-8 lg:px-12 lg:py-14">
          {breadcrumbs.length ? <Breadcrumb items={breadcrumbs} /> : null}
          {eyebrow ? (
            <span className="inline-flex rounded-full bg-secondary/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary-dark">
              {eyebrow}
            </span>
          ) : null}
          <div className="space-y-4">
            <h1 className="page-title">{title}</h1>
            {text ? <p className="max-w-3xl muted-text">{text}</p> : null}
          </div>
          {cta ? <div>{cta}</div> : null}
        </div>
      </div>
    </section>
  )
}

export default PageHero
