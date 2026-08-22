function Skillentis() {
  return (
    <>
      <header className="case-header">
        <nav className="case-nav" aria-label="Case study navigation">
          <a className="site-name" href="/">
            Damián Nogueira
          </a>

          <a className="case-back-link" href="/#work">
            ← Back to work
          </a>
        </nav>
      </header>

      <main className="case-study">
        <section className="case-hero">
          <p className="case-label">01 / Skillentis</p>

          <h1>Showing developer growth, not just GitHub activity.</h1>

          <p className="case-intro">
            Skillentis is a developer evolution platform that turns public
            GitHub activity into clearer evidence of consistency, project
            evolution, architecture growth, collaboration, and professional
            practices.
          </p>

          <div className="case-meta">
            <div>
              <p className="case-meta-label">Project type</p>
              <p>Independent personal project</p>
            </div>

            <div>
              <p className="case-meta-label">My role</p>
              <p>Product direction, full-stack implementation and iteration</p>
            </div>

            <div>
              <p className="case-meta-label">Status</p>
              <p>Live and still being improved</p>
            </div>
          </div>

          <a
            className="case-primary-link"
            href="https://skillentisapp.com"
            target="_blank"
            rel="noreferrer"
          >
            View live project ↗
          </a>
        </section>

        <section className="case-image-section">
          <img
            src="/images/skillentis/skillentis-evolution-dashboard.png"
            alt="Current Skillentis developer evolution dashboard showing growth metrics, evolution graphs, and profile information"
          />

          <p className="case-caption">
            Current developer evolution dashboard — the main product direction
            after moving away from score-first evaluation.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">01</p>

          <div className="case-text-content">
            <h2>The problem</h2>

            <p>
              Developers with little or no professional experience often
              struggle to prove what they know. A CV or LinkedIn profile can
              show skills and projects, but it is still mostly a snapshot. It
              does not clearly show how someone has developed over time or what
              changed between their first projects and their current work.
            </p>

            <p>
              I wanted to explore whether public GitHub activity could be turned
              into something easier to understand: evidence of how a developer
              has evolved rather than simply another list of repositories.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">02</p>

          <div className="case-text-content">
            <h2>What I built and decided</h2>

            <p>
              I built and launched Skillentis as a full-stack product, implementing
              the React and TypeScript frontend and a Supabase-based architecture
              for authentication, persistent application data, and server-side
              processing. I also implemented the bilingual responsive interface,
              SEO and structured data, sitemap configuration, and production
              deployment.
            </p>

            <p>
              For the primary GitHub analysis flow, the frontend starts an
              authenticated Supabase Edge Function that accesses GitHub data,
              transforms the activity into Skillentis metrics and evolution
              signals, and persists the result. The frontend then follows the
              analysis job and renders the completed developer evolution
              dashboard.
            </p>

            <p>
              Lovable and other AI tools supported planning, implementation,
              debugging, and iteration. I directed the product, made the
              technical and user-flow decisions, reviewed generated changes,
              validated behavior, corrected the implementation, and decided what
              stayed in the product.
            </p>

            <p>
              I started by researching similar products and the problems
              early-career developers face when trying to demonstrate their
              skills. The product evolved through testing and iteration into a
              platform that analyzes public GitHub information and presents
              signals such as consistency, project evolution, architecture
              growth, collaboration, and professional practices.
            </p>

            <p>
              I also added shareable developer profiles, visual cards, and a
              fictional example profile so visitors can understand what the
              product does before analyzing their own GitHub account.
            </p>
          </div>
        </section>

        <section className="case-pivot-section">
          <div className="case-pivot-heading">
            <p className="case-section-number">03</p>

            <div>
              <h2>What didn&apos;t work — and the pivot</h2>

              <p>
                The first version relied too heavily on scoring. A single
                maturity number was easy to display, but difficult to trust and
                did not explain how a developer had actually progressed.
              </p>

              <p>
                I changed the product direction from judging developers with a
                score to showing evidence of evolution. Codexa remained as a
                secondary summary, while the main experience became the growth
                signals and their development over time.
              </p>
            </div>
          </div>

          <div className="case-comparison">
            <figure>
              <img
                src="/images/skillentis/skillentis-previous-scoring-version.png"
                alt="Previous Skillentis version focused on an overall developer score and maturity pillars"
              />

              <figcaption>
                Previous version — the product was centered too heavily on a
                single score.
              </figcaption>
            </figure>

            <figure>
              <img
                src="/images/skillentis/skillentis-evolution-dashboard.png"
                alt="Current Skillentis version focused on developer evolution and growth signals"
              />

              <figcaption>
                Current direction — evolution evidence is the main result, while
                Codexa is secondary.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">04</p>

          <div className="case-text-content">
            <h2>Result and current state</h2>

            <p>
              Skillentis is live and the developers who have tried it reacted
              positively to seeing their GitHub history presented as a clearer
              evolution story. However, sustained adoption has been much lower
              than I originally hoped.
            </p>

            <p>
              One important problem has been trust. Some developers were
              concerned about how their repositories or GitHub information
              might be accessed, even though Skillentis analyzes public GitHub
              data. That showed me that building the analysis was not enough:
              the product also needed to explain its data use much more clearly.
            </p>

            <p>
              Visibility and distribution are still unresolved challenges, so I
              do not present the project as a widely adopted product.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">05</p>

          <div className="case-text-content">
            <h2>What I learned</h2>

            <p>
              I would validate trust and understanding of data use much earlier.
              I would also test distribution at the same time as the product
              instead of assuming that building useful features would
              automatically bring users.
            </p>

            <p>
              I would start with a smaller group of developers, test the
              onboarding language, shareable cards, example profiles, and
              acquisition messages before investing more time in expanding the
              analysis.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">06</p>

          <div className="case-text-content">
            <h2>Future direction</h2>

            <p>
              The next priority is continuing to validate the core experience,
              trust model, and product adoption. If the product becomes more
              stable and validated, I may later explore adapting the experience
              for mobile devices and possible distribution through the Apple
              App Store and Google Play.
            </p>

            <p>
              Those are future possibilities, not features that are currently
              available.
            </p>
          </div>
        </section>

        <section className="case-closing">
          <p className="section-label">What this project shows</p>

          <h2>
            Skillentis shows how I approach a real product problem, test
            assumptions, change direction, and continue improving the result.
          </h2>

          <a className="hero-cta" href="/#contact">
            Contact me about a junior development opportunity
          </a>
        </section>
      </main>
    </>
  )
}

export default Skillentis
