import SectionHeader from '../common/SectionHeader'
import { gallery } from '../../data/gallery'
import Button from '../common/Button'

function GalleryPreview() {
  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom space-y-12">
        <SectionHeader
          eyebrow="Gallery"
          title="Explore Our Lodge"
          description="A glimpse of our rooms, outdoor spaces, dining areas, and relaxing environment."
        />

        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {gallery.slice(0, 6).map((item) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-image ${
                item.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,27,27,0.02)_0%,rgba(27,27,27,0.68)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-subtitle leading-subtitle font-semibold text-text-white">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Button to="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview
