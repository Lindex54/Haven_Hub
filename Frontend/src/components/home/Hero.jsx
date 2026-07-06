import Button from '../common/Button'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary text-text-white"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1800&q=80"
          alt="StayNest lodge exterior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,68,55,0.92)_0%,rgba(22,68,55,0.76)_42%,rgba(22,68,55,0.35)_100%)]" />
      </div>

      <div className="container-custom relative">
        <div className="flex min-h-[calc(100svh-5.5rem)] max-w-3xl items-center py-20 lg:py-28">
          <div className="space-y-7">
            <span className="inline-flex items-center rounded-full border border-text-white/20 bg-text-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary-light backdrop-blur">
              Welcome to StayNest Lodge
            </span>

            <div className="space-y-5">
              <h1 className="max-w-2xl text-hero-mobile leading-hero-mobile tracking-hero font-extrabold lg:text-hero lg:leading-hero">
                Find Your Perfect Stay
              </h1>
              <p className="max-w-2xl text-body leading-body text-text-white/78">
                Comfortable stays, easy bookings, and unforgettable lodge
                experiences designed for relaxation, comfort, and convenience.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#rooms">Explore Rooms</Button>
              <Button
                href="#availability"
                variant="outline"
                className="border-text-white/20 bg-text-white/8 text-text-white hover:bg-text-white/14 hover:text-text-white"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
