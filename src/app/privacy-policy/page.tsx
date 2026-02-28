import type { Metadata } from "next";
import FadeInView from "@/components/animations/FadeInView";

export const metadata: Metadata = {
  title: "Privacy Policy | Media Maestro Co",
  description:
    "Privacy Policy for Media Maestro Co — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-surface-dark grain-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <h1 className="font-display font-bold text-text-primary mb-4">Privacy Policy</h1>
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
              <h2>Introduction</h2>
              <p>At Media Maestro Co, we are committed to protecting the privacy and security of our clients and site visitors. This Privacy Policy outlines what data we collect, how we use it, and your rights about that data.</p>
              <h2>What Information We Collect</h2>
              <p><strong className="text-text-primary">Personal Information:</strong> This includes your name, email address, phone number, and any other information you provide when you fill out a contact form or sign up for our services.</p>
              <p><strong className="text-text-primary">Usage Information:</strong> We collect information about how you use our website, such as the pages you visit, the length of your visit, and the actions you take on our site.</p>
              <h2>How We Use Your Information</h2>
              <ul>
                <li>To provide and improve our services.</li>
                <li>To communicate with you about our services.</li>
                <li>To analyze and improve the performance and security of our website.</li>
              </ul>
              <h2>How We Share Your Information</h2>
              <p>We do not sell or share your personal information with third parties for their marketing purposes without your explicit consent.</p>
              <h2>Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information at any time. You can also object to or restrict our processing of your data.</p>
              <h2>Security Measures</h2>
              <p>We prioritize the security of your information and have implemented technical and organizational measures to protect it.</p>
              <h2>Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              <h2>Contact Us</h2>
              <p>If you have any concerns or questions about our Privacy Policy, please contact us at <a href="mailto:mediamaestroco01@gmail.com">mediamaestroco01@gmail.com</a></p>
              <p className="mt-8 text-text-primary font-medium">Thank you for trusting Media Maestro Co with your information!</p>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
