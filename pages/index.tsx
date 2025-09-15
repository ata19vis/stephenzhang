import { useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [copied, setCopied] = useState<null | "s1" | "s2" | "s3">(null);

  const copy = async (text: string, key: "s1" | "s2" | "s3") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const PROMPT_S1 = `You are an evidence-first entrepreneurship assistant. Generate 10 *distinct* startup problem/idea candidates.

For each candidate, provide:
1) Problem statement (who, where, frequency, costly consequence).
2) Early adopter segment (specific, reachable).
3) Pain signals (observable behaviours and proxies).
4) Current alternatives and workarounds.
5) Leading indicator of traction (what I'd measure in week 1).
6) Big risks/assumptions (ranked by uncertainty x impact).
7) One 20-minute drill I can run *today* to reduce uncertainty the most.

Constraints:
- No “marketplaces for everything”, no vague “AI for X”. Be specific and falsifiable.
- Prefer B2B or B2B2C. Include pricing *hypothesis* (range).
- Output as a compact list with numbered items.`;

  const PROMPT_S2 = `You are an evidence-first entrepreneurship assistant. We will **deep dive** into ONE idea.

Input (from the founder):
- Idea name & 1-sentence value proposition
- Target early adopter segment

Your tasks:
A) Map core assumptions: customer/job-to-be-done, problem frequency/severity, willingness to pay, reachability, solution feasibility.
B) For each assumption, propose a **falsifiable test** with: method, sample, instrument (script or screener), success/fail thresholds, time/cost.
C) Competitive/alternative landscape: top 5 *real* ways the job is done now; switching frictions; wedge.
D) Economic sketch: unit of value, realistic price range, cost drivers, gross margin hypothesis.
E) Week-1 plan: three 20–40 minute drills that maximize uncertainty reduction.
F) Stop rules: what evidence would lead us to pivot, and where.

Format output in short bullet points with clear section headers.`;

  const PROMPT_S3 = `You are an evidence-first entrepreneurship assistant. Build a **problem validation** interview plan.

Deliver:
1) Screener (5–7 yes/no or multiple-choice items) to ensure strong-fit early adopters.
2) Interview script (12–15 open questions) about *past behaviour* and existing workflows. Avoid pitching solutions. Include follow-ups and “silence” cues.
3) Bias traps to avoid (leading questions, confirmation bias) and how to counter them.
4) Success criteria: what would count as strong signal vs. weak/no signal.
5) Evidence log template (columns) to capture quotes, events, pains, and metrics.
6) Next-step rule: how to decide pivot/persist after N interviews.

Keep it concise and directly usable in the next 60 minutes.`;

  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        <h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span>Entrepreneurship Professor </span>
          {/* Force a line break only on phones, keep one-line on desktop */}
          <br className="sm:hidden" />
          <span>&amp; Behavioral Scientist</span>
        </h1>

        {/* Wider paragraph (no narrow 'prose' width) */}
        <p className="mt-4 text-neutral-700 max-w-prose">
          I study how entrepreneurs and executives shape their businesses under technological, market, and environmental uncertainty.
          I’m building <span className="font-medium">Startup Navigator</span> because it is not easy to get generic AI tools beyond super generic startup ideas and advice, and Startup Navigator provides the structured framework that turns your AI 100% more useful as an entrepreneurship mentor.
        </p>      </section>

      {/* About — sequential */}
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
          <a
            href="/about"
            className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Navigator — sequential */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">Startup Navigator</h2>
        <p className="mt-3 text-neutral-700 max-w-4xl md:max-w-5xl">
                    You’ve tried using generative AI to help with startup ideas—it gives lists of features, generic advice,
          and confident-sounding suggestions that lead nowhere.
          <br />
          The problem is missing <span className="font-medium">structured prompts</span> that ask the right
          questions at the right time. Navigator has been refined through hundreds of systematic iterations.
          <br />
        <p className="mt-3 text-neutral-700 max-w-4xl md:max-w-5xl">
          Give it a try. By clicking the links to the startup stage below, you’ll **copy** the structured prompts
          that you can paste into your generative AI chat box:
        </p>

        {/* Copyable prompt links */}
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <button
            onClick={() => copy(PROMPT_S1, "s1")}
            className="text-left rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50"
          >
            <p className="font-medium">Copy the structured prompts for:</p>
            <p className="text-sm text-neutral-800 mt-1">Stage 1: Ideation</p>
            {copied === "s1" && <p className="mt-1 text-xs text-green-600">Copied!</p>}
          </button>

          <button
            onClick={() => copy(PROMPT_S2, "s2")}
            className="text-left rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50"
          >
            <p className="font-medium">Copy the structured prompts for:</p>
            <p className="text-sm text-neutral-800 mt-1">Stage 2: Idea Deep Dive</p>
            {copied === "s2" && <p className="mt-1 text-xs text-green-600">Copied!</p>}
          </button>

          <button
            onClick={() => copy(PROMPT_S3, "s3")}
            className="text-left rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50"
          >
            <p className="font-medium">Copy the structured prompts for:</p>
            <p className="text-sm text-neutral-800 mt-1">Stage 3: Problem Validation</p>
            {copied === "s3" && <p className="mt-1 text-xs text-green-600">Copied!</p>}
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
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

      {/* Research — sequential */}
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

      {/* Teaching — sequential */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 border-t border-neutral-100">
        <h2 className="text-2xl font-semibold">Teaching</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-800 text-sm">
          <li>ENT 3315 — Starting &amp; Managing a Business</li>
          <li>Seminars</li>
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

      {/* NOTE: Success Stories / Media intentionally removed from the home page for now */}
    </Layout>
  );
}

