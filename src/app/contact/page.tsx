import type { Metadata } from "next";
import { Mail, Instagram, MapPin } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import ContactForm from "@/components/sections/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Media Maestro Co",
  description:
    "Get a free quote from Media Maestro Co. Let's discuss how we can help your brand grow online.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-surface-dark grain-overlay">
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-primary rounded-full blur-[120px] opacity-[0.06] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary-light border border-primary/20 rounded-full bg-primary/5 mb-6">
              Get In Touch
            </span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="font-display font-bold text-text-primary mb-4">
              Get A <span className="text-gradient">Free Quote</span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Ready to take your brand to the next level? Fill out the form
              below and we&apos;ll get back to you shortly.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar */}
            <FadeInView direction="left" className="lg:col-span-1">
              <div className="sticky top-28">
                <h2 className="font-display font-bold text-text-primary text-xl mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">Email</p>
                      <p className="text-sm text-text-primary font-medium">{CONTACT_INFO.email}</p>
                    </div>
                  </a>
                  <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Instagram className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">Instagram</p>
                      <p className="text-sm text-text-primary font-medium">{CONTACT_INFO.instagram}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">Location</p>
                      <p className="text-sm text-text-primary font-medium">{CONTACT_INFO.city}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 p-6 rounded-2xl glass-card">
                  <p className="text-sm text-text-muted leading-relaxed">
                    Prefer a quick chat? DM us on Instagram and we&apos;ll respond within 24 hours.
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Form */}
            <FadeInView direction="right" delay={0.1} className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-6 md:p-10">
                <ContactForm />
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </>
  );
}
