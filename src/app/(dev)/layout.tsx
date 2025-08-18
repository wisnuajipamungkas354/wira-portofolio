export const metadata = {
  title: "Playground",
  robots: { index: false, follow: false }, // jangan terindeks
};

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-neutral-950 text-white">
      <div className="sticky top-0 z-50 bg-neutral-900/70 backdrop-blur px-4 py-2 text-xs text-white/70">
        DEV Playground
      </div>
      <main className="container mx-auto px-4 py-10">{children}</main>
    </div>
  );
}
