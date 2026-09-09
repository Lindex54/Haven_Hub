import {
  Bird,
  Circle,
  Compass,
  Feather,
  Home,
  Sparkles,
  Sprout,
  Sun,
  Waves,
  Wind,
} from 'lucide-react'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import SectionHeader from '../../components/common/SectionHeader'
import { usePageMeta } from '../../utils/pageMeta'

const origin = [
  {
    icon: Compass,
    title: 'Where the Brand Idea Began',
    paragraphs: [
      "Whispers of Lake Katwe began with a simple idea: tourism can be more than visiting a beautiful location. It can be an experience of belonging. The vision is to introduce Lake Katwe to the world through the eyes of people who know it intimately—its families, stories, landscapes, traditions, everyday interactions and hidden places.",
      'The brand is therefore built around the idea of a visitor being welcomed rather than merely accommodated. The future vision includes storytelling, tourism, guided experiences, a homestead-style accommodation, food, culture and eventually a lifestyle/clothing identity.',
    ],
  },
  {
    icon: Feather,
    title: 'Why the Word "Whispers"',
    paragraphs: [
      '"Whispers" was chosen because the most meaningful stories of a place are not always loud. They live in conversations, family memories, lake breezes, footsteps, traditional knowledge, evening gatherings and stories passed from one generation to another.',
      'A whisper also travels. It begins quietly and spreads from one person to another. In the same way, the brand is intended to carry the story of Lake Katwe from its community to visitors and then from those visitors to the wider world.',
    ],
  },
]

const emblemIntro =
  'The central emblem is the foundation of the Whispers of Lake Katwe identity. It is deliberately more symbolic than literal. Rather than filling the logo with many separate tourism icons, the elements are woven into one continuous visual story.'

const emblemSymbols = [
  {
    icon: Circle,
    title: 'The Circle',
    paragraphs: [
      'The enclosing circular form represents wholeness, continuity and community. A circle has no obvious beginning or end. It suggests a gathering place, a family circle and the idea that a visitor enters the story and becomes part of it.',
    ],
  },
  {
    icon: Waves,
    title: 'The Horizon and Lake',
    paragraphs: [
      'The horizontal line represents Lake Katwe and the horizon. It creates a calm visual foundation for the emblem. It also represents a meeting point between land and water, past and future, home and the wider world.',
    ],
  },
  {
    icon: Sun,
    title: 'The Sun',
    paragraphs: [
      'The rising/setting sun represents warmth, welcome, renewal and the beginning or ending of a journey. It evokes the golden hours when a landscape becomes especially intimate and memorable.',
    ],
  },
  {
    icon: Bird,
    title: 'The Birds',
    paragraphs: [
      'The birds represent freedom, travel and the movement of stories beyond Lake Katwe. They also connect the brand to the natural world and to the idea that visitors arrive from many places and carry memories home with them.',
    ],
  },
  {
    icon: Home,
    title: 'The Homestead / House',
    paragraphs: [
      'The small home at the heart of the emblem is one of the most important symbols. It represents the accommodation concept and, more importantly, the philosophy behind it: this should feel like visiting someone’s home rather than checking into an impersonal hotel.',
      'Its small scale is intentional. The landscape surrounds the home, suggesting that the experience is not about luxury separated from its environment; it is about comfort rooted in place, people and nature.',
    ],
  },
  {
    icon: Wind,
    title: 'The Flowing Wave / Whisper Line',
    paragraphs: [
      'The sweeping curves are the signature visual language of the brand. They simultaneously suggest lake waves, wind, movement, a journey and a whisper travelling through the landscape.',
      "These curves are what make the emblem recognizable even without the words. They are the brand's visual equivalent of a voice: soft, continuous and memorable.",
    ],
  },
  {
    icon: Sprout,
    title: 'The Roots',
    paragraphs: [
      "The lower flowing forms transform into roots. This is the central metaphor for the brand's relationship with Lake Katwe. The roots represent ancestry, family, heritage, identity and knowledge that has been carried through generations.",
      'The roots also communicate the brand promise: visitors may come from far away, but the experience is grounded in something real and local.',
    ],
  },
  {
    icon: Sparkles,
    title: 'The Spiral',
    paragraphs: [
      'The small spiral is the hidden signature of Whispers. It represents a whisper spreading outward, ripples travelling across water, a story being passed from generation to generation, and a journey that ultimately returns to its roots.',
      "The spiral is the brand's quiet signature: a story that travels, but never forgets where it began.",
    ],
  },
]

function BrandStoryPage() {
  usePageMeta(
    'Brand Story & Logo Meaning',
    'A visual identity rooted in home, heritage, community, nature and quiet luxury.',
  )

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Brand Story & Logo Meaning' },
        ]}
        description="A visual identity rooted in home, heritage, community, nature and quiet luxury."
        eyebrow="Brand Story"
        title="Brand Story & Logo Meaning"
      />

      <section className="bg-background">
        <div className="container-custom py-10 md:py-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-2xl font-semibold italic leading-snug text-primary sm:text-3xl">
              &ldquo;Come as a visitor. Leave as family.&rdquo;
            </p>
            <p className="text-lg leading-8 text-text-muted">
              Our emblem was never just a picture of a lake or a tourism symbol. Every line,
              curve and shape was designed to capture a feeling: the feeling of returning to
              one&rsquo;s roots, being welcomed into a home, and discovering a place through the
              people who belong to it.
            </p>
          </div>
        </div>
      </section>

      <PageSection className="bg-surface">
        <div className="space-y-10">
          <SectionHeader title="Where it began" />
          <div className="grid gap-6 lg:grid-cols-2">
            {origin.map((item) => (
              <article className="card space-y-4" key={item.title}>
                <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <item.icon aria-hidden="true" size={22} />
                </span>
                <h3 className="text-card-title font-semibold text-text-main">{item.title}</h3>
                <div className="space-y-3">
                  {item.paragraphs.map((paragraph) => (
                    <p className="text-lg leading-8 text-text-muted" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="space-y-10">
          <SectionHeader description={emblemIntro} title="The master emblem" />
          <div className="space-y-5">
            {emblemSymbols.map((symbol) => (
              <article
                className="grid gap-4 rounded-2xl border border-border bg-surface p-6 shadow-soft sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6"
                key={symbol.title}
              >
                <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <symbol.icon aria-hidden="true" size={22} />
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-text-main">{symbol.title}</h3>
                  {symbol.paragraphs.map((paragraph) => (
                    <p className="text-lg leading-8 text-text-muted" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>
    </main>
  )
}

export default BrandStoryPage
