import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Entrepreneurship Professor & Behavioral Scientist
            </h1>
            <p className="mt-4 text-neutral-700 max-w-prose">
              I study how entrepreneurs and executives shape strategy and operations through behavior and learning. I develop practical tools,
              including <span className="font-medium">Startup Navigator</span>, to help founders and instructors run evidence-first tests.
            </p>

            <details className="mt-6 rounded-2xl border border-neutral-200 p-5 open:shadow-sm">
              <summary className="cursor-pointer text-sm font-medium">Short Bio</summary>
              <div className="mt-3 text-sm text-neutral-700 space-y-3">
                <p>
                  Stephen X. Zhang is an Entrepreneurship Professor & Behavioral Scientist at Baylor University. His research examines
                  how founders’ and executives’ psychology shapes strategy, operations, and learning under uncertainty.
                </p>
                <p>
                  Previously, he held academic roles at the University of Adelaide, the University of Sydney, and the Catholic University of Chile.
                  He earned a PhD at the National University of Singapore and has been featured by global media.
                </p>
              </div>
            </details>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/cv.pdf" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">Download CV (PDF)</a>
              <a href="/navigator" className="inline-flex items-center px-4 py-2 rounded-xl bg-neutral-900 text-white">Navigator</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="aspect-[4/5] w-full rounded-2xl bg-neutral-100 overflow-hidden shadow-sm">
              <img src="/headshot.jpg" alt="Stephen X. Zhang headshot" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
