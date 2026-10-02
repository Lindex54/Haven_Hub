import { Check, Compass, Eye, Feather, Heart, Home, Leaf, Shield, Sparkles, Target, Users } from 'lucide-react'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import SectionHeader from '../../components/common/SectionHeader'
import Button from '../../components/common/Button'
import { usePageMeta } from '../../utils/pageMeta'

const values = [
  {
    icon: Home,
    title: 'Home',
    description: 'Warmth, hospitality, comfort and belonging.',
  },
  {
    icon: Users,
    title: 'Roots',
    description: 'Family, community, culture, heritage and connection to the land.',
  },
  {
    icon: Compass,
    title: 'Discovery',
    description: 'Adventure, nature, stories and experiences beyond the obvious.',
  },
  {
    icon: Heart,
    title: 'Warmth',
    description: 'Hospitality that feels personal and human.',
  },
  {
    icon: Sparkles,
    title: 'Authenticity',
    description: 'Presenting Lake Katwe as it truly is, not a manufactured tourist version.',
  },
  {
    icon: Shield,
    title: 'Responsibility',
    description: 'Tourism that respects people, culture, environment and the destination.',
  },
]

const emblemStory = [
  {
    title: 'The stylised “W”',
    description: 'A flowing form for Whispers that suggests pathways, landscape and a journey.',
  },
  {
    title: 'The whisper line',
    description: 'A line moving through the mark like wind, water or a story passed from person to person.',
  },
  {
    title: 'The spiral',
    description: 'A story travelling outward and a journey inward — arrive curious, leave carrying a memory.',
  },
  {
    title: 'Roots and land',
    description: 'A grounded base representing family, heritage and belonging to Lake Katwe.',
  },
]

const promises = [
  'You will be welcomed warmly.',
  'You will experience the destination through local eyes.',
  'You will be encouraged to discover beyond the obvious.',
  'You will encounter real stories and real people.',
  'You will be treated as a guest, not simply a customer.',
  'You will leave with a memory of belonging that cannot be packed into a suitcase.',
]

function VisionMissionPage() {
  usePageMeta(
    'Vision & Mission',
    'The vision, mission and story behind Whispers of Lake Katwe — a home-rooted tourism and hospitality brand.',
  )

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Vision & Mission' },
        ]}
        description="Come as a visitor. Leave as family."
        eyebrow="Our Purpose"
        title="Vision & Mission"
      />

      <PageSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card space-y-4">
            <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
              <Eye aria-hidden="true" size={22} />
            </span>
            <h2 className="text-card-title font-semibold text-text-main">Our Vision</h2>
            <p className="text-lg leading-8 text-text-muted">
              To become a gateway to the soul of Lake Katwe, where visitors experience the warmth
              of home, the richness of community and the beauty of our land — and leave carrying
              a story of their own.
            </p>
          </article>
          <article className="card space-y-4">
            <span className="grid size-12 place-items-center rounded-full bg-secondary/15 text-secondary-dark">
              <Target aria-hidden="true" size={22} />
            </span>
            <h2 className="text-card-title font-semibold text-text-main">Our Mission</h2>
            <p className="text-lg leading-8 text-text-muted">
              To welcome travellers into the heart of Lake Katwe through authentic homestead
              hospitality, local experiences, cultural storytelling and responsible tourism —
              creating meaningful connections between visitors, communities and the land we call
              home.
            </p>
          </article>
        </div>
      </PageSection>

      <PageSection className="bg-surface">
        <div className="space-y-10">
          <SectionHeader
            align="center"
            description="Six ideas guide every experience we shape, from a first welcome to the memory a guest carries home."
            eyebrow="Our Values"
            title="What Whispers stands for"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article className="card space-y-3" key={value.title}>
                <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <value.icon aria-hidden="true" size={20} />
                </span>
                <h3 className="text-lg font-semibold text-text-main">{value.title}</h3>
                <p className="text-base leading-7 text-text-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <section className="relative isolate overflow-hidden bg-cream">
        <div className="container-custom section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">
                <Feather aria-hidden="true" size={16} />
                The story behind the name
              </span>
              <h2 className="section-title">Listen to the land</h2>
              <p className="text-lg leading-8 text-text-muted">
                Lake Katwe has stories in its roads, homes, people, food, traditions and
                landscapes. Some are loud and visible; others are subtle — the way neighbours
                interact, the meals shared, the memories carried between generations.
              </p>
              <p className="text-lg leading-8 text-text-muted">
                Whispers of Lake Katwe exists to listen to those stories and share them
                respectfully with people who want to experience the destination more deeply.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {emblemStory.map((item) => (
                <div className="rounded-2xl border border-border bg-surface px-5 py-4 shadow-soft" key={item.title}>
                  <p className="font-semibold text-text-main">{item.title}</p>
                  <p className="mt-2 text-base leading-7 text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageSection>
        <div className="space-y-10">
          <SectionHeader
            description="What every guest can expect when they stay, explore and connect with us."
            eyebrow="Our Promise"
            title="Our promise to guests"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {promises.map((promise) => (
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface px-5 py-4 shadow-soft" key={promise}>
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check aria-hidden="true" size={14} />
                </span>
                <p className="text-base leading-7 text-text-main">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <section className="relative isolate overflow-hidden bg-primary">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(224,193,90,0.18),transparent_35%)]" />
        <div className="container-custom section-padding text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex items-center justify-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-secondary-light">
              <Leaf aria-hidden="true" size={14} />
              <span>Home &bull; Roots &bull; Discovery</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-text-white sm:text-4xl">
              Come as a visitor. Leave as family.
            </h2>
            <p className="text-base leading-7 text-white/80 sm:text-lg">
              Whispers of Lake Katwe exists to open a door between the traveller and the place
              behind the destination — where the homestead is the beginning, the experiences are
              the journey, and the stories are the memory.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button to="/plan-your-visit" variant="secondary">
                Plan Your Visit
              </Button>
              <Button to="/about/story" variant="outline" className="!bg-transparent !text-text-white hover:!bg-white/10">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default VisionMissionPage
