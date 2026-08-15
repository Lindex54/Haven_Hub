import { useMemo, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { A11y, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { gallery, galleryCategories } from '../../data/gallery'
import { usePageMeta } from '../../utils/pageMeta'

function GalleryPage({ initialCategory = 'all' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [activeIndex, setActiveIndex] = useState(initialCategory === 'all' ? 1 : 0)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const swiperRef = useRef(null)
  const pendingOpenIndexRef = useRef(null)
  usePageMeta('Gallery')

  const items = useMemo(
    () =>
      activeCategory === 'all'
        ? gallery
        : gallery.filter((entry) => entry.category === activeCategory),
    [activeCategory],
  )
  const handleSlideSelect = (index) => {
    if (index === activeIndex) {
      setIsDetailsOpen((isOpen) => !isOpen)
      return
    }

    pendingOpenIndexRef.current = index
    swiperRef.current?.slideTo(index)
  }

  const handleCategoryChange = (category) => {
    pendingOpenIndexRef.current = null
    setActiveCategory(category)
    setActiveIndex(0)
    setIsDetailsOpen(false)
    swiperRef.current?.slideTo(0)
  }

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
        description="Browse Lake Katwe photography across destination, salt heritage, nature, wildlife, community, tours and accommodation."
        eyebrow="Gallery"
        title="Gallery"
      />
      <PageSection className="bg-white">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => handleCategoryChange('all')}
              variant={activeCategory === 'all' ? 'primary' : 'outline'}
            >
              All
            </Button>
            {galleryCategories.map((category) => (
              <Button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                variant={activeCategory === category.value ? 'primary' : 'outline'}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="py-4 md:py-8">
            {activeCategory === 'all' ? (
              <div className="grid gap-8 md:grid-cols-2">
                {items.map((item, index) => (
                  <article
                    className="group relative cursor-pointer transition duration-300"
                    key={item.id}
                    onClick={() => handleSlideSelect(index)}
                  >
                    {activeIndex === index && isDetailsOpen ? (
                      <div className="absolute inset-x-0 bottom-0 top-8 rounded-[8px] bg-primary" />
                    ) : null}

                    <div className="relative z-10 overflow-hidden rounded-[8px] bg-primary shadow-medium transition duration-300">
                      <div className="relative aspect-[3/2] min-h-[18rem]">
                        <img
                          alt={item.alt}
                          className="h-full w-full object-cover"
                          loading={index < 4 ? 'eager' : 'lazy'}
                          src={item.src}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55" />
                        <h2 className="absolute left-6 right-6 top-5 text-center text-2xl font-bold text-white">
                          {item.title}
                        </h2>
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-extrabold uppercase text-white">
                          <span>{item.category.replace('-', ' ')}</span>
                          <span>Lake Katwe</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative z-10 overflow-hidden transition-all duration-500 ${
                        activeIndex === index && isDetailsOpen
                          ? 'max-h-80 translate-y-0 px-6 pb-6 pt-7 opacity-100 md:px-8'
                          : 'max-h-0 -translate-y-4 px-6 py-0 opacity-0'
                      }`}
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="space-y-2">
                          <p className="text-sm font-bold text-white">
                            {galleryCategories.find((category) => category.value === item.category)?.label ??
                              'Lake Katwe'}
                          </p>
                          <p className="max-w-xl text-sm leading-7 text-white/80">{item.description}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-1 text-secondary" aria-label="4 out of 5 stars">
                          {[0, 1, 2, 3, 4].map((star) => (
                            <Star
                              className={star < 4 ? 'fill-current' : 'text-border'}
                              key={star}
                              size={18}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
                <p className="md:col-span-2 mt-1 text-center text-sm font-semibold text-primary">
                  Click a card to view or hide its details.
                </p>
              </div>
            ) : (
              <>
                <Swiper
                  a11y={{ enabled: true }}
                  centeredSlides
                  grabCursor
                  initialSlide={0}
                  keyboard={{ enabled: true }}
                  modules={[A11y, Keyboard]}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper
                  }}
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
                  slidesPerView="auto"
                  spaceBetween={28}
                  className="gallery-swiper"
                >
                  {items.map((item, index) => (
                    <SwiperSlide className="!h-auto !w-[88vw] max-w-[38rem]" key={item.id}>
                      {({ isActive }) => (
                        <article
                          className={`group relative cursor-pointer px-4 transition duration-300 ${
                            isActive ? 'z-10 scale-100' : 'scale-[0.94] opacity-55'
                          }`}
                          onClick={() => handleSlideSelect(index)}
                        >
                          {isActive && isDetailsOpen ? (
                            <div className="absolute inset-x-0 bottom-0 top-8 rounded-[8px] bg-primary" />
                          ) : null}

                          <div
                            className={`relative z-10 overflow-hidden rounded-[8px] bg-primary shadow-medium transition duration-300 ${
                              isActive ? 'shadow-[0_16px_30px_rgba(0,0,0,0.28)]' : ''
                            }`}
                          >
                            <div className="relative aspect-[3/2] min-h-[18rem]">
                              <img
                                alt={item.alt}
                                className="h-full w-full object-cover"
                                loading={index === 0 ? 'eager' : 'lazy'}
                                src={item.src}
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55" />
                              <h2 className="absolute left-6 right-6 top-5 text-center text-2xl font-bold text-white">
                                {item.title}
                              </h2>
                              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-extrabold uppercase text-white">
                                <span>{item.category.replace('-', ' ')}</span>
                                <span>Lake Katwe</span>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`relative z-10 overflow-hidden transition-all duration-500 ${
                              isActive && isDetailsOpen
                                ? 'max-h-80 translate-y-0 px-6 pb-6 pt-7 opacity-100 md:px-8'
                                : 'max-h-0 -translate-y-4 px-6 py-0 opacity-0'
                            }`}
                          >
                            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                              <div className="space-y-2">
                                <p className="text-sm font-bold text-white">
                                  {galleryCategories.find((category) => category.value === item.category)?.label ??
                                    'Lake Katwe'}
                                </p>
                                <p className="max-w-xl text-sm leading-7 text-white/80">{item.description}</p>
                              </div>
                              <div className="flex shrink-0 items-center gap-1 text-secondary" aria-label="4 out of 5 stars">
                                {[0, 1, 2, 3, 4].map((star) => (
                                  <Star
                                    className={star < 4 ? 'fill-current' : 'text-border'}
                                    key={star}
                                    size={18}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </article>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
                <p className="mt-5 text-center text-sm font-semibold text-primary">
                  Swipe to explore, then click a card to view or hide its details.
                </p>
              </>
            )}
          </div>
        </div>
      </PageSection>
    </main>
  )
}

export default GalleryPage
