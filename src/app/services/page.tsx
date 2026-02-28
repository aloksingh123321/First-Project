import type { Metadata } from "next";
import FadeInView from "@/components/animations/FadeInView";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services | Media Maestro Co",
  description:
    "Explore our full range of digital marketing services — content creation, professional shooting, editing, social media management, paid ads, and product shoots.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-surface-dark grain-overlay">
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-primary rounded-full blur-[120px] opacity-[0.06] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary-light border border-primary/20 rounded-full bg-primary/5 mb-6">
              What We Do
            </span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="font-display font-bold text-text-primary mb-4">
              Our <span className="text-gradient">Services</span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              At Media Maestro Co., we turn ideas into impactful digital
              experiences. From content creation to performance-driven ads, we
              help brands grow, engage, and convert.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Service Sections — alternating layout */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;

            return (
              <FadeInView key={service.id} direction={isEven ? "left" : "right"}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  {/* Text */}
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-text-primary text-2xl md:text-3xl mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed text-base">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Placeholder visual */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    {/* PLACEHOLDER: Replace with actual service image */}
                    <div className="aspect-[4/3] rounded-2xl glass-card flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                        <span className="text-text-muted/40 text-sm">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </section>
    </>
  );
}
