import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { faqs } from '../../data/faqs'
import { guides } from '../../data/guides'
import { usePageMeta } from '../../utils/pageMeta'

const aboutContent = {
  story: {
    title: 'Our Story',
    description:
      'The current direction focuses on helping visitors explore Lake Katwe through tours, planning and accommodation rather than positioning the website as a hotel-only product.',
    body: [
      'The business is framed as an independent local operator offering travel support around Lake Katwe.',
      'The site structure is built to grow as verified photography, guide profiles and travel information become available.',
    ],
  },
  guides: {
    title: 'Our Guides',
    description:
      'Sample guide information is shown below and should be replaced with verified staff details before launch.',
  },
  'community-commitment': {
    title: 'Community Commitment',
    description:
      'This page uses careful language focused on respectful visitor practice rather than unsupported claims about community impact.',
    body: [
      'We encourage respectful timing, guided introductions and visitor etiquette during community-oriented visits.',
      'Any future claims about partnerships or measurable community benefits should be added only after verification.',
    ],
  },
  'responsible-tourism': {
    title: 'Responsible Tourism',
    description:
      'Responsible tourism here means practical preparation, respectful behaviour and realistic expectations.',
    body: [
      'Visitors are encouraged to follow guide advice, ask before photographing people closely and plan with flexibility around conditions.',
      'The site avoids claims about guaranteed sightings, official certification or public authority roles.',
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
