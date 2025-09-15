
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Head>
        <title>Stephen X. Zhang | Entrepreneurship & Innovation | Baylor University</title>
        <meta name="description" content="Entrepreneurship & Innovation scholar. Building Startup Navigator to transform how founders and instructors test ideas."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Stephen X. Zhang",
            "jobTitle": "Associate Professor of Entrepreneurship & Innovation; Terry S. Maness Endowed Chair",
            "affiliation": {"@type": "CollegeOrUniversity", "name": "Baylor University"},
            "url": "https://stephenxzhang.com/",
            "sameAs": ["https://scholar.google.com/", "https://www.linkedin.com/", "https://orcid.org/"]
          })}}
        />
      </Head>

      {/* Top Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight text-xl">Stephen X. Zhang</a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-neutral-600" href="#research">Research</a>
              <a className="hover:text-neutral-600" href="#teaching">Teaching</a>
              <a className="hover:text-neutral-600" href="#media">Media</a>
              <a className="hover:text-neutral-600" href="#navigator">Navigator</a>
              <a className="hover:text-neutral-600" href="#stories">Success Stories</a>
              <a className="hover:text-neutral-600" href="#contact">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <a href="#subscribe" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-neutral-900 text-white">Subscribe</a>
              <a href="#navigator" className="px-4 py-2 rounded-xl border border-neutral-200">Try Navigator</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
                Entrepreneurship & Innovation scholar
              </h1>
              <p className="mt-4 text-lg text-neutral-700 max-w-prose">
                Associate Professor and Terry S. Maness Endowed Chair, Baylor University. I study how entrepreneurs and executives shape strategy and operations. I am building <span className="font-medium">Startup Navigator</span> to help founders and instructors test ideas with evidence.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#navigator" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white">For Entrepreneurs</a>
                <a href="#navigator" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-900">For Instructors</a>
              </div>
              <div className="mt-6 text-sm text-neutral-600">
                <p>Previously: University of Adelaide, University of Sydney, Catholic University of Chile; PhD (NUS).</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="aspect-[4/5] w-full rounded-2xl bg-neutral-100 overflow-hidden shadow-sm">
                <img src="/headshot.jpg" alt="Stephen X. Zhang headshot" className="h-full w-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestige bar */}
      <section aria-label="Affiliations & Media" className="border-y border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {["Baylor University","University of Adelaide","University of Sydney","NUS","Forbes","BBC"].map((name) => (
              <div key={name} className="h-8 flex items-center">
                <div className="px-3 py-1 rounded bg-white border border-neutral-200 text-xs text-neutral-700">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigator */}
      <section id="navigator" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Startup Navigator</h2>
            <p className="mt-3 text-neutral-700 max-w-prose">
              A lean, evidence-first workflow for founders and classrooms. Run weekly drills, find early adopters, and make pivot/persist decisions based on data — not pitch theater.
            </p>
            <ul className="mt-4 text-sm text-neutral-700 list-disc pl-5 space-y-2">
              <li>20-minute founder drills mapped to uncertainty reduction</li>
              <li>Instructor mode with activity packs and grading rubrics</li>
              <li>Simple exports for teaching and investor updates</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://navigator.stephenxzhang.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white">Start Free</a>
              <a href="https://navigator.stephenxzhang.com/instructors" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200">For Instructors</a>
              <a href="#video" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-neutral-700">Watch 90‑sec demo</a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 shadow-sm p-5">
            <p className="text-sm font-medium">What you get this week</p>
            <div className="mt-3 space-y-3 text-sm text-neutral-800">
              <div>
                <p className="font-medium">Drill: The 20‑Minute Early Adopter Slicer</p>
                <p className="text-neutral-700">A micro-screener + 5 channel probes. Outcome in one session.</p>
              </div>
              <div>
                <p className="font-medium">Evidence template</p>
                <p className="text-neutral-700">Log what you learned; decide pivot vs persist with clarity.</p>
              </div>
              <div>
                <p className="font-medium">Instructor pack</p>
                <p className="text-neutral-700">A 40‑minute in‑class activity with timing and grading tips.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Research</h2>
        <p className="mt-3 text-neutral-700 max-w-prose">Selected publications and ongoing projects at the intersection of entrepreneurship, strategy, and operations. Full CV available below.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium">Behavioral Operations of Entrepreneurs</p>
            <p className="text-sm text-neutral-700">How founders’ hazard tolerances shape operational choices under uncertainty.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium">Strategic Affordance Theory</p>
            <p className="text-sm text-neutral-700">When environments afford rapid capability development and learning momentum.</p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/cv.pdf" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200">Download CV</a>
        </div>
      </section>

      {/* Teaching */}
      <section id="teaching" className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Teaching</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200">
            <div className="p-5">
              <p className="text-base font-medium">ENT 3315 — Starting & Managing a Business</p>
              <p className="text-sm text-neutral-700 mt-1">AI‑enabled ideation, early adopter discovery, iterative prototypes. Navigator is the weekly operating system.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200">
            <div className="p-5">
              <p className="text-base font-medium">Seminars — Entrepreneurial Behavioral Ops</p>
              <p className="text-sm text-neutral-700 mt-1">Mechanisms linking founders’ psychology to process, quality, and performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media */}
      <section id="media" className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Media</h2>
        <p className="mt-3 text-neutral-700 max-w-prose">Selected coverage and talks. Replace links below with actual items.</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a className="underline hover:no-underline" href="#" target="_blank" rel="noreferrer">Interview on startup uncertainty learning (Podcast)</a></li>
          <li><a className="underline hover:no-underline" href="#" target="_blank" rel="noreferrer">Op‑ed: Evidence over enthusiasm in entrepreneurship education</a></li>
          <li><a className="underline hover:no-underline" href="#" target="_blank" rel="noreferrer">Keynote: Affordance Momentum in Early-Stage Ventures</a></li>
        </ul>
      </section>

      {/* Success Stories */}
      <section id="stories" className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Entrepreneurs’ Success Stories</h2>
        <p className="mt-3 text-neutral-700 max-w-prose">Short, verifiable cases of Navigator in the wild. Each story links the specific drill to an outcome.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 p-5 text-sm">
              <p className="font-medium">Case {i}: Early Adopter Win</p>
              <p className="text-neutral-700">How a team narrowed segments and got 10 qualified interviews in 48 hours.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video anchor */}
      <section id="video" className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
        <div className="aspect-video w-full rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
          <p className="text-neutral-600 text-sm">Embed 90‑second demo video here</p>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
        <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
          <h3 className="text-xl font-semibold tracking-tight">Get one practical startup drill per month</h3>
          <p className="mt-2 text-sm text-neutral-700">Straight from Startup Navigator. Evidence first, jargon last.</p>
          <form className="mt-4 flex flex-col sm:flex-row gap-3" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" required placeholder="you@email.com" className="w-full sm:flex-1 rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
            <button type="submit" className="px-4 py-2 rounded-xl bg-neutral-900 text-white">Subscribe</button>
          </form>
          <p className="mt-2 text-xs text-neutral-500">We’ll never share your email. You can unsubscribe anytime.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-neutral-700">For speaking, research, or Navigator pilots.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-5 text-sm text-neutral-700">
            <p><span className="font-medium">Email:</span> stephen_zhang@baylor.edu</p>
            <p className="mt-2"><span className="font-medium">Office:</span> Baylor University, Waco, TX</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <form onSubmit={(e)=>e.preventDefault()} className="space-y-3 text-sm">
              <input className="w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Name"/>
              <input className="w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Email"/>
              <textarea className="w-full rounded-xl border border-neutral-300 px-3 py-2 h-24" placeholder="Message"/>
              <button className="px-4 py-2 rounded-xl bg-neutral-900 text-white">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Stephen X. Zhang</p>
          <div className="flex items-center gap-4">
            <a className="underline hover:no-underline" href="https://scholar.google.com" target="_blank" rel="noreferrer">Google Scholar</a>
            <a className="underline hover:no-underline" href="https://orcid.org" target="_blank" rel="noreferrer">ORCID</a>
            <a className="underline hover:no-underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
