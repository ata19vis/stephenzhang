import Layout from "../components/Layout";
import { sanityClient } from "../lib/sanity.client";
import { HOME_QUERY } from "../lib/queries";

type HomeData = {
  heroTitle?: string;
  heroDescription?: string;
  aboutIntro?: string;
  navigatorText?: string;
  teachingList?: string[];
};

export async function getStaticProps() {
  let data: HomeData | null = null;
  try {
    data = await sanityClient.fetch(HOME_QUERY);
  } catch {}
  return { props: { data }, revalidate: 60 };
}

export default function Home({ data }: { data: HomeData | null }) {
  const heroTitle =
    data?.heroTitle || "Entrepreneurship Professor & Behavioral Scientist";

  // Split title at ampersand to force 1 line on desktop, 2 lines on phones
  const parts = heroTitle.split("&");
  const left = parts[0]?.trim() || heroTitle;
  const right = parts[1]?.trim() || "";

  const heroDescription =
    data?.heroDescription ||
    `I study how entrepreneurs and executives shape their businesses under technological, market, and environmental uncertainty.
I’m building Startup Navigator because it is not easy to get generic AI tools beyond super generic startup ideas and advice, and Startup Navigator provides the structured framework that turns your AI 100% more useful as an entrepreneurship mentor.`;

  const aboutIntro =
    data?.aboutIntro ||
    `Maness Chair of Entrepreneurship and Innovation at Baylor University. Professor Zhang has previously worked in the University of Adelaide, the University of Sydney, the Catholic University of Chile, and the National University of Singapore, and has founded several startups.
CV and short bio inside.`;

  const navigatorText =
    data?.navigatorText ||
    `You’ve tried using generative AI to help with startup ideas—it gives lists of features, generic advice, and confident-sounding suggestions that lead nowhere.
To make AI useful for entrepreneurship, Gen AI needs structured prompts that ask the right questions at the right time. The Startup Navigator has been refined through hundreds of systematic iterations to deliver value to entrepreneurs.`;

  const teachingList = data?.teachingList || [
    "ENT 3315 — Starting & Managing a Business",
    "Seminars",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        <h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span>{left} </span>
          <br className="sm:hidden" />
          {!!right && <span>&amp; {right}</span>}
        </h1>
        {/* Wider, consistent width */}
        <p className="mt-4 text-neutral-700 max-w-4xl md:max-w-5xl whitespace-pre-line">
          {heroDescription}
        </p>
      </section>

      {/* About — sequential section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-neutral-700 max-w-4xl md:max-w-5xl whitespace-pre-line">
          {aboutIntro}
        </p>
        <div className="mt-4">
          <a
            href="/about"
            className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Navigator — sequential section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">Startup Navigator</h2>
        <p className="mt-3 text-neutral-700 max-w-4xl md:max-w-5xl whitespace-pre-line">
          {navigatorText}
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
          <a
            href="/navigator"
            className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Research — sequential section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">Research</h2>
        <p className="mt-3 text-neutral-700 max-w-4xl md:max-w-5xl">
          Find my papers and their podcasts here.
        </p>
        <div className="mt-4">
          <a
            href="/research"
            className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Teaching — sequential section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">Teaching</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-800 text-sm">
          {teachingList.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        <div className="mt-4">
          <a
            href="/teaching"
            className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* (Optional) Success Stories / Media section – remove if you want it hidden */}
    </Layout>
  );
}
