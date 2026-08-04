import { useEffect, useState } from "react";
import Button from "../common/Button";
import { siteConfig } from "../../config/siteConfig";
import saltPansImage from "../../assets/images/hero/lake-katwe-salt-pans.jpg";
import craterImage from "../../assets/images/hero/lake-katwe-crater.jpg";
import natureImage from "../../assets/images/hero/lake-katwe-nature.jpeg";
import landscapeImage from "../../assets/images/hero/lake-katwe-landscape.jpeg";

const heroImages = [
  saltPansImage,
  craterImage,
  natureImage,
  landscapeImage,
];

function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return undefined;

    let intervalId;

    const startSlideshow = () => {
      window.clearInterval(intervalId);
      intervalId = window.setInterval(() => {
        setActiveImage((current) => (current + 1) % heroImages.length);
      }, 6000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.clearInterval(intervalId);
      } else {
        startSlideshow();
      }
    };

    startSlideshow();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-warm-cream">
      <div className="absolute inset-0 -z-30 bg-[#16231d]" aria-hidden="true">
        {heroImages.map((image, index) => (
          <img
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1800ms] ease-in-out motion-reduce:transition-none ${
              index === activeImage
                ? "scale-100 opacity-100"
                : "scale-[1.035] opacity-0"
            }`}
            fetchPriority={index === 0 ? "high" : "auto"}
            key={image}
            src={image}
          />
        ))}
      </div>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_rgba(8,17,14,0.24)_0%,_rgba(8,17,14,0.46)_34%,_rgba(8,17,14,0.62)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.16),_transparent_22%),linear-gradient(90deg,_rgba(15,32,24,0.18)_0%,_rgba(15,32,24,0.04)_45%,_rgba(15,32,24,0.18)_100%)]" />
      <div className="container-custom">
        <div className="flex min-h-[calc(100svh-5.5rem)] items-center justify-center py-12 text-center md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center space-y-8 text-white">
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
              {/* <p className="mx-auto max-w-2xl text-base leading-8 text-white/66 md:text-lg">
                Guided tours, heritage-focused visits, travel planning and
                accommodation for visitors exploring the Lake Katwe area.
              </p> */}
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
