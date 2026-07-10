import Button from '../../components/common/Button'
import PageHero from '../../components/common/PageHero'
import PageSection from '../../components/common/PageSection'
import { usePageMeta } from '../../utils/pageMeta'

function NotFoundPage() {
  usePageMeta('Page Not Found')

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Not Found' }]}
        description="The page you requested could not be found."
        eyebrow="404"
        title="Page not found"
      />
      <PageSection>
        <div className="card max-w-2xl space-y-5">
          <p className="muted-text">
            Try returning to the homepage or continue exploring the destination through the main navigation.
          </p>
          <Button to="/">Go Home</Button>
        </div>
      </PageSection>
    </main>
  )
}

export default NotFoundPage
