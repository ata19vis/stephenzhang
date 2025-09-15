import Layout from "../components/Layout";

export default function Research() {
  return (
    <Layout title="Research" description="Featured papers in top entrepreneurship and management journals.">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Research</h1>
        <p className="mt-3 text-neutral-700 max-w-prose">
          Featured papers in top entrepreneurship and management journals.
        </p>

        <ol className="mt-8 space-y-4 list-decimal pl-6 text-sm text-neutral-800">
          <li>
            Zhang, S. X., &amp; Ertug, G. (2025). Organization research as an applied science: Lessons from fields that shape
            practice and policy. <em>Organization Science</em>.
          </li>
          <li>
            Zhang, Z., Mount, M., &amp; Zhang, S. X. (2025). A database of chief financial officer turnover and dismissal in
            S&amp;P 1500 firms, 2000–2022. <em>Strategic Management Journal</em>.
          </li>
          <li>
            Adomako, S., Zhang, S. X., &amp; Medase, K. (2024). How and when adversity breeds ingenuity in an emerging market:
            Environmental threats, co-innovation, and frugal innovation. <em>Research Policy</em>.
          </li>
          <li>
            Tang, J., Ye, W., Hu, M., Zhang, S. X., &amp; Khan, S. (2024). The gendered effect of populism on innovation.
            <em> Journal of Business Venturing</em>.
          </li>
          <li>
            Wang, W., Eddleston, K., Zhang, S. X., Chirico, F., Liang, Q., &amp; Deng, W. (2023). Family diversity and business
            start-up: Do family meals feed the fire of entrepreneurship? <em>Entrepreneurship Theory and Practice</em>.
          </li>
          <li>
            Wan, X., Zhang, S. X., &amp; Wei, F. (2022). CEO–TMT congruence in growth-need strength and firm growth.
            <em> Journal of Management Studies</em>.
          </li>
          <li>
            Chin, M. K., Zhang, S. X., Afshar-Jahanshahi, A., &amp; Nadkarni, S. (2021). The effect of two dimensions of CEO
            political ideology on corporate entrepreneurship. <em>Academy of Management Journal</em>, 64(4), 1213–1235.
          </li>
          <li>
            Tang, S., Nadkarni, S., Wei, L.-Q., &amp; Zhang, S. X. (2020). Balancing the yin and yang: TMT gender diversity,
            psychological safety, and firm strategic orientation in Chinese high-tech SMEs. <em>Academy of Management Journal</em>.
          </li>
          <li>
            Zhang, S. X., Gao, R., Odeh, N., &amp; Leatherbee, M. (2020). A micro-foundational model of real options reasoning:
            The roles of individual search propensity and perceived uncertainty. <em>Strategic Entrepreneurship Journal</em>.
          </li>
          <li>
            Schmitt, A., Rosing, K., Zhang, S. X., &amp; Leatherbee, M. (2018). Facing the challenge of uncertainty: The role of
            entrepreneurial self-efficacy for exploration and business opportunity identification under perceived uncertainty.
            <em> Entrepreneurship Theory and Practice</em>, 42(6), 835–859.
          </li>
          <li>
            Zhang, S. X., &amp; Cueto, J. (2017). The study of bias in entrepreneurship. <em>Entrepreneurship Theory and Practice</em>,
            41(3), 419–454.
          </li>
          More publications can be found in my CV in about me.
        </ol>

        <div className="mt-8">
          <a href="/cv.pdf" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200">
            Download CV (PDF)
          </a>
        </div>
      </section>
    </Layout>
  );
}
