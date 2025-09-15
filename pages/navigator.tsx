import Layout from "../components/Layout";

export default function NavigatorPage() {
  return (
    <Layout title="Startup Navigator" description="Quick start, demo, instructor resources, and feedback.">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Startup Navigator</h1>
        <p className="mt-3 text-neutral-700 max-w-prose">
          A lean, evidence-first workflow. Run short weekly drills, find early adopters, and decide pivot or persist based on data.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://navigator.stephenxzhang.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl bg-neutral-900 text-white">
            Start Free (Quick Try)
          </a>
          <a href="https://navigator.stephenxzhang.com/instructors" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
            For Instructors
          </a>
          {/* Replace with your Google Form/Typeform link */}
          <a href="https://forms.gle/your-form-id" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
            Give Feedback
          </a>
        </div>

        {/* Demo video */}
        <div className="mt-8">
          <div className="aspect-video w-full rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
            <p className="text-neutral-600 text-sm">Embed 90-second demo video here</p>
          </div>
        </div>

        {/* Quick start */}
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="font-medium">1) Pick a Drill</p>
            <p className="text-sm text-neutral-700 mt-1">Start with the Early Adopter Slicer to narrow your segment.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="font-medium">2) Run It in 20 Minutes</p>
            <p className="text-sm text-neutral-700 mt-1">Use the micro-screener and five channel probes.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="font-medium">3) Log Evidence</p>
            <p className="text-sm text-neutral-700 mt-1">Record what you learned and decide pivot or persist.</p>
          </div>
        </div>

        {/* Instructor section */}
        <div className="mt-12 rounded-2xl border border-neutral-200 p-6">
          <p className="font-medium">Instructor Mode</p>
          <p className="text-sm text-neutral-700 mt-2">
            Download the activity pack, deploy in 40 minutes, and grade based on evidence rather than pitch theater.
          </p>
          <div className="mt-3">
            <a href="https://navigator.stephenxzhang.com/instructors" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
              Instructor Resources
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-2xl border border-neutral-200 p-4">
              <summary className="cursor-pointer font-medium">What’s the core idea?</summary>
              <p className="mt-2 text-sm text-neutral-700">Short, high-diagnostic tests that reduce uncertainty fastest per minute.</p>
            </details>
            <details className="rounded-2xl border border-neutral-200 p-4">
              <summary className="cursor-pointer font-medium">How soon do I see results?</summary>
              <p className="mt-2 text-sm text-neutral-700">Each drill is designed to produce a visible outcome within one session.</p>
            </details>
            <details className="rounded-2xl border border-neutral-200 p-4">
              <summary className="cursor-pointer font-medium">Does this work in a classroom?</summary>
              <p className="mt-2 text-sm text-neutral-700">Yes. Instructor mode provides activity packs, rubrics, and exports.</p>
            </details>
          </div>
        </div>
      </section>
    </Layout>
  );
}
