import Hero from "../components/sections/Hero";
import ServicesOverview from "../components/sections/ServicesOverview";
import PortfolioGrid from "../components/sections/PortfolioGrid";
import FadeInView from "../components/animations/FadeInView";
import Button from "../components/ui/Button";
import AnimatedGrid from "../components/ui/AnimatedGrid";
import AmbientSpotlight from "../components/ui/AmbientSpotlight";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <PortfolioGrid />

      {/* Contact CTA Section */}
      <section className="py-20 md:py-28 bg-surface grain-overlay relative overflow-hidden">
        {/* SVG animated thread grid background */}
        <AnimatedGrid />

        {/* Ambient purple orb (static) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />

        {/* Mouse-follow spotlight — wraps the entire section so onMouseMove fires */}
        <div className="absolute inset-0 pointer-events-auto z-0">
          <AmbientSpotlight />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="font-display font-bold text-text-primary mb-4">
              Ready to <span className="text-gradient">Grow Your Brand?</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.1}>
            <p className="text-text-muted text-lg mb-8">
              Let&apos;s discuss how we can help your business stand out in
              the digital world.
            </p>
          </FadeInView>
          <FadeInView delay={0.2}>
            <Button href="/contact" size="lg">
              Get A Free Quote
            </Button>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
