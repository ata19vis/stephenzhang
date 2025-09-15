import Layout from "../components/Layout";

export default function Research() {
  return (
    <Layout title="Research" description="Selected work with a behavioral lens.">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Research</h1>
        <p className="mt-3 text-neutral-700 max-w-prose">
          Selected work at the intersection of entrepreneurship, strategy, and operations with a behavioral lens.
          (Full publications list coming soon.)
        </p>

        <div className="mt-8 space-y-4">
          <article className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium">Behavioral Operations of Entrepreneurs</p>
            <p className="text-sm text-neutral-700 mt-1">How hazard tolerances shape operational choices when outcomes are uncertain.</p>
          </article>
          <article className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium">Strategic Affordance & Learning Momentum</p>
            <p className="text-sm text-neutral-700 mt-1">When environments afford rapid capability development.</p>
          </article>
        </div>

        <div className="mt-8">
          <a href="/cv.pdf" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">Download CV (PDF)</a>
        </div>
      </section>
    </Layout>
  );
}
