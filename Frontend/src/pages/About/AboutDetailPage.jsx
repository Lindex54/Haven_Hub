import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { faqs } from '../../data/faqs'
import { guides } from '../../data/guides'
import { usePageMeta } from '../../utils/pageMeta'

const aboutContent = {
  story: {
    title: 'Our Story',
    description:
      'Helping travellers experience the character, landscapes and everyday rhythm of Lake Katwe.',
    body: [
      'Wispers of Lake Katwe was created for travellers who want to go beyond a quick stop and spend time getting to know this remarkable place.',
      'From a guided outing to a place to rest, we help shape simple, well-paced visits around what matters to you.',
    ],
  },
  guides: {
    title: 'Our Guides',
    description:
      'Friendly local guidance for a visit that feels easy, informed and personal.',
  },
  'community-commitment': {
    title: 'Community Commitment',
    description:
      'Travel with care, curiosity and respect for the people who call Lake Katwe home.',
    body: [
      'The best visits start with listening. We encourage guests to arrive with an open mind, follow local guidance and take time to understand the place they are visiting.',
      'Small gestures matter: ask before taking photographs, be mindful of people’s time and let every encounter happen at a comfortable pace.',
    ],
  },
  'responsible-tourism': {
    title: 'Responsible Tourism',
    description:
      'Leave a lighter footprint and take home a deeper connection to Lake Katwe.',
    body: [
      'We ask visitors to follow their guide, respect the landscape and keep the places they enjoy clean for those who come after them.',
      'Plans may shift with weather, seasons and local life. That flexibility is part of travelling well here.',
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions',
    description:
      'Answers to common questions about planning, accommodation and guided travel.',
  },
}

function AboutDetailPage({ slug }) {
  const content = aboutContent[slug]
  usePageMeta(content.title)

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: content.title },
        ]}
        description={content.description}
        eyebrow="About"
        title={content.title}
      />
      <PageSection>
        {slug === 'guides' ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.id} className="card space-y-4">
                <img
                  alt={`${guide.role} placeholder portrait`}
                  className="h-52 w-full rounded-[20px] object-cover"
                  loading="lazy"
                  src={guide.image}
                />
                <div>
                  <h2 className="text-card-title font-semibold text-text-main">{guide.name}</h2>
                  <p className="mt-1 text-sm font-medium text-secondary-dark">{guide.role}</p>
                </div>
                <p className="text-sm leading-7 text-text-muted">{guide.bio}</p>
                <p className="text-sm text-text-muted">Languages: {guide.languages.join(', ')}</p>
              </article>
            ))}
          </div>
        ) : slug === 'faqs' ? (
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="card">
                <h2 className="text-card-title font-semibold text-text-main">{faq.question}</h2>
                <p className="mt-4 muted-text">{faq.answer}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {content.body.map((paragraph) => (
              <article key={paragraph} className="card">
                <p className="muted-text">{paragraph}</p>
              </article>
            ))}
          </div>
        )}
      </PageSection>
    </main>
  )
}

export default AboutDetailPage
