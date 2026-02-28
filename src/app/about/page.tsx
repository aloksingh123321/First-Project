import type { Metadata } from "next";
import { Lightbulb, Compass, BarChart3 } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import SectionHeading from "@/components/ui/SectionHeading";
import { TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Media Maestro Co",
  description:
    "Learn about Media Maestro Co — founded in March 2025 with a vision to help brands build a powerful online presence.",
};

const VALUES = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We bring fresh, original ideas to every project — no cookie-cutter solutions.",
  },
  {
    icon: Compass,
    title: "Strategy",
    description: "Every piece of content is backed by data-driven strategy and market insight.",
  },
  {
    icon: BarChart3,
    title: "Results",
    description: "We measure success by real outcomes — growth, leads, and conversions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-surface-dark grain-overlay">
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-primary rounded-full blur-[120px] opacity-[0.06] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary-light border border-primary/20 rounded-full bg-primary/5 mb-6">
              About Us
            </span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="font-display font-bold text-text-primary mb-4">
              Our <span className="text-gradient">Story</span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Where your brand gets the spotlight it deserves.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInView>
            <div className="space-y-6">
              <h2 className="font-display font-bold text-text-primary">Who We Are</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Founded in March 2025, Media Maestro was created with a vision
                to help brands build a powerful and impactful online presence. In
                today&apos;s digital world, visibility is everything — and we make
                sure your brand stands out.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                At Media Maestro Co, we specialize in helping businesses grow by
                connecting them with the right audience. From building strong
                social media presence to creating engaging digital content, we
                help brands reach more customers, increase engagement, and drive
                real results.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                We believe every brand has a story worth telling — and we are
                here to amplify yours across the digital world.
              </p>
              <p className="text-primary font-display font-bold text-xl mt-8">
                Media Maestro Co – Where Your Brand Gets the Spotlight.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-surface-dark grain-overlay relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary rounded-full blur-[120px] opacity-[0.04] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The creative minds behind Media Maestro Co."
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-8">
            {TEAM.map((member, i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-glow">
                  <div className="aspect-square bg-gradient-to-br from-primary/15 via-surface-card to-surface-dark flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-primary-light">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-display font-bold text-text-primary text-lg">
                      {member.name}
                    </h3>
                    <p className="text-primary-light text-sm mt-1">{member.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value) => (
              <StaggerItem key={value.title}>
                <div className="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-glow">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
