import type { Metadata } from "next";
import FadeInView from "@/components/animations/FadeInView";

export const metadata: Metadata = {
  title: "Terms & Conditions | Media Maestro Co",
  description:
    "Terms & Conditions for Media Maestro Co — governing the use of our digital marketing services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-surface-dark grain-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <h1 className="font-display font-bold text-text-primary mb-4">Terms &amp; Conditions</h1>
          </FadeInView>
          <FadeInView delay={0.1}>
            <p className="text-text-muted">Last updated: March 2025</p>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInView>
            <div className="prose-legal">
              <h2>1. Introduction</h2>
              <p>Welcome to Media Maestro. By accessing or using our services, you agree to comply with and be bound by the following Terms &amp; Conditions.</p>
              <h2>2. Services Offered</h2>
              <p>Media Maestro provides digital marketing services including but not limited to:</p>
              <ul>
                <li>Social Media Management</li>
                <li>Content Creation &amp; Strategy</li>
                <li>Paid Advertising Campaigns</li>
                <li>Branding &amp; Creative Design</li>
                <li>Influencer &amp; Campaign Marketing</li>
                <li>Website &amp; Digital Consultation</li>
              </ul>
              <h2>3. Client Responsibilities</h2>
              <ul>
                <li>Provide accurate and timely information</li>
                <li>Share required brand assets</li>
                <li>Approve content within agreed timelines</li>
                <li>Make payments as per agreed schedule</li>
              </ul>
              <h2>4. Payment &amp; Billing</h2>
              <ul>
                <li>Payments must be made as per the proposal or invoice shared.</li>
                <li>Projects may require advance payment before commencement.</li>
                <li>Late payments may lead to temporary suspension of services.</li>
              </ul>
              <h2>5. Refund Policy</h2>
              <ul>
                <li>Advance payments for retainers are non-refundable once work has commenced.</li>
                <li>Refunds (if approved) will be processed within 3–4 business days.</li>
                <li>No refunds will be issued for completed milestones or delivered work.</li>
              </ul>
              <h2>6. Intellectual Property</h2>
              <ul>
                <li>Clients retain ownership of their brand assets.</li>
                <li>Creative work becomes the client&apos;s property only after full payment.</li>
                <li>Media Maestro reserves the right to showcase completed work in its portfolio.</li>
              </ul>
              <h2>7. Confidentiality</h2>
              <p>Both parties agree to maintain confidentiality regarding proprietary information, strategies, financial data, and brand-sensitive materials.</p>
              <h2>8. Termination of Services</h2>
              <p>Either party may terminate the agreement by providing 15–30 days written notice via email.</p>
              <h2>9. Disclaimer of Warranties</h2>
              <p>While Media Maestro strives to achieve optimal results, we do not guarantee specific sales, leads, or ranking outcomes.</p>
              <h2>10. Privacy &amp; Data Protection</h2>
              <p>Client data will not be shared with third parties without consent, except where required by law.</p>
              <h2>11. Governing Law</h2>
              <p>This agreement shall be governed by the laws of India.</p>
              <h2>12. Changes to Terms</h2>
              <p>Media Maestro reserves the right to update these Terms &amp; Conditions at any time.</p>
              <h2>13. Force Majeure</h2>
              <p>Media Maestro shall not be held liable for delays due to circumstances beyond reasonable control.</p>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
