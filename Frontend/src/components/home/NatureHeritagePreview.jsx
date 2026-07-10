import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { mediaAssets } from '../../config/mediaAssets'

const themes = [
  {
    title: 'Volcanic landscape',
    description: 'Wide scenery, crater views and changing light create a strong visual identity for the destination.',
    image: mediaAssets.craterLake,
  },
  {
    title: 'Salt-mining heritage',
    description: 'Guided interpretation helps visitors approach the heritage story with context and respect.',
    image: mediaAssets.saltLake,
  },
  {
    title: 'Wildlife and birdlife',
    description: 'Outdoor experiences can be shaped around observation, walking pace and flexible timing.',
    image: mediaAssets.flamingos,
  },
  {
    title: 'Community and culture',
    description: 'Thoughtful planning supports respectful visits and meaningful local engagement.',
    image: mediaAssets.hippos,
  },
]

function NatureHeritagePreview() {
  return (
    <PageSection>
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Landscape and Heritage"
          title="Nature, heritage and community all shape the visitor story."
          description="The platform now presents Lake Katwe as a layered travel destination rather than a stand-alone lodging offer."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {themes.map((theme) => (
            <article
              key={theme.title}
              className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,_rgba(248,245,239,0.95),_rgba(255,255,255,1))] shadow-card"
            >
              <img
                alt={theme.image.alt}
                className="h-56 w-full object-cover"
                loading="lazy"
                src={theme.image.src}
              />
              <div className="p-6">
                <h3 className="text-card-title font-semibold text-text-main">{theme.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{theme.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageSection>
  )
}

export default NatureHeritagePreview
