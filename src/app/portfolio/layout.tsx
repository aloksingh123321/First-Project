import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Media Maestro Co",
  description:
    "Explore our full portfolio — content creation, professional shoots, video editing, and digital campaigns brought to life by Media Maestro Co.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
