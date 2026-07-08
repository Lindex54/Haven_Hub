import EmptyState from '../components/common/EmptyState'
import PageHero from '../components/common/PageHero'
import PageSection from '../components/common/PageSection'

function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found"
        description="The page you are looking for does not exist or may have moved."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Not Found' },
        ]}
      />
      <PageSection>
        <EmptyState
          title="We couldn't find that page"
          description="Try heading back to the homepage or choosing another section from the StayNest navigation."
          actionLabel="Back to Home"
          actionTo="/"
        />
      </PageSection>
    </>
  )
}

export default NotFoundPage
