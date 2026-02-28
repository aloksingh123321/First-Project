"use client";

import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface-dark grain-overlay relative overflow-hidden">
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-primary rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:border-primary/20">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-display font-bold text-text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-primary-light text-xs mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
