import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { usePageMeta } from '../../utils/pageMeta'

function StayInformationPage() {
  usePageMeta('Stay Information')

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Stay', path: '/stay' },
          { label: 'Stay Information' },
        ]}
        description="Accommodation is offered as part of the wider visitor experience, with arrangements confirmed after inquiry review."
        eyebrow="Stay"
        title="Stay Information"
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            'Request accommodation, check availability and combine your stay with tours or tailored planning support.',
            'This frontend does not yet confirm reservations or payments automatically. Final arrangements are handled after follow-up.',
          ].map((paragraph) => (
            <article key={paragraph} className="card">
              <p className="muted-text">{paragraph}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button to="/plan-your-visit">Request accommodation</Button>
        </div>
      </PageSection>
    </main>
  )
}

export default StayInformationPage
