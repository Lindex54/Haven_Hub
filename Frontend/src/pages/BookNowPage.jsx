import PageHero from '../components/common/PageHero'
import PageSection from '../components/common/PageSection'
import Button from '../components/common/Button'

function BookNowPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book Your Stay"
        description="Start your StayNest reservation with a simple booking form. Backend integration can connect this flow later."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Book Now' },
        ]}
      />
      <PageSection>
        <div className="mx-auto max-w-4xl">
          <form className="card space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="input-field" type="text" placeholder="Guest name" />
              <input className="input-field" type="email" placeholder="Email address" />
              <input className="input-field" type="date" />
              <input className="input-field" type="date" />
              <select className="input-field">
                <option>Choose room type</option>
                <option>Deluxe Room</option>
                <option>Standard Room</option>
                <option>Executive Suite</option>
                <option>Family Room</option>
              </select>
              <select className="input-field">
                <option>Guests</option>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>
            <textarea
              className="input-field min-h-32 resize-none"
              placeholder="Special requests"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit">Request Booking</Button>
              <Button to="/contact" variant="outline">
                Need Help?
              </Button>
            </div>
          </form>
        </div>
      </PageSection>
    </>
  )
}

export default BookNowPage
