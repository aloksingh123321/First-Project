"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import FadeInView from "@/components/animations/FadeInView";
import { GALLERY_ITEMS, type GalleryItem } from "@/lib/constants";

/** Renders the hover preview via React portal so it is always
 *  centered in the viewport regardless of scroll or CSS transforms. */
function PreviewPortal({ item }: { item: GalleryItem }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.75)",
        pointerEvents: "none",
        animation: "portfolioFadeIn 0.2s ease-out",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "80vw",
          maxHeight: "80vh",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.1)",
          animation: "portfolioScaleIn 0.25s ease-out",
        }}
      >
        <Image
          src={item.src}
          alt={item.title}
          width={item.orientation === "landscape" ? 1536 : 1024}
          height={item.orientation === "landscape" ? 1024 : 1536}
          className="block w-auto h-auto"
          style={{
            maxWidth: "80vw",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
          priority
        />
        {/* Title bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
            padding: "1.5rem",
          }}
        >
          <h3 className="text-white font-display font-bold text-lg">
            {item.title}
          </h3>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function PortfolioPage() {
  const [hoveredItem, setHoveredItem] = useState<GalleryItem | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((item: GalleryItem) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(item);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setHoveredItem(null), 150);
  }, []);

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
              photography, video production, and digital advertising.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Full Masonry Gallery */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
            {GALLERY_ITEMS.map((item) => {
              const isCircularLogo = item.objectFit === "contain";

              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-xl glass-card cursor-pointer transition-all duration-300 hover:border-primary/20 hover:shadow-glow ${
                    item.colSpan === 2 ? "sm:col-span-2" : ""
                  } ${item.rowSpan === 2 ? "row-span-2" : ""}`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
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
                  ) : isCircularLogo ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-surface-card">
                      <div className="relative w-[70%] aspect-square rounded-full overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="object-contain"
                          sizes="200px"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <h3 className="text-text-primary font-display font-bold text-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hover Preview — rendered via portal on document.body */}
      {hoveredItem && hoveredItem.type === "image" && (
        <PreviewPortal item={hoveredItem} />
      )}

      {/* Global animation keyframes */}
      <style jsx global>{`
        @keyframes portfolioFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes portfolioScaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}

