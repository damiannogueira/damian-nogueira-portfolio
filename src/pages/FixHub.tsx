function FixHub() {
  return (
    <>
      <header className="case-header">
        <nav className="case-nav" aria-label="Case study navigation">
          <a className="site-name" href="/">Damián Nogueira</a>
          <a className="case-back-link" href="/#work">← Back to work</a>
        </nav>
      </header>

      <main className="case-study">
        <section className="case-hero">
          <p className="case-label">03 / FixHub</p>
          <h1>Connecting the full repair workflow in one system.</h1>
          <p className="case-intro">
            FixHub was developed collaboratively by a three-person team as our
            Final Integrative Project for the University Technical Degree in
            Programming at Universidad Tecnológica Nacional. This case study
            separates what the team delivered from the areas I personally
            implemented and helped integrate.
          </p>

          <div className="case-meta">
            <div>
              <p className="case-meta-label">Project type</p>
              <p>Full-stack web application · Team project</p>
            </div>
            <div>
              <p className="case-meta-label">My role</p>
              <p>Backend foundation, core modules, integration and deployment</p>
            </div>
            <div>
              <p className="case-meta-label">Context</p>
              <p>Final Integrative Project · UTN</p>
            </div>
          </div>

          <div className="case-actions">
            <a className="case-primary-link" href="https://fixhub-five.vercel.app" target="_blank" rel="noreferrer">
              View live project ↗
            </a>
            <a className="case-secondary-link" href="https://github.com/damiannogueira/fixhub" target="_blank" rel="noreferrer">
              View repository ↗
            </a>
          </div>
        </section>

        <section className="case-image-section">
          <img
            src="/images/fixhub/fixhub-dashboard.png"
            alt="FixHub management dashboard with open-order, diagnostic, pickup, and low-stock summaries"
            width="1917"
            height="911"
            loading="lazy"
          />
          <p className="case-caption">
            The management dashboard brings current repair activity, order
            status, and stock signals into one operational view.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">01</p>
          <div className="case-text-content">
            <h2>The problem</h2>
            <p>
              The project started from a real pattern observed in technical
              service businesses: repair information was spread across
              spreadsheets, messages, phone calls, and handwritten records.
              That fragmentation made it harder to follow a device from intake
              through diagnosis, approval, repair, and delivery.
            </p>
            <p>
              After additional research with other workshops showed similar
              workflows, the team defined an MVP focused on centralizing the
              repair lifecycle while keeping responsibilities and data access
              clear for administrators, receptionists, technicians, and clients.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">02</p>
          <div className="case-text-content">
            <h2>What the team built</h2>
            <p>
              The team built a decoupled full-stack application with a React,
              TypeScript, and Vite frontend and a Java and Spring Boot backend.
              It uses Spring Security and JWT for authentication and
              authorization, with MySQL for persistence.
            </p>
            <p>
              The application connects user and role management, clients and
              their equipment, work orders, diagnoses, technical records,
              budgets, and inventory. Role and ownership rules provide separate
              management, technician, and client workflows while the work-order
              state model preserves the sequence of each repair.
            </p>
          </div>
        </section>

        <section className="case-image-section">
          <img
            src="/images/fixhub/fixhub-work-orders.png"
            alt="FixHub work-order list with client, equipment, status, intake date, and assigned technician columns"
            width="1915"
            height="820"
            loading="lazy"
          />
          <p className="case-caption">
            Work orders connect each client and device to a controlled repair
            state and an assigned technician.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">03</p>
          <div className="case-text-content">
            <h2>My contribution</h2>
            <p>
              My contribution focused first on the technical foundation: I set
              up the initial Spring Boot backend and repository structure, then
              implemented the clients and equipment module and the core work
              order module, including its states, assignment rules, history,
              access checks, and automated tests.
            </p>
            <p>
              I also unified the backend&apos;s unauthenticated and forbidden
              responses so the frontend could handle 401 and 403 cases
              consistently. During the final integration, I corrected frontend
              session, navigation, and API-client behavior and added regression
              tests around token expiry, delayed responses, and cross-tab
              session changes.
            </p>
            <p>
              As repository owner, I maintained the branch and pull request
              workflow and reviewed integrations. I also prepared the backend
              container and production configuration, including the TLS-verified
              connection from Render to Railway MySQL.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">04</p>
          <div className="case-text-content">
            <h2>Architecture and deployment</h2>
            <p>
              The production architecture keeps the frontend, API, and database
              separate. The Vite frontend is published through Vercel, the
              Spring Boot backend runs from a multi-stage Docker image on
              Render, and MySQL is hosted on Railway.
            </p>
            <p>
              Environment-specific configuration stays outside the codebase.
              The backend container runs as a non-root user and establishes the
              database connection with certificate verification rather than
              disabling TLS checks. The live environment depends on the
              availability and credits of those external services.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">05</p>
          <div className="case-text-content">
            <h2>Validation and result</h2>
            <p>
              The completed MVP demonstrates the repair lifecycle across the
              four roles, from registering a client and device through work,
              budget approval, stock consumption, and delivery. Automated
              backend tests cover security, controllers, services,
              repositories, and transactions; frontend tests cover session,
              routing, API, login, and navigation behavior.
            </p>
            <p>
              Task branches and reviewed pull requests supported parallel work,
              while shared domain rules and API contracts kept the modules
              aligned.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">06</p>
          <div className="case-text-content">
            <h2>What I learned</h2>
            <p>
              FixHub strengthened my understanding of keeping domain rules in
              the service layer, testing state transitions and permissions, and
              integrating independently developed frontend and backend work.
            </p>
            <p>
              It also gave me practical experience preparing a multi-service
              application for production and resolving issues that only become
              visible at system boundaries: authentication state, error
              contracts, deployment configuration, and secure database
              connectivity.
            </p>
          </div>
        </section>

        <section className="case-closing">
          <p className="section-label">What this project shows</p>
          <h2>
            FixHub shows how I contribute inside a team: owning concrete backend
            modules, aligning error responses and session behavior, reviewing
            shared work, and preparing deployment configuration.
          </h2>
          <a className="hero-cta" href="/#contact">
            Contact me about a junior development opportunity
          </a>
        </section>
      </main>
    </>
  )
}

export default FixHub
