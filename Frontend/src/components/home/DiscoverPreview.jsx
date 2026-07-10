import Button from '../common/Button'
import PageSection from '../common/PageSection'
import SectionHeader from '../common/SectionHeader'
import { mediaAssets } from '../../config/mediaAssets'
import { discoverHighlights } from '../../data/discover'

const previewImages = [
  mediaAssets.craterLake,
  mediaAssets.saltLake,
  mediaAssets.kob,
  mediaAssets.hippos,
  mediaAssets.flamingos,
  mediaAssets.treeLion,
]

function DiscoverPreview() {
  return (
    <PageSection>
      <div className="space-y-10">
        <SectionHeader
          align="center"
          title="A landscape shaped by salt, water and generations."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {discoverHighlights.map((item, index) => (
            <article key={item.path} className="overflow-hidden rounded-[28px] border border-border bg-surface shadow-card">
              <img
                alt={previewImages[index]?.alt ?? item.title}
                className="h-52 w-full object-cover"
                loading="lazy"
                src={previewImages[index]?.src}
              />
              <div className="space-y-4 p-6">
              <h3 className="text-card-title font-semibold text-text-main">{item.title}</h3>
              <p className="text-sm leading-7 text-text-muted">{item.description}</p>
              <Button to={item.path} variant="outline">
                Learn more
              </Button>
              </div>
            </article>
          ))}
        </div>
        <Button to="/discover" variant="secondary">
          Discover Lake Katwe
        </Button>
      </div>
    </PageSection>
  )
}

export default DiscoverPreview
