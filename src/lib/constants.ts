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
  },
  {
    id: "professional-shooting",
    title: "Professional Shooting",
    shortDescription:
      "High-quality photo and video shoots tailored to your brand.",
    fullDescription:
      "Our team provides high-quality photo and video shoots tailored to your brand. Whether it's lifestyle, corporate, fashion, or hospitality, we capture visuals that tell your story with clarity and creativity.",
    icon: Camera,
  },
  {
    id: "editing",
    title: "Editing",
    shortDescription:
      "Compelling visual stories from raw footage with cinematic quality.",
    fullDescription:
      "We transform raw footage into compelling visual stories. Our editing services include reel editing, promotional videos, cinematic cuts, transitions, color grading, and sound design — ensuring your content stands out in the digital space.",
    icon: Film,
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortDescription:
      "End-to-end social presence management for brand growth.",
    fullDescription:
      "We manage your social presence end-to-end — from content planning and posting to engagement and analytics. Our goal is to grow your brand online, increase reach, and build a loyal community around your business.",
    icon: Share2,
  },
  {
    id: "paid-ads",
    title: "Paid Ads (Performance Marketing)",
    shortDescription:
      "Targeted ad campaigns that generate leads and boost ROI.",
    fullDescription:
      "We run targeted ad campaigns on platforms like Instagram and Facebook to generate leads, increase sales, and boost brand awareness. Our ad strategies focus on ROI-driven results with continuous optimization and performance tracking.",
    icon: Target,
  },
  {
    id: "product-shoots",
    title: "Product Shoots",
    shortDescription:
      "Aesthetic, conversion-focused product photography and videography.",
    fullDescription:
      "We specialize in aesthetic and conversion-focused product photography and videography. Whether for e-commerce, social media, or advertisements, we create visuals that highlight product details and enhance buying appeal.",
    icon: Box,
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
    role: "Co-Founder",
    image: "/assets/placeholder-team-1.svg",
  },
  {
    name: "Team Member",
    role: "Co-Founder",
    image: "/assets/placeholder-team-2.svg",
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

// Portfolio items (placeholder)
export interface PortfolioItem {
  id: number;
  title: string;
  category: "Reels" | "Shoots" | "Ads" | "Editing";
  image: string;
}

/* PLACEHOLDER: Replace with actual portfolio items */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: "Client Project — Reels", category: "Reels", image: "/assets/placeholder-reel-1.svg" },
  { id: 2, title: "Client Project — Shoots", category: "Shoots", image: "/assets/placeholder-reel-2.svg" },
  { id: 3, title: "Client Project — Ads", category: "Ads", image: "/assets/placeholder-reel-3.svg" },
  { id: 4, title: "Client Project — Editing", category: "Editing", image: "/assets/placeholder-reel-4.svg" },
  { id: 5, title: "Client Project — Reels", category: "Reels", image: "/assets/placeholder-reel-5.svg" },
  { id: 6, title: "Client Project — Shoots", category: "Shoots", image: "/assets/placeholder-reel-6.svg" },
  { id: 7, title: "Client Project — Ads", category: "Ads", image: "/assets/placeholder-reel-1.svg" },
  { id: 8, title: "Client Project — Editing", category: "Editing", image: "/assets/placeholder-reel-2.svg" },
  { id: 9, title: "Client Project — Reels", category: "Reels", image: "/assets/placeholder-reel-3.svg" },
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
