import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import natureAnimals from '../../assets/images/wispers/nature-animals.png'
import wisperImage10 from '../../assets/images/wispers/wisper-image10.png'
import wispersImage1 from '../../assets/images/wispers/wispers-image1.png'
import wispersImage3 from '../../assets/images/wispers/wispers-image3.png'

const themes = [
  {
    title: 'Volcanic landscape',
    description: 'Wide scenery, crater views and changing light create a strong visual identity for the destination.',
    image: {
      src: wisperImage10,
      alt: 'A visitor standing beside the water with Lake Katwe scenery behind.',
    },
  },
  {
    title: 'Salt-mining heritage',
    description: 'Guided interpretation helps visitors approach the heritage story with context and respect.',
    image: {
      src: wispersImage3,
      alt: 'Local women standing with salt crystals during a Lake Katwe visit.',
    },
  },
  {
    title: 'Wildlife and birdlife',
    description: 'Outdoor experiences can be shaped around observation, walking pace and flexible timing.',
    image: {
      src: natureAnimals,
      alt: 'Wildlife gathered near water in the wider Lake Katwe area.',
    },
  },
  {
    title: 'Community and culture',
    description: 'Thoughtful planning supports respectful visits and meaningful local engagement.',
    image: {
      src: wispersImage1,
      alt: 'Visitors and hosts gathered indoors during a community visit.',
    },
    imageClassName: 'object-top',
  },
]

function NatureHeritagePreview() {
  return (
    <PageSection>
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Landscape and Heritage"
          title="Nature and heritage"
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
                className={`h-56 w-full object-cover ${theme.imageClassName ?? ''}`}
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
