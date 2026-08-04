import defaultHero from '../../assets/images/hero/lake-katwe-landscape.jpeg'
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
  const heroImage = image ?? defaultHero

  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src={heroImage}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,58,45,0.96)_0%,rgba(20,73,57,0.84)_45%,rgba(18,54,45,0.35)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(224,193,90,0.24),transparent_22%)]" />
      <div className="container-custom flex min-h-[390px] items-end py-10 sm:py-14 lg:min-h-[460px] lg:py-16">
        <div className="max-w-3xl">
          {breadcrumbs.length ? <Breadcrumb inverse items={breadcrumbs} /> : null}
          <div className="mt-12 lg:mt-16">
            {eyebrow ? (
              <span className="inline-flex rounded-full border border-secondary/50 bg-secondary/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary-light">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.04] tracking-[-0.045em] font-bold text-text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {text ? <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{text}</p> : null}
            {cta ? <div className="mt-7">{cta}</div> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
