import Button from '../common/Button'

function AvailabilityBar() {
  return (
    <section id="availability" className="relative z-20 -mt-10 pb-6 lg:-mt-14 lg:pb-10">
      <div className="container-custom">
        <div className="rounded-[28px] border border-border/70 bg-surface p-5 shadow-navbar sm:p-6 lg:p-7">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_0.8fr_1fr_auto]">
            <label className="space-y-2">
              <span className="text-small leading-small font-semibold text-text-main">
                Check-in date
              </span>
              <input type="date" className="input-field" />
            </label>

            <label className="space-y-2">
              <span className="text-small leading-small font-semibold text-text-main">
                Check-out date
              </span>
              <input type="date" className="input-field" />
            </label>

            <label className="space-y-2">
              <span className="text-small leading-small font-semibold text-text-main">
                Guests
              </span>
              <select className="input-field">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-small leading-small font-semibold text-text-main">
                Room Type
              </span>
              <select className="input-field">
                <option>Any Room</option>
                <option>Deluxe</option>
                <option>Standard</option>
                <option>Executive</option>
              </select>
            </label>

            <div className="flex items-end">
              <Button to="/book-now" className="w-full justify-center xl:w-auto">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvailabilityBar
