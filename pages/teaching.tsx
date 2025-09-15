import Layout from "../components/Layout";

export default function Teaching() {
  return (
    <Layout title="Teaching" description="Courses and seminars.">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Teaching</h1>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-base font-medium">ENT 3315 — Starting & Managing a Business</p>
            <p className="text-sm text-neutral-700 mt-1">
              AI-enabled ideation, early adopter discovery, iterative prototypes. Navigator is the weekly operating system.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-base font-medium">Seminars — Entrepreneurial Behavioral Operations</p>
            <p className="text-sm text-neutral-700 mt-1">
              Mechanisms linking founder psychology to process, quality, and performance.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
