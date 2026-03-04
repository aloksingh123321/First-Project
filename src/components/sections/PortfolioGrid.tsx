"use client";

import Image from "next/image";
import FadeInView from "@/components/animations/FadeInView";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { GALLERY_ITEMS } from "@/lib/constants";

export default function PortfolioGrid() {
  // Show first 6 items on homepage as a teaser
  const previewItems = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary rounded-full blur-[150px] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Work"
          subtitle="A glimpse into our recent projects."
        />

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl glass-card cursor-pointer transition-all duration-300 hover:border-primary/20 hover:shadow-glow ${
                item.colSpan === 2 ? "sm:col-span-2" : ""
              } ${item.rowSpan === 2 ? "row-span-2" : ""}`}
            >
              {/* Media */}
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="text-text-primary font-display font-bold text-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <FadeInView delay={0.3} className="text-center mt-10">
          <Button href="/portfolio" variant="outline">
            View All Projects
          </Button>
        </FadeInView>
      </div>
    </section>
  );
}
