import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Head>
        <title>Stephen X. Zhang — Entrepreneurship Professor & Behavioral Scientist</title>
        <meta
          name="description"
          content="Entrepreneurship Professor & Behavioral Scientist at Baylor University. Building Startup Navigator to help founders and instructors run evidence-first tests."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Elegant fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap"
          rel="stylesheet"
        />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Stephen X. Zhang",
              jobTitle: "Entrepreneurship Professor & Behavioral Scientist",
              affiliation: { "@type": "CollegeOrUniversity", name: "Baylor University" },
              url: "https://stephenzhang.vercel.app",
              sameAs: [
                "https://scholar.google.com/",
                "https://orcid.org/",
                "https://www.linkedin.com/",
                "https://www.researchgate.net/"
              ]
            })
          }}
        />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-neutral-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            <a href="#about" className="text-lg font-semibold tracking-tight">Stephen X. Zhang</a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-neutral-600" href="#about">About</a>
              <a className="hover:text-neutral-600" href="/navigator">Navigator</a>
              <a className="hover:text-neutral-600" href="#research">Research</a>
              <a className="hover:text-neutral-600" href="#teaching">Teaching</a>
              <a className="hover:text-neutral-600" href="#media">Success Stories / Media</a>
              <a className="hover:text-neutral-600" href="#contact">Contact</a>
            </nav>

            {/* Mobile menu button */}
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
              <a className="hover:text-neutral-600" href="#about" onClick={() => setOpen(false)}>About</a>
              <a className="hover:text-neutral-600" href="/navigator" onClick={() => setOpen(false)}>Navigator</a>
              <a className="hover:text-neutral-600" href="#research" onClick={() => setOpen(false)}>Research</a>
              <a className="hover:text-neutral-600" href="#teaching" onClick={() => setOpen(false)}>Teaching</a>
              <a className="hover:text-neutral-600" href="#media" onClick={() => setOpen(false)}>Success Stories / Media</a>
              <a className="hover:text-neutral-600" href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Entrepreneurship Professor & Behavioral Scientist
            </h1>
            <p className="mt-4 text-neutral-700 max-w-prose" style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}>
              I study how entrepreneurs and executives shape strategy and operations through behavior and learning.
              I am building <span className="font-medium">Startup Navigator</span> for founders and instructors to run evidence-first tests.
            </p>
            {/* CV + Short Bio inside About */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/cv.pdf" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">Download CV (PDF)</a>
              <a href="/navigator" className="inline-flex items-center px-4 py-2 rounded-xl bg-neutral-900 text-white">Try Navigator</a>
              <a href="https://navigator.stephenxzhang.com/instructors" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">For Instructors</a>
            </div>

            <details className="mt-6 rounded-2xl border border-neutral-200 p-5 open:shadow-sm">
              <summary className="cursor-pointer text-sm font-medium">Short Bio</summary>
              <div className="mt-3 text-sm text-neutral-700 space-y-3">
                <p>
                  Stephen X. Zhang is an Entrepreneurship Professor & Behavioral Scientist at Baylor University. His research
                  examines how founders’ and executives’ psychology shapes strategy, operations, and learning under uncertainty.
                  He develops practical tools, including Startup Navigator, to help founders and instructors run rigorous,
                  evidence-first tests.
                </p>
                <p>
                  Previously, he held academic roles at the University of Adelaide, the University of Sydney, and the Catholic
                  University of Chile. He earned his PhD at the National University of Singapore and has been featured by global media.
                </p>
              </div>
            </details>
          </div>

          <div className="md:col-span-2">
            <div className="aspect-[4/5] w-full rounded-2xl bg-neutral-100 overflow-hidden shadow-sm">
              <img src="/headshot.jpg" alt="Stephen X. Zhang headshot" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Prestige strip (subtle) */}
      <section aria-label="Affiliations" className="border-y border-neutral-100 bg-neutral-50/70">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {["Baylor", "Adelaide", "Sydney", "NUS", "Forbes", "BBC"].map((name) => (
              <div key={name} className="h-7 flex items-center">
                <div className="px-3 py-1 rounded bg-white border border-neutral-200 text-[11px] text-neutral-700">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigator (quick path) */}
      <section id="navigator" className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Startup Navigator</h2>
            <p className="mt-3 text-neutral-700 max-w-prose">
              A lean, evidence-first workflow. Run short weekly drills, find early adopters, and decide pivot or persist based on data.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Quick-try goes straight to product */}
              <a href="https://navigator.stephenxzhang.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl bg-neutral-900 text-white">
                Start Free (Quick Try)
              </a>
              {/* Deep info page lives on /navigator */}
              <a href="/navigator" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
                Learn More & Give Feedback
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 shadow-sm p-5">
            <p className="text-sm font-medium">This week inside Navigator</p>
            <div className="mt-3 space-y-3 text-sm text-neutral-800">
              <div>
                <p className="font-medium">Early Adopter Slicer</p>
                <p className="text-neutral-700">A micro screener and five channel probes. Outcome in one session.</p>
              </div>
              <div>
                <p className="font-medium">Evidence Log</p>
                <p className="text-neutral-700">Record what you learned and decide pivot or persist with clarity.</p>
              </div>
              <div>
                <p className="font-medium">Instructor Pack</p>
                <p className="text-neutral-700">A forty minute in-class activity with timing and grading tips.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Research</h2>
        <p className="mt-3 text-neutral-700 max-w-prose">Selected work at the intersection of entrepreneurship, strategy, and operations with a behavioral lens. Full CV above.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium">Behavioral Operations of Entrepreneurs</p>
            <p className="text-sm text-neutral-700">How hazard tolerances shape operational choices when outcomes are uncertain.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium">Strategic Affordance</p>
            <p className="text-sm text-neutral-700">When environments afford rapid capability development and learning momentum.</p>
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section id="teaching" className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Teaching</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-base font-medium">ENT 3315 — Starting and Managing a Business</p>
            <p className="text-sm text-neutral-700 mt-1">AI enabled ideation, early adopter discovery, iterative prototypes. Navigator is the operating system.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-base font-medium">Seminars — Entrepreneurial Behavioral Operations</p>
            <p className="text-sm text-neutral-700 mt-1">Mechanisms linking founder psychology to process, quality, and performance.</p>
          </div>
        </div>
      </section>

      {/* Success Stories / Media */}
      <section id="media" className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Success Stories and Media</h2>
        <p className="mt-3 text-neutral-700 max-w-prose">
          Short, verifiable cases of Navigator in the wild, plus selected talks and media.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 p-5 text-sm">
              <p className="font-medium">Case {i}: Early Adopter Win</p>
              <p className="text-neutral-700">A team narrowed segments and booked ten qualified interviews within two days.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact (no public email) */}
      <section id="contact" className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-neutral-700">For speaking, research, or Navigator pilots. Use the form—no public email displayed.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — your message has been noted.");
              }}
              className="space-y-3 text-sm"
            >
              <input className="w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Name" />
              <input className="w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Your email (for reply)" />
              <textarea className="w-full rounded-xl border border-neutral-300 px-3 py-2 h-24" placeholder="Message" />
              <button className="px-4 py-2 rounded-xl bg-neutral-900 text-white">Send</button>
            </form>
            <p className="mt-2 text-xs text-neutral-500">
              For a real inbox, replace the form with a Formspree/ConvertKit/Typeform embed later.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5 text-sm text-neutral-700">
            <p className="font-medium">Office</p>
            <p className="mt-1">Baylor University, Waco, TX</p>
          </div>
        </div>
      </section>

      {/* Footer with ResearchGate */}
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
