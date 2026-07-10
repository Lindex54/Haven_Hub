import { useState } from 'react'
import ImageLightbox from '../../components/gallery/ImageLightbox'
import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { gallery, galleryCategories } from '../../data/gallery'
import { usePageMeta } from '../../utils/pageMeta'

function GalleryPage({ initialCategory = 'all' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [selectedItem, setSelectedItem] = useState(null)
  usePageMeta('Gallery')

  const items =
    activeCategory === 'all'
      ? gallery
      : gallery.filter((entry) => entry.category === activeCategory)

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
        description="Browse placeholder photography categories ready for verified destination, tour and accommodation media."
        eyebrow="Gallery"
        title="Gallery"
      />
      <PageSection>
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setActiveCategory('all')} variant={activeCategory === 'all' ? 'primary' : 'outline'}>
              All
            </Button>
            {galleryCategories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                variant={activeCategory === category.value ? 'primary' : 'outline'}
              >
                {category.label}
              </Button>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-[24px] border border-border bg-surface shadow-card">
                <img alt={item.alt} className="h-64 w-full object-cover" loading="lazy" src={item.src} />
                <div className="space-y-2 p-5">
                  <h2 className="text-xl font-semibold text-text-main">{item.title}</h2>
                  <p className="text-sm leading-7 text-text-muted">{item.description}</p>
                  <Button onClick={() => setSelectedItem(item)} variant="outline">
                    Open image
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>
      <ImageLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </main>
  )
}

export default GalleryPage
