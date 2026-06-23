"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      // Replace this with your Resend / Formspree / Netlify Forms endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputClass =
    "w-full bg-bg border border-border rounded-lg px-4 py-3 text-cream text-sm placeholder:text-subtle focus:outline-none focus:border-gold/60 transition-colors";

  if (state === "success") {
    return (
      <div className="border border-gold/30 rounded-lg p-8 text-center bg-surface">
        <div className="text-gold text-2xl mb-3">✦</div>
        <p className="text-cream font-medium text-base mb-1">Message sent.</p>
        <p className="text-muted text-sm">I&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-xs text-muted gold-underline hover:text-cream transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs text-muted mb-1.5 tracking-wide">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs text-muted mb-1.5 tracking-wide">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs text-muted mb-1.5 tracking-wide">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What would you like to talk about?"
          value={form.message}
          onChange={handleChange}
          className={inputClass + " resize-none"}
        />
      </div>

      {state === "error" && (
        <p className="text-red-400 text-xs">
          Something went wrong. Email me directly at sidmishra2004@gmail.com
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-gold text-bg text-sm font-medium py-3 rounded hover:bg-gold-dim disabled:opacity-50 transition-colors"
      >
        {state === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
