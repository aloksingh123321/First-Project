import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/assets/logo2.png"
              alt="Media Maestro Co"
              width={160}
              height={28}
              className="mb-4 brightness-110"
            />
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Where Your Brand Gets the Spotlight. Helping businesses grow
              through strategic digital marketing and content creation.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface-card border border-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-10 h-10 rounded-full bg-surface-card border border-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-display font-bold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-primary font-display font-bold text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-text-muted hover:text-text-primary text-sm transition-colors duration-200"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary text-sm transition-colors duration-200"
                >
                  {CONTACT_INFO.instagram}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-text-muted text-sm">
                  {CONTACT_INFO.city}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted/50 text-xs">
            &copy; 2025 Media Maestro Co. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link
              href="/privacy-policy"
              className="text-text-muted/50 hover:text-text-muted transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link
              href="/terms-and-conditions"
              className="text-text-muted/50 hover:text-text-muted transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
