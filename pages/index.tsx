import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        <h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span>Entrepreneurship Professor </span>
          <br className="sm:hidden" />
          <span>&amp; Behavioral Scientist</span>
        </h1>
        <p className="mt-4 text-neutral-700 max-w-4xl md:max-w-5xl">
          I study how entrepreneurs and executives shape their businesses under technological, market, and environmental uncertainty.
          I’m building <span className="font-medium">Startup Navigator</span> because it is not easy to get generic AI tools beyond super generic startup ideas and advice, and Startup Navigator provides the structured framework that turns your AI 100% more useful as an entrepreneurship mentor.
        </p>
      </section>

      {/* About — sequential section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-neutral-700 max-w-4xl md:max-w-5xl">
          <span className="font-medium">Maness Chair of Entrepreneurship and Innovation at Baylor University.</span>{" "}
          Professor Zhang has previously worked in the University of Adelaide, the University of Sydney, the
          Catholic University of Chile, and the National University of Singapore, and has founded several startups.
          <br />
          CV and short bio inside.
        </p>
        <div className="mt-4">
          <a href="/about" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
            Learn more
          </a>
        </div>
      </section>

      {/* Navigator — sequential section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">Startup Navigator</h2>
        <p className="mt-3 text-neutral-700 max-w-4xl md:max-w-5xl">
          You’ve tried using generative AI to help with startup ideas—it gives lists of features, generic advice,
          and confident-sounding suggestions that lead nowhere.
          <br />
          The problem is missing <span className="font-medium">structured prompts</span> that ask the right
          questions at the right time. Navigator has been refined through hundreds of systematic iterations.
          <br />
          Give it a try:
        </p>
        <ul className="mt-3 list-decimal pl-5 text-neutral-800 text-sm">
          <li>Stage 1: Ideation</li>
          <li>Stage 2: Idea Deep Dive</li>
          <li>Stage 3: Problem Validation</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://navigator.stephenxzhang.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-neutral-900 text-white"
          >
            Start Free
          </a>
          <a href="/navigator" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
            Learn more
          </a>
        </div>
      </section>

      {/* Research — sequential section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">Research</h2>
        <p className="mt-3 text-neutral-700 max-w-4xl md:max-w-5xl">Find my papers and their podcasts here.</p>
        <div className="mt-4">
          <a href="/research" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
            Learn more
          </a>
        </div>
      </section>

      {/* Teaching — sequential section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">Teaching</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-800 text-sm">
          <li>ENT 3315 — Starting &amp; Managing a Business</li>
          <li>Seminars</li>
        </ul>
        <div className="mt-4">
          <a href="/teaching" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
            Learn more
          </a>
        </div>
      </section>
    </Layout>
  );
}
