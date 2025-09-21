import Layout from "../components/Layout";
import { client } from "../lib/sanity.client";  // Changed this line
import { ABOUT_QUERY } from "../lib/queries";

type AboutData = {
  shortBio?: string;
  cvUrl?: string;
  headshot?: { asset?: { url?: string } };
};

export async function getStaticProps() {
  let data: AboutData | null = null;
  try {
    data = await client.fetch(ABOUT_QUERY);  // Changed this line
  } catch {}
  return { props: { data }, revalidate: 60 };
}

// ... rest of your component remains the same

export default function About({ data }: { data: AboutData | null }) {
  const shortBio =
    data?.shortBio ||
    `Stephen X. Zhang is Mannes Chair Professor of Entrepreneurship at Baylor University. His research examines how
entrepreneurs and executives impact their businesses under uncertainty. His work appears in top entrepreneurship
journals (Entrepreneurship Theory and Practice, Journal of Business Venturing) and management journals (Academy of
Management Journal, Organization Science, Strategic Management Journal). He has secured over US$1.5 million in basic
research grants and US$4 million in applied research funding across multiple countries. His academic career spans
leading universities in Australia, South America, and Asia, and he has travelled to over 100 countries. Before
entering academia, he worked in multiple industries and founded several startups.`;

  const cvUrl = data?.cvUrl || "/cv.pdf";
  const headshotUrl = data?.headshot?.asset?.url || "/headshot.jpeg";

  return (
    <Layout title="About">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h1
              className="text-3xl sm:text-4xl font-semibold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Entrepreneurship Professor &amp; Behavioral Scientist
            </h1>
            <p className="mt-4 text-neutral-700 max-w-prose">
              I study how entrepreneurs and executives shape their businesses. I develop theories, frameworks, and
              practical tools, including <span className="font-medium">Startup Navigator</span>, to help founders and instructors
              to use AI effectively for entrepreneurship, from ideation to validation, prototyping and marketing.
            </p>

            <details className="mt-6 rounded-2xl border border-neutral-200 p-5 open:shadow-sm">
              <summary className="cursor-pointer text-sm font-medium">Short Bio</summary>
              <div className="mt-3 text-sm text-neutral-700 space-y-3 whitespace-pre-line">
                <p>{shortBio}</p>
              </div>
            </details>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={cvUrl} className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
                Download CV (PDF)
              </a>
              <a href="/navigator" className="inline-flex items-center px-4 py-2 rounded-xl bg-neutral-900 text-white">
                Navigator
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="aspect-[4/5] w-full rounded-2xl bg-neutral-100 overflow-hidden shadow-sm">
              <img src={headshotUrl} alt="Stephen X. Zhang headshot" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
