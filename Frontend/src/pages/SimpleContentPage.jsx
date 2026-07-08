import EmptyState from '../components/common/EmptyState'
import PageHero from '../components/common/PageHero'
import PageSection from '../components/common/PageSection'

function SimpleContentPage({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <PageSection>
        {children ?? (
          <EmptyState
            title={title}
            description={description}
            actionLabel="Back to Home"
            actionTo="/"
          />
        )}
      </PageSection>
    </>
  )
}

export default SimpleContentPage
