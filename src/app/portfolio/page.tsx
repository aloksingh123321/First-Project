"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

const CATEGORIES = ["All", "Reels", "Shoots", "Ads", "Editing"] as const;
type Category = (typeof CATEGORIES)[number];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredItems =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-surface-dark grain-overlay">
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary rounded-full blur-[120px] opacity-[0.06] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary-light border border-primary/20 rounded-full bg-primary/5 mb-6">
              Our Work
            </span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="font-display font-bold text-text-primary mb-4">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              A showcase of our recent projects across content creation,
              photography, video editing, and digital advertising.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Portfolio Grid with Filters */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <FadeInView className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-primary text-white shadow-glow"
                    : "bg-surface-card text-text-muted border border-white/10 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeInView>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredItems.map((item, i) => (
              <div
                key={item.id}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer glass-card transition-all duration-300 hover:border-primary/20 hover:shadow-glow"
              >
                {/* PLACEHOLDER: Replace with actual portfolio image */}
                <div
                  className={`w-full bg-gradient-to-br from-primary/10 via-surface-card to-surface-dark flex items-center justify-center ${
                    i % 3 === 0
                      ? "aspect-[3/4]"
                      : i % 3 === 1
                      ? "aspect-square"
                      : "aspect-[4/5]"
                  }`}
                >
                  <ImageIcon className="text-primary-light opacity-20 w-10 h-10" />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary/20 text-primary-light rounded-full w-fit border border-primary/30">
                    {item.category}
                  </span>
                  <h3 className="text-text-primary font-display font-bold text-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
