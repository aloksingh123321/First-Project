"use client";

import { ImageIcon } from "lucide-react";
import type { PortfolioItem } from "@/lib/constants";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
      {/* PLACEHOLDER: Replace with actual portfolio image */}
      <div className="w-full aspect-[4/5] bg-gradient-to-br from-primary-dark to-surface-card flex items-center justify-center">
        <ImageIcon className="text-primary-light opacity-40 w-12 h-12" />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary/20 text-primary-light rounded-full w-fit border border-primary/30">
          {item.category}
        </span>
        <h3 className="text-white font-display font-bold text-sm">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
