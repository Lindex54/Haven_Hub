import Breadcrumb from './Breadcrumb'

function PageHero({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="bg-[linear-gradient(180deg,_#f8f5ef_0%,_#f5f7fa_100%)] pb-10 pt-14 lg:pb-14 lg:pt-20">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[32px] border border-border/70 bg-surface/80 px-6 py-10 shadow-navbar backdrop-blur sm:px-8 lg:px-12 lg:py-14">
          <div className="max-w-3xl space-y-5">
            {breadcrumbs.length ? <Breadcrumb items={breadcrumbs} /> : null}
            {eyebrow ? (
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {eyebrow}
              </span>
            ) : null}
            <div className="space-y-4">
              <h1 className="page-title">{title}</h1>
              {description ? <p className="muted-text">{description}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
