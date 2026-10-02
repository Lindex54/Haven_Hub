import { A11y, Autoplay, FreeMode, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import CtaBar from '../common/CtaBar'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { gallery, galleryCategories } from '../../data/gallery'

function GalleryPreview() {
  return (
    <PageSection className="overflow-hidden bg-white">
      <div className="space-y-8">
        <SectionHeader
          eyebrow="Gallery"
          title="Lake Katwe gallery"
          description="Browse local Lake Katwe images across community, tours, accommodation, nature and wildlife."
        />
        <div className="panorama-shell">
          <Swiper
            a11y={{ enabled: true }}
            autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: true }}
            className="panorama-swiper"
            freeMode={{ enabled: true, momentum: true, momentumRatio: 0.7 }}
            grabCursor
            keyboard={{ enabled: true }}
            loop
            modules={[A11y, Autoplay, FreeMode, Keyboard]}
            onProgress={(swiper) => {
              swiper.slides.forEach((slide) => {
                const distanceFromCenter = Math.min(Math.abs(slide.progress), 2.5)
                const direction = Math.sign(slide.progress)

                slide.style.setProperty('--panorama-edge-scale', 1 + distanceFromCenter * 0.035)
                slide.style.setProperty('--panorama-edge-tilt', `${direction * distanceFromCenter * -0.8}deg`)
              })
            }}
            slidesPerView="auto"
            spaceBetween={10}
            speed={6500}
            watchSlidesProgress
          >
            {gallery.map((item, index) => {
              const category = galleryCategories.find(({ value }) => value === item.category)?.label

              return (
                <SwiperSlide className="panorama-slide" key={item.id}>
                  <figure className="panorama-frame group" tabIndex="0">
                    <img
                      alt={item.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-focus:scale-[1.04]"
                      loading={index < 5 ? 'eager' : 'lazy'}
                      src={item.src}
                    />
                    <figcaption className="panorama-details">
                      <span className="text-xs font-bold uppercase text-primary-dark">{category}</span>
                      <h3 className="mt-1 text-lg font-bold text-primary-dark sm:text-xl">{item.title}</h3>
                      <p className="mt-1 line-clamp-3 text-sm font-medium leading-6 text-primary-dark/80">
                        {item.description?.trim() || item.alt || 'Lake Katwe, Uganda'}
                      </p>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <CtaBar to="/gallery">View Full Gallery</CtaBar>
      </div>
    </PageSection>
  )
}

export default GalleryPreview
