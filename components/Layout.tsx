import Head from "next/head";
import { useState, ReactNode } from "react";

type Props = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Layout({ title, description, children }: Props) {
  const [open, setOpen] = useState(false);
  const pageTitle =
    title ? `${title} — Stephen X. Zhang` : "Stephen X. Zhang — Entrepreneurship Professor & Behavioral Scientist";
  const pageDesc =
    description ??
    "Entrepreneurship Professor & Behavioral Scientist at Baylor University. Building Startup Navigator for evidence-first testing.";

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Elegant fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-neutral-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            <a href="/" className="text-lg font-semibold tracking-tight">Stephen X. Zhang</a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-neutral-600" href="/about">About</a>
              <a className="hover:text-neutral-600" href="/navigator">Navigator</a>
              <a className="hover:text-neutral-600" href="/research">Research</a>
              <a className="hover:text-neutral-600" href="/teaching">Teaching</a>
              {/* Media link removed */}
              <a className="hover:text-neutral-600" href="/contact">Contact</a>
            </nav>

            {/* Mobile menu */}
            <button
              aria-label="Menu"
              className="md:hidden rounded-lg border border-neutral-200 px-3 py-1 text-sm"
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden border-t border-neutral-100 bg-white">
            <nav className="mx-auto max-w-5xl px-4 py-3 grid gap-3 text-sm">
              <a href="/about" onClick={() => setOpen(false)} className="hover:text-neutral-600">About</a>
              <a href="/navigator" onClick={() => setOpen(false)} className="hover:text-neutral-600">Navigator</a>
              <a href="/research" onClick={() => setOpen(false)} className="hover:text-neutral-600">Research</a>
              <a href="/teaching" onClick={() => setOpen(false)} className="hover:text-neutral-600">Teaching</a>
              {/* Media link removed */}
              <a href="/contact" onClick={() => setOpen(false)} className="hover:text-neutral-600">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* Footer (no public email) */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Stephen X. Zhang</p>
          <div className="flex items-center gap-4">
            <a className="underline hover:no-underline" href="https://scholar.google.com" target="_blank" rel="noreferrer">Google Scholar</a>
            <a className="underline hover:no-underline" href="https://www.researchgate.net/" target="_blank" rel="noreferrer">ResearchGate</a>
            <a className="underline hover:no-underline" href="https://orcid.org" target="_blank" rel="noreferrer">ORCID</a>
            <a className="underline hover:no-underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
