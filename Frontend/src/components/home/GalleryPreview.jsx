import Button from '../common/Button'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { mediaAssets } from '../../config/mediaAssets'
import { gallery } from '../../data/gallery'

const featuredGalleryImages = [
  mediaAssets.saltLake,
  mediaAssets.craterLake,
  mediaAssets.flamingos,
  mediaAssets.treeLion,
  mediaAssets.hippos,
  mediaAssets.kob,
]

function GalleryPreview() {
  return (
    <PageSection className="bg-soft-background/80">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Gallery"
          title="Preview the destination through categories designed for expansion."
          description="All gallery items currently use local placeholder images with meaningful alternative text, ready to be replaced with verified media."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.slice(0, 8).map((item, index) => (
            <figure key={item.id} className="overflow-hidden rounded-[24px] border border-border bg-surface shadow-card">
              <img
                alt={featuredGalleryImages[index % featuredGalleryImages.length]?.alt ?? item.alt}
                className="h-48 w-full object-cover"
                loading="lazy"
                src={featuredGalleryImages[index % featuredGalleryImages.length]?.src ?? item.src}
              />
              <figcaption className="p-4">
                <p className="font-semibold text-text-main">{item.title}</p>
                <p className="mt-2 text-sm text-text-muted">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <Button to="/gallery">View Full Gallery</Button>
      </div>
    </PageSection>
  )
}

export default GalleryPreview
