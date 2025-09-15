import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact" description="Reach out about speaking, research, or Navigator pilots.">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h1>
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
              <textarea className="w-full rounded-xl border border-neutral-300 px-3 py-2 h-28" placeholder="Message" />
              <button className="px-4 py-2 rounded-xl bg-neutral-900 text-white">Send</button>
            </form>
            <p className="mt-2 text-xs text-neutral-500">
              To receive real submissions, replace this with a Formspree / Typeform embed link later.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5 text-sm text-neutral-700">
            <p className="font-medium">Office</p>
            <p className="mt-1">Baylor University, Waco, TX</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
