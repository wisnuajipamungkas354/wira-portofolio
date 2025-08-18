import { FaqPreview } from "@/components/experimental/faq-preview";

import { mockFaq } from "@/constants/__mocks__/help-faq.mock";

export default function PlaygroundPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">FAQ – Playground</h1>

      {/* 1 item dulu */}
      <section className="rounded-2xl border border-white/10 p-6">
        <h2 className="mb-4 text-sm font-medium text-white/70">
          Single Item (Step 1)
        </h2>
        <FaqPreview items={[mockFaq[0]]} />
      </section>

      {/* lalu 2 item (cek divider/spacing) */}
      <section className="rounded-2xl border border-white/10 p-6">
        <h2 className="mb-4 text-sm font-medium text-white/70">
          Two Items (Step 2)
        </h2>
        <FaqPreview items={mockFaq} />
      </section>
    </div>
  );
}
