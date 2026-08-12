import { useRef, useState } from 'react'
import { A11y, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Button from '../common/Button'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { accommodation } from '../../data/accommodation'
import { formatCurrency } from '../../utils/currency'

function AccommodationPreview() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const swiperRef = useRef(null)
  const pendingOpenIndexRef = useRef(null)

  const featuredAccommodation = accommodation.filter((item) => item.featured)

  const handleSlideSelect = (index) => {
    if (index === activeIndex) {
      setIsDetailsOpen((isOpen) => !isOpen)
      return
    }

    pendingOpenIndexRef.current = index
    swiperRef.current?.slideTo(index)
  }

  return (
    <PageSection className="bg-soft-background/80">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Stay"
          title="Accommodation that supports the wider Lake Katwe visitor experience."
          description="Use your stay as a comfortable base for guided visits, photography plans and group travel."
        />
        <Swiper
          a11y={{ enabled: true }}
          centeredSlides
          className="accommodation-swiper"
          grabCursor
          initialSlide={1}
          keyboard={{ enabled: true }}
          modules={[A11y, Keyboard]}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex)
            setIsDetailsOpen(false)
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            if (pendingOpenIndexRef.current === swiper.activeIndex) {
              setIsDetailsOpen(true)
              pendingOpenIndexRef.current = null
            }
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          slidesPerView="auto"
          spaceBetween={28}
        >
          {featuredAccommodation.map((item, index) => (
            <SwiperSlide className="!h-auto !w-[88vw] max-w-[38rem]" key={item.slug}>
              {({ isActive }) => (
                <article
                  className={`group relative px-4 transition duration-300 ${
                    isActive ? 'z-10 scale-100 opacity-100' : 'scale-[0.94] opacity-55'
                  }`}
                >
                  {isActive && isDetailsOpen ? (
                    <div className="absolute inset-x-0 bottom-0 top-8 rounded-[8px] bg-primary" />
                  ) : null}

                  <button
                    aria-expanded={isActive && isDetailsOpen}
                    className={`relative z-10 block w-full overflow-hidden rounded-[8px] bg-primary text-left shadow-medium transition duration-300 ${
                      isActive ? 'shadow-[0_16px_30px_rgba(0,0,0,0.28)]' : ''
                    }`}
                    onClick={() => handleSlideSelect(index)}
                    type="button"
                  >
                    <div className="relative aspect-[3/2] min-h-[18rem]">
                      <img
                        alt={item.imageAlt}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        src={item.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
                      <h3 className="absolute left-6 right-6 top-5 text-center text-2xl font-bold text-white">
                        {item.name}
                      </h3>
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-xs font-extrabold uppercase text-white">
                        <span>{item.category}</span>
                        <span className="text-right">
                          {formatCurrency(item.price, item.currency)} / {item.priceUnit}
                        </span>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`relative z-10 overflow-hidden transition-all duration-500 ${
                      isActive && isDetailsOpen
                        ? 'max-h-96 translate-y-0 px-6 pb-6 pt-7 opacity-100 md:px-8'
                        : 'max-h-0 -translate-y-4 px-6 py-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="text-sm font-bold text-white">Up to {item.capacity} guests</p>
                        <p className="mt-2 text-sm leading-7 text-white/80">{item.shortDescription}</p>
                        <p className="mt-2 text-sm leading-6 text-white/80">
                          Amenities: {item.amenities.slice(0, 3).join(', ')}
                        </p>
                      </div>
                      <Button className="w-full" to={`/stay/${item.slug}`} variant="outline">
                        View accommodation
                      </Button>
                    </div>
                  </div>
                </article>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-center text-sm font-semibold text-primary">
          Swipe to explore the rooms, then select one to view its full details.
        </p>
        <div className="flex justify-center">
          <Button to="/stay">View Accommodation</Button>
        </div>
      </div>
    </PageSection>
  )
}

export default AccommodationPreview
