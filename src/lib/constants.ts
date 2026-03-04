import {
  Palette,
  Camera,
  Film,
  Share2,
  Target,
  Box,
  type LucideIcon,
} from "lucide-react";

// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

// Services data
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "content-creation",
    title: "Content Creation",
    shortDescription:
      "Strategic, trend-driven content that connects with your audience.",
    fullDescription:
      "We create strategic, trend-driven, and brand-focused content that connects with your target audience. From Instagram reels to promotional creatives, we design content that builds visibility and engagement while keeping your brand identity strong and consistent.",
    icon: Palette,
    image: "/assets/Content Creation.png",
  },
  {
    id: "professional-shooting",
    title: "Professional Shooting",
    shortDescription:
      "High-quality photo and video shoots tailored to your brand.",
    fullDescription:
      "Our team provides high-quality photo and video shoots tailored to your brand. Whether it's lifestyle, corporate, fashion, or hospitality, we capture visuals that tell your story with clarity and creativity.",
    icon: Camera,
    image: "/assets/Professional Shooting.png",
  },
  {
    id: "editing",
    title: "Editing",
    shortDescription:
      "Compelling visual stories from raw footage with cinematic quality.",
    fullDescription:
      "We transform raw footage into compelling visual stories. Our editing services include reel editing, promotional videos, cinematic cuts, transitions, color grading, and sound design — ensuring your content stands out in the digital space.",
    icon: Film,
    image: "/assets/Editing.png",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortDescription:
      "End-to-end social presence management for brand growth.",
    fullDescription:
      "We manage your social presence end-to-end — from content planning and posting to engagement and analytics. Our goal is to grow your brand online, increase reach, and build a loyal community around your business.",
    icon: Share2,
    image: "/assets/Social Media Management.png",
  },
  {
    id: "paid-ads",
    title: "Paid Ads (Performance Marketing)",
    shortDescription:
      "Targeted ad campaigns that generate leads and boost ROI.",
    fullDescription:
      "We run targeted ad campaigns on platforms like Instagram and Facebook to generate leads, increase sales, and boost brand awareness. Our ad strategies focus on ROI-driven results with continuous optimization and performance tracking.",
    icon: Target,
    image: "/assets/Paid Ads (Performance Marketing).png",
  },
  {
    id: "product-shoots",
    title: "Product Shoots",
    shortDescription:
      "Aesthetic, conversion-focused product photography and videography.",
    fullDescription:
      "We specialize in aesthetic and conversion-focused product photography and videography. Whether for e-commerce, social media, or advertisements, we create visuals that highlight product details and enhance buying appeal.",
    icon: Box,
    image: "/assets/Product Shoots.png",
  },
];

// Team data
export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Team Member",
    role: "Founder",
    image: "/assets/placeholder-team-1.jpeg",
  },
  {
    name: "Team Member",
    role: "Co-Founder",
    image: "/assets/placeholder-team-2.jpeg",
  },
];

// Stats
export const STATS = [
  { value: "50+", label: "Clients" },
  { value: "100+", label: "Projects" },
  { value: "2x", label: "Avg Growth" },
];

// Testimonials (placeholder)
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

/* PLACEHOLDER: Replace with actual client testimonials */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Client Name",
    role: "Brand Owner",
    quote:
      "Media Maestro Co completely transformed our social media presence. Our engagement grew 3x within the first month!",
  },
  {
    name: "Client Name",
    role: "E-commerce Founder",
    quote:
      "The product shoots were stunning. We saw a noticeable increase in conversions after updating our visuals.",
  },
  {
    name: "Client Name",
    role: "Restaurant Owner",
    quote:
      "Their content strategy and ad campaigns brought in real customers. Highly recommend their team!",
  },
];

// Gallery items
export interface GalleryItem {
  id: number;
  src: string;
  type: "image" | "video";
  orientation: "portrait" | "landscape";
  title: string;
  /** CSS grid column span (desktop) */
  colSpan: 1 | 2;
  /** CSS grid row span (desktop) */
  rowSpan: 1 | 2;
  /** Optional: override object-fit for special items like circular logos */
  objectFit?: "contain" | "cover";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1 — Hero: Aroma Candles product shoot result (main image, prominent)
  {
    id: 1,
    src: "/assets/gallary/main-8.png",
    type: "image",
    orientation: "portrait",
    title: "Aroma Candles — Product Shoot",
    colSpan: 1,
    rowSpan: 2,
  },
  // 2 — Landscape shoot
  {
    id: 2,
    src: "/assets/gallary/3.png",
    type: "image",
    orientation: "landscape",
    title: "Brand Campaign — Landscape",
    colSpan: 2,
    rowSpan: 1,
  },
  // 3 — Portrait creative
  {
    id: 3,
    src: "/assets/gallary/1.png",
    type: "image",
    orientation: "portrait",
    title: "Creative Portrait",
    colSpan: 1,
    rowSpan: 1,
  },
  // 4 — Aroma Candles video
  {
    id: 4,
    src: "/assets/gallary/aroma-candles.mp4",
    type: "video",
    orientation: "portrait",
    title: "Aroma Candles — Behind the Lens",
    colSpan: 1,
    rowSpan: 2,
  },
  // 5 — Landscape shoot
  {
    id: 5,
    src: "/assets/gallary/4.png",
    type: "image",
    orientation: "landscape",
    title: "Brand Shoot — Wide",
    colSpan: 2,
    rowSpan: 1,
  },
  // 6 — Portrait
  {
    id: 6,
    src: "/assets/gallary/2.png",
    type: "image",
    orientation: "portrait",
    title: "Portrait Session",
    colSpan: 1,
    rowSpan: 1,
  },
  // 7 — SEUR: Shoot, Edit, Upload, Repeat — BTS team efforts
  {
    id: 7,
    src: "/assets/gallary/SEUR.mp4",
    type: "video",
    orientation: "portrait",
    title: "SEUR — Shoot, Edit, Upload, Repeat",
    colSpan: 1,
    rowSpan: 2,
  },
  // 7b — Instagram circular logo (fills gap beside SEUR, above main-8)
  {
    id: 13,
    src: "/assets/gallary/9.png",
    type: "image",
    orientation: "landscape",
    title: "Media Maestro Co",
    colSpan: 1,
    rowSpan: 1,
    objectFit: "contain",
  },
  // 8 — Landscape
  {
    id: 8,
    src: "/assets/gallary/5.png",
    type: "image",
    orientation: "landscape",
    title: "Campaign Visuals",
    colSpan: 2,
    rowSpan: 1,
  },
  // 9 — Portrait
  {
    id: 9,
    src: "/assets/gallary/6.png",
    type: "image",
    orientation: "portrait",
    title: "Visual Story",
    colSpan: 1,
    rowSpan: 1,
  },
  // 10 — Mithala Art video
  {
    id: 10,
    src: "/assets/gallary/mithala-art.mp4",
    type: "video",
    orientation: "portrait",
    title: "Mithala Art — Process Film",
    colSpan: 1,
    rowSpan: 2,
  },
  // 11 — Portrait
  {
    id: 11,
    src: "/assets/gallary/7.png",
    type: "image",
    orientation: "portrait",
    title: "Creative Concept",
    colSpan: 1,
    rowSpan: 1,
  },
  // 12 — Product Shoots
  {
    id: 12,
    src: "/assets/gallary/product-shoots-1.png",
    type: "image",
    orientation: "portrait",
    title: "Product Photography",
    colSpan: 1,
    rowSpan: 1,
  },
];

// Marquee items
export const MARQUEE_ITEMS = [
  "Content Creation",
  "Professional Shoots",
  "Social Media Management",
  "Paid Ads",
  "Video Editing",
  "Product Shoots",
];

// Contact info
export const CONTACT_INFO = {
  email: "mediamaestroco01@gmail.com",
  instagram: "@mediamaestroco",
  instagramUrl: "https://instagram.com/mediamaestroco",
  city: "India",
};

// Service options for contact form dropdown
export const SERVICE_OPTIONS = [
  "Social Media Management",
  "Content Creation",
  "Professional Shooting",
  "Video Editing",
  "Paid Ads (Performance Marketing)",
  "Product Shoots",
  "Other",
] as const;
