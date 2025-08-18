"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { ErrorDialog } from "@/components/ui/ErrorDialog";
import { SuccessDialog } from "@/components/ui/SuccessDialog";

const services = [
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile App Development" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "cloud", label: "Cloud Solutions" },
  { id: "soft", label: "Software Development" },
  { id: "other", label: "Other" },
];

export default function ContactUsSection() {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
      services: fd.getAll("services").map(String),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());

      // ✅ sukses
      setSuccessOpen(true);
      form.reset();

      toast.success("Message sent", {
        description: "Thanks! We’ll be in touch shortly.",
      });
    } catch (err: any) {
      // ❌ gagal
      setErrorOpen(true);
      toast.error("Send failed", {
        description: "We couldn’t send your message. Please try again.",
        action: {
          label: "Retry",
          onClick: () => formRef.current?.requestSubmit(),
        },
      });
      console.error(err?.message || err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact-us"
      className="bg-black text-white px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <FormHeader />
        <div className="mx-auto mt-8 max-w-3xl">
          <ContactForm ref={formRef} onSubmit={onSubmit} loading={loading} />
        </div>
      </div>

      {/* Portals */}
      <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
      <ErrorDialog
        open={errorOpen}
        onOpenChange={setErrorOpen}
        onRetry={() => formRef.current?.requestSubmit()}
      />
    </section>
  );
}

/* ---------- subcomponents ---------- */

function FormHeader() {
  return (
    <header className="text-center">
      <h2 className="text-display-sm md:text-display-lg font-semibold">
        Ready to Start? Let’s Talk.
      </h2>
      <p className="mt-2 text-sm md:text-base text-white/70">
        Tell us what you need, and we’ll get back to you soon.
      </p>
    </header>
  );
}

const ContactForm = React.forwardRef<
  HTMLFormElement,
  { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; loading: boolean }
>(function ContactForm({ onSubmit, loading }, ref) {
  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      className="mx-auto mt-8 max-w-3xl space-y-6"
    >
      {/* Name */}
      <div className="space-y-2">
        <label className="text-sm text-white/80" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Enter your name"
          className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm text-white/80" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm text-white/80" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Enter your message"
          className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2"
        />
      </div>

      {/* Services */}
      <fieldset className="space-y-2">
        <legend className="text-sm text-white">Services</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.map((s) => (
            <label
              key={s.id}
              htmlFor={s.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-white/80"
            >
              <input
                id={s.id}
                name="services"
                type="checkbox"
                value={s.label}
                className="h-4 w-4 rounded border-white/30 bg-transparent"
              />
              {s.label}
            </label>
          ))}
        </div>
      </fieldset>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-primary-300 px-4 py-3 font-semibold text-white hover:bg-primary-200 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
});
