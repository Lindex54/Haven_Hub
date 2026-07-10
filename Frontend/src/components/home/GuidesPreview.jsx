import Button from '../common/Button'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { guides } from '../../data/guides'

function GuidesPreview() {
  return (
    <PageSection className="bg-soft-background/80">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Guides"
          title="Sample guide profiles ready for verified staff information."
          description="Guide cards currently use placeholder content so the structure can be reviewed before real profiles are supplied."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.id} className="card space-y-4">
              <img
                alt={`${guide.role} placeholder portrait`}
                className="h-52 w-full rounded-[20px] object-cover"
                loading="lazy"
                src={guide.image}
              />
              <div className="space-y-2">
                <h3 className="text-card-title font-semibold text-text-main">{guide.name}</h3>
                <p className="text-sm font-medium text-secondary-dark">{guide.role}</p>
              </div>
              <p className="text-sm leading-7 text-text-muted">{guide.bio}</p>
            </article>
          ))}
        </div>
        <Button to="/about/guides" variant="outline">
          Meet Our Guides
        </Button>
      </div>
    </PageSection>
  )
}

export default GuidesPreview
