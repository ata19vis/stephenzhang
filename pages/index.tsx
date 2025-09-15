import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Entrepreneurship Professor & Behavioral Scientist
        </h1>
        <p className="mt-4 text-neutral-700 max-w-prose">
          I study how entrepreneurs and executives shape strategy and operations through behavior and learning.
          I’m building <span className="font-medium">Startup Navigator</span> so founders and instructors can run evidence-first tests.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/about" className="inline-flex items-center px-4 py-2 rounded-xl bg-neutral-900 text-white">About me</a>
          <a href="/navigator" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">Navigator</a>
        </div>
      </section>

      {/* Prestige strip */}
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

      {/* Previews grid */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          {/* About preview */}
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Baylor University. Previously Adelaide, Sydney, and PUC-Chile. PhD at NUS. CV and short bio inside.
            </p>
            <div className="mt-4">
              <a href="/about" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">Learn more</a>
            </div>
          </div>

          {/* Navigator preview */}
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-semibold">Startup Navigator</h2>
            <p className="mt-2 text-sm text-neutral-700">A lean, evidence-first workflow: weekly drills, early adopters, pivot/persist clarity.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://navigator.stephenxzhang.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl bg-neutral-900 text-white">Start Free</a>
              <a href="/navigator" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">Learn more</a>
            </div>
          </div>

          {/* Research preview */}
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-semibold">Research</h2>
            <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5">
              <li>Behavioral Operations of Entrepreneurs</li>
              <li>Strategic Affordance & Learning Momentum</li>
            </ul>
            <div className="mt-4">
              <a href="/research" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">Learn more</a>
            </div>
          </div>

          {/* Teaching preview */}
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-semibold">Teaching</h2>
            <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5">
              <li>ENT 3315 — Starting & Managing a Business</li>
              <li>Seminars — Entrepreneurial Behavioral Ops</li>
            </ul>
            <div className="mt-4">
              <a href="/teaching" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">Learn more</a>
            </div>
          </div>

          {/* Media preview */}
          <div className="rounded-2xl border border-neutral-200 p-6 md:col-span-2">
            <h2 className="text-xl font-semibold">Success Stories / Media</h2>
            <p className="mt-2 text-sm text-neutral-700">Short, verifiable outcomes from Navigator; plus selected talks & features.</p>
            <div className="mt-4">
              <a href="/media" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">Explore</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
