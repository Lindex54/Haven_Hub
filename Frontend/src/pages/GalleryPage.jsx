import PageHero from '../components/common/PageHero'
import PageSection from '../components/common/PageSection'
import SectionHeader from '../components/common/SectionHeader'
import { gallery } from '../data/gallery'

function GalleryPage({
  items = gallery,
  title = 'Full Gallery',
  description,
}) {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={title}
        description={
          description ??
          'Explore the rooms, shared spaces, outdoor views, and details that define the StayNest atmosphere.'
        }
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Gallery', to: '/gallery' },
          { label: title },
        ]}
      />
      <PageSection>
        <div className="space-y-10">
          <SectionHeader
            align="left"
            title={title}
            description="A fuller look at the spaces guests experience throughout the lodge."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.id} className="group overflow-hidden rounded-image shadow-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="bg-surface p-5">
                  <h3 className="text-subtitle leading-subtitle font-semibold text-text-main">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-small leading-small text-text-muted capitalize">
                    {item.category} collection
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  )
}

export default GalleryPage
