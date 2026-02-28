"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { SERVICE_OPTIONS, CONTACT_INFO } from "@/lib/constants";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  city?: string;
  service?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.service) newErrors.service = "Please select a service";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          service: formData.service,
          message: formData.message || "No message provided",
          subject: `New Quote Request — ${formData.service}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", city: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBaseClasses =
    "w-full bg-surface-elevated border border-white/10 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";
  const errorBorder = "border-red-500/50";
  const normalBorder = "hover:border-white/20";

  if (status === "success") {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-text-primary mb-2">Thank You!</h3>
        <p className="text-text-muted">We&apos;ve received your query! We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm text-red-300">
            Something went wrong. Please email us directly at{" "}
            <a href={`mailto:${CONTACT_INFO.email}`} className="underline font-medium">{CONTACT_INFO.email}</a>
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-1.5">
            First Name <span className="text-red-400">*</span>
          </label>
          <input id="firstName" type="text" value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className={`${inputBaseClasses} ${errors.firstName ? errorBorder : normalBorder}`}
            placeholder="John"
          />
          {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-1.5">Last Name</label>
          <input id="lastName" type="text" value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className={`${inputBaseClasses} ${normalBorder}`}
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input id="email" type="email" value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`${inputBaseClasses} ${errors.email ? errorBorder : normalBorder}`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input id="phone" type="tel" value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`${inputBaseClasses} ${errors.phone ? errorBorder : normalBorder}`}
          placeholder="+91 98765 43210"
        />
        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-text-primary mb-1.5">
          City <span className="text-red-400">*</span>
        </label>
        <input id="city" type="text" value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className={`${inputBaseClasses} ${errors.city ? errorBorder : normalBorder}`}
          placeholder="Mumbai"
        />
        {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-1.5">
          Services <span className="text-red-400">*</span>
        </label>
        <select id="service" value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={`${inputBaseClasses} ${errors.service ? errorBorder : normalBorder} ${!formData.service ? "text-text-muted/40" : ""}`}
        >
          <option value="" disabled>Select a Service</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Message</label>
        <textarea id="message" value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputBaseClasses} ${normalBorder} min-h-[120px] resize-y`}
          placeholder="Tell us about your project..."
          rows={4}
        />
      </div>

      <button type="submit" disabled={status === "loading"}
        className="w-full bg-primary text-white font-medium py-3.5 px-6 rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-[1.01] hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Get A Free Quote
          </>
        )}
      </button>
    </form>
  );
}
