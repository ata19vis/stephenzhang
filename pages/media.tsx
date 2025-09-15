import Layout from "../components/Layout";

export default function Media() {
  return (
    <Layout title="Success Stories / Media" description="Navigator outcomes, selected talks, and features.">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Success Stories & Media</h1>
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

        <ul className="mt-8 space-y-2 text-sm">
          <li><a className="underline hover:no-underline" href="#" target="_blank" rel="noreferrer">Podcast: Uncertainty learning</a></li>
          <li><a className="underline hover:no-underline" href="#" target="_blank" rel="noreferrer">Op-ed: Evidence over enthusiasm</a></li>
          <li><a className="underline hover:no-underline" href="#" target="_blank" rel="noreferrer">Keynote: Learning momentum in early-stage ventures</a></li>
        </ul>
      </section>
    </Layout>
  );
}
