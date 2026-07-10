import Button from "../common/Button";
import { mediaAssets } from "../../config/mediaAssets";
import { siteConfig } from "../../config/siteConfig";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-warm-cream">
      <img
        alt={mediaAssets.saltLake.alt}
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        fetchPriority="high"
        src={mediaAssets.saltLake.src}
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_rgba(8,17,14,0.38)_0%,_rgba(8,17,14,0.66)_34%,_rgba(8,17,14,0.8)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.16),_transparent_22%),linear-gradient(90deg,_rgba(15,32,24,0.3)_0%,_rgba(15,32,24,0.08)_45%,_rgba(15,32,24,0.3)_100%)]" />
      <div className="container-custom">
        <div className="flex min-h-[calc(100svh-5.5rem)] items-center justify-center py-12 text-center md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center space-y-8 text-white">
            {/* <span className="inline-flex rounded-full border border-white/16 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/82">
              Independent Lake Katwe Experiences
            </span> */}
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white/60">
                Lake Katwe, Uganda
              </p>
              <h1 className='mx-auto max-w-5xl text-[3rem] leading-[0.96] tracking-[-0.04em] text-white sm:text-[4.5rem] lg:text-[6.4rem] [font-family:Georgia,"Times_New_Roman",serif]'>
                {siteConfig.name}
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-white/82 md:text-xl">
                {siteConfig.tagline}
              </p>
              <p className="mx-auto max-w-2xl text-base leading-8 text-white/66 md:text-lg">
                Guided tours, heritage-focused visits, travel planning and
                accommodation for visitors exploring the Lake Katwe area.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="min-w-44 justify-center" to="/plan-your-visit">
                Plan Your Visit
              </Button>
              <Button
                className="min-w-44 justify-center border-white/25 bg-white/8 text-white hover:border-white/40 hover:bg-white/14 hover:text-white"
                to="/discover"
                variant="outline"
              >
                Discover Lake Katwe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
