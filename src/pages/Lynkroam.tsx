function Lynkroam() {
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
          <p className="case-label">04 / Lynkroam · Currently building</p>

          <h1>
            Turning scattered travel research into organized trip decisions.
          </h1>

          <p className="case-intro">
            Lynkroam is a visual travel research workspace designed to help
            independent travelers collect information from different sources,
            organize it around a trip, and turn scattered research into clearer
            decisions.
          </p>

          <div className="case-meta">
            <div>
              <p className="case-meta-label">Project type</p>
              <p>Frontend project currently in development</p>
            </div>

            <div>
              <p className="case-meta-label">Stack</p>
              <p>Next.js 16, React 19, TypeScript and Tailwind CSS 4</p>
            </div>

            <div>
              <p className="case-meta-label">Status</p>
              <p>Currently building · Public preview available</p>
            </div>
          </div>

          <div className="case-actions">
            <a
              className="case-primary-link"
              href="https://lynkroam.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View live preview ↗
            </a>

            <a
              className="case-secondary-link"
              href="https://github.com/damiannogueira/lynkroam"
              target="_blank"
              rel="noreferrer"
            >
              View source code ↗
            </a>
          </div>
        </section>

        <section className="case-image-section">
          <img
            src="/images/lynkroam/lynkroam-decision-workspace.png"
            alt="Lynkroam visual travel research workspace showing research cards organized into Inbox, Considering, Shortlisted, Booked, and Rejected states"
          />

          <p className="case-caption">
            Current Visual Research Workspace — a fictional Barcelona sample
            trip showing how travel options can be kept visible while moving
            through decision states.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">01</p>

          <div className="case-text-content">
            <h2>The problem</h2>

            <p>
              Travel planning often means collecting information from many
              disconnected places: airline websites, hotel listings, Airbnb or
              Booking pages, maps, blogs, videos, restaurant recommendations,
              tours, and transport options.
            </p>

            <p>
              The problem is not finding information. It is keeping all of
              those sources organized well enough to compare options and make
              decisions.
            </p>

            <p>
              I wanted to explore the space between a generic bookmark manager
              and a full itinerary generator: a workspace focused specifically
              on the research-to-decision stage of travel planning.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">02</p>

          <div className="case-text-content">
            <h2>The product direction</h2>

            <p>
              The product is organized around a trip as the main container for
              travel research. The intended journey starts by creating a trip
              and collecting public travel links from different sources.
            </p>

            <p>
              Those sources can then become visual research cards that preserve
              their original context and can eventually include information
              such as category, notes, estimated price, location, and decision
              status.
            </p>

            <p>
              The broader direction is to help a traveler move from collecting
              information to comparing options and making decisions without
              forcing them to build a final itinerary too early.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">03</p>

          <div className="case-text-content">
            <h2>What is implemented now</h2>

            <p>
              The current implementation establishes the frontend scaffold,
              route structure, information architecture, and the visual
              workspace used to represent travel research.
            </p>

            <p>
              The workspace demonstrates planning states including Inbox,
              Considering, Shortlisted, Booked, and Rejected. These states make
              the central product idea visible: research items should support a
              decision process instead of remaining an unstructured collection
              of links.
            </p>

            <p>
              A public preview of the current build is deployed on Vercel so
              the implemented frontend can be explored while development
              continues.
            </p>

            <p>
              The current sample content is fictional and is used only to
              demonstrate the interface and information structure.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">04</p>

          <div className="case-text-content">
            <h2>Technical foundation</h2>

            <p>
              Lynkroam is being developed with Next.js 16, React 19,
              TypeScript, Tailwind CSS 4, and the App Router. Server Components
              are used by default where client-side behavior is not required.
            </p>

            <p>
              The current route structure includes a trips dashboard, trip
              creation, the main trip workspace, a links and sources view, an
              itinerary route, and a health-check route.
            </p>

            <p>
              At this stage, the technical goal is to keep the foundation
              understandable and maintainable while the core user flow is still
              being developed.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">05</p>

          <div className="case-text-content">
            <h2>What is intentionally not implemented yet</h2>

            <p>
              Lynkroam is still in development, so I keep planned functionality
              clearly separated from what the current build can actually
              demonstrate.
            </p>

            <p>
              Authentication, persistent user data, collaboration, advanced
              drag-and-drop interactions, maps integration, and AI-generated
              itinerary automation are not presented as completed features.
            </p>

            <p>
              Those ideas may be explored later, but the current priority is to
              make the basic travel research and decision-making experience
              clear first.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">06</p>

          <div className="case-text-content">
            <h2>What I am learning while building it</h2>

            <p>
              Lynkroam is helping me work more deliberately on product scope
              before adding complexity.
            </p>

            <p>
              Instead of starting with every possible travel feature, I am
              focusing first on one central problem: helping a traveler
              organize scattered research and move toward clearer decisions.
            </p>

            <p>
              I am also practicing how to separate current implementation from
              roadmap ideas so that an evolving project can still be presented
              accurately.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">07</p>

          <div className="case-text-content">
            <h2>Next steps</h2>

            <p>
              The next stages are focused on turning the current scaffold into
              a more usable research workflow and validating how the card and
              decision-state model works in practice.
            </p>

            <p>
              Persistence, metadata enrichment, and later itinerary features
              will only be added when they support a clearly validated part of
              the core experience.
            </p>
          </div>
        </section>

        <section className="case-closing">
          <p className="section-label">What this project shows</p>

          <h2>
            Lynkroam shows how I approach a product that is still being built:
            defining the problem, controlling scope, building the frontend
            foundation, and keeping implemented work clearly separated from
            future ideas.
          </h2>

          <a className="hero-cta" href="/#contact">
            Contact me about a junior frontend opportunity
          </a>
        </section>
      </main>
    </>
  )
}

export default Lynkroam