import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../common/Button'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { discoverHighlights } from '../../data/discover'
import fisherManImage from '../../assets/images/wispers/fisher-man-image.png'
import natureAnimals from '../../assets/images/wispers/nature-animals.png'
import wisperImage10 from '../../assets/images/wispers/wisper-image10.png'
import wisperNature from '../../assets/images/wispers/wisper-nature.png'
import wispersImage3 from '../../assets/images/wispers/wispers-image3.png'
import wispersImage8 from '../../assets/images/wispers/wispers-image8.png'

const previewImages = [
  { src: wisperNature, alt: 'Entrance sign and natural setting for Whispers of Lake Katwe.' },
  { src: wispersImage3, alt: 'Local women standing with salt crystals during a Lake Katwe visit.' },
  { src: wisperImage10, alt: 'A visitor standing beside the water with Lake Katwe scenery behind.' },
  { src: wispersImage8, alt: 'Guests seated together during a group travel experience.' },
  { src: natureAnimals, alt: 'Wildlife gathered near water in the wider Lake Katwe area.' },
  { src: fisherManImage, alt: 'A local man standing on a small boat on the water near Lake Katwe.' },
]

function getCardsPerView(width) {
  if (width >= 1280) return 3
  if (width >= 768) return 2
  return 1
}

function DiscoverPreview() {
  const viewportRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [cardStep, setCardStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const maxSlide = Math.max(0, discoverHighlights.length - cardsPerView)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return undefined

    const updateMeasurements = () => {
      const visibleCards = getCardsPerView(viewport.clientWidth)
      const gap = 24
      const cardWidth = (viewport.clientWidth - gap * (visibleCards - 1)) / visibleCards
      setCardsPerView(visibleCards)
      setCardStep(cardWidth + gap)
      setActiveSlide((current) => Math.min(current, discoverHighlights.length - visibleCards))
    }

    updateMeasurements()
    const observer = new ResizeObserver(updateMeasurements)
    observer.observe(viewport)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current >= maxSlide ? 0 : current + 1))
    }, 8000)

    return () => window.clearInterval(intervalId)
  }, [isPaused, maxSlide])

  const showPrevious = () => {
    setActiveSlide((current) => (current <= 0 ? maxSlide : current - 1))
  }

  const showNext = () => {
    setActiveSlide((current) => (current >= maxSlide ? 0 : current + 1))
  }

  return (
    <PageSection>
      <div className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            title="Discover Lake Katwe"
          />
          <div className="flex items-center gap-3" aria-label="Discover carousel controls">
            <button
              aria-label="Show previous discover card"
              className="grid size-12 place-items-center border border-text-main bg-transparent text-text-main transition-colors hover:bg-text-main hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={showPrevious}
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={22} />
            </button>
            <button
              aria-label="Show next discover card"
              className="grid size-12 place-items-center border border-text-main bg-transparent text-text-main transition-colors hover:bg-text-main hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={showNext}
              type="button"
            >
              <ChevronRight aria-hidden="true" size={22} />
            </button>
          </div>
        </div>

        <div
          aria-label="Discover Lake Katwe highlights"
          aria-roledescription="carousel"
          className="overflow-hidden"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
          }}
          onFocus={() => setIsPaused(true)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={viewportRef}
          role="region"
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translate3d(-${activeSlide * cardStep}px, 0, 0)` }}
          >
            {discoverHighlights.map((item, index) => (
              <article
                aria-label={`${index + 1} of ${discoverHighlights.length}: ${item.title}`}
                className="flex shrink-0 flex-col overflow-hidden border border-border bg-surface shadow-card"
                key={item.path}
                style={{ width: cardStep ? cardStep - 24 : `${100 / cardsPerView}%` }}
              >
                <img
                  alt={previewImages[index].alt}
                  className="h-72 w-full object-cover lg:h-80"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  src={previewImages[index].src}
                />
                <div className="flex flex-1 flex-col items-start gap-4 p-6 lg:p-7">
                  <h3 className="text-card-title font-semibold text-text-main">{item.title}</h3>
                  <p className="flex-1 text-sm leading-7 text-text-muted">{item.description}</p>
                  <Button className="!rounded-none" to={item.path} variant="outline">
                    Learn more
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex gap-2" aria-label="Choose a discover slide">
            {Array.from({ length: maxSlide + 1 }, (_, index) => (
              <button
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={activeSlide === index}
                className={`h-1.5 transition-all duration-300 ${
                  activeSlide === index ? 'w-10 bg-primary' : 'w-5 bg-border hover:bg-text-muted'
                }`}
                key={index}
                onClick={() => setActiveSlide(index)}
                type="button"
              />
            ))}
          </div>
          <Button className="!rounded-none" to="/discover">
            Discover Lake Katwe
          </Button>
        </div>
      </div>
    </PageSection>
  )
}

export default DiscoverPreview
