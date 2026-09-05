import ContactForm from "../components/ContactForm"

function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="site-name" href="/">
            Damián Nogueira
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero-label">Frontend-Focused Full-Stack Developer</p>

          <h1>
            I build clear, functional products around the real tasks users need
            to complete.
          </h1>

          <p className="hero-description">
            I&apos;m a frontend-focused full-stack developer with practical backend,
            database, and AI-assisted engineering experience. I work across
            frontend interfaces, backend APIs, application data, and AI-assisted
            workflows while continuing to build depth as a junior developer.
          </p>

          <a className="hero-cta" href="#contact">
            Contact me about a junior development opportunity
          </a>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="section-label">Selected Work</p>
            <h2>Projects built around real user needs.</h2>
          </div>

          <article className="project-card">
            <div className="project-image">
              <img
                src="/images/skillentis/skillentis-evolution-dashboard.png"
                alt="Skillentis developer evolution dashboard showing growth metrics and evolution charts"
                width="1893"
                height="902"
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <div>
                <p className="project-number">01</p>
                <h3>Skillentis</h3>
              </div>

              <p className="project-description">
                A developer evolution platform that turns public GitHub activity
                into evidence of consistency, architecture growth,
                collaboration, and professional practices.
              </p>

              <a
                className="project-link"
                href="/skillentis"
                aria-label="View Skillentis case study"
              >
                View case study →
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img
                src="/images/vireonfit/vireonfit-weekly-adjustment-dashboard.png"
                alt="VireonFit training dashboard showing experience, streaks, and a weekly load adjustment"
                width="1895"
                height="906"
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <div>
                <p className="project-number">02</p>
                <h3>VireonFit</h3>
              </div>

              <p className="project-description">
                A personal AI-assisted training app that combines workout
                tracking, progression, gamification, and weekly adjustments
                based on training consistency.
              </p>

              <a
                className="project-link"
                href="/vireonfit"
                aria-label="View VireonFit case study"
              >
                View case study →
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img
                src="/images/food-store/food-store-customer-catalogue.png"
                alt="Food Store customer catalogue showing categories, search, sorting, and available products"
                width="1352"
                height="643"
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <div>
                <p className="project-number">03</p>
                <h3>Food Store</h3>
              </div>

              <p className="project-description">
                A full-stack food ordering application with authentication,
                product browsing, cart and checkout, order management, and an
                admin area built as an academic project · UTN Programming degree.
              </p>

              <a
                className="project-link"
                href="/food-store"
                aria-label="View Food Store case study"
              >
                View case study →
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img
                src="/images/lynkroam/lynkroam-decision-workspace.png"
                alt="Lynkroam visual travel research workspace showing travel options organized by decision status"
                width="1898"
                height="912"
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <div>
                <p className="project-number">04</p>
                <h3>Lynkroam</h3>
                <p className="project-status">Currently building</p>
              </div>

              <p className="project-description">
                A visual travel research workspace that turns scattered travel
                links into organized, source-aware trip decisions. The current
                build explores how travel options can move through decision
                states while keeping their original context visible.
              </p>

              <a
                className="project-link"
                href="/lynkroam"
                aria-label="View Lynkroam case study"
              >
                View case study →
              </a>
            </div>
          </article>
        </section>

        <section className="about-section" id="about">
          <div className="about-heading">
            <p className="section-label">About</p>
            <h2>I care about building products that make the next step clear.</h2>
          </div>

          <div className="about-content">
            <p>
              Frontend is my strongest and most recurring area. I focus on clear
              interfaces and user flows while also building the backend services
              and database-backed functionality those experiences depend on.
            </p>

            <p>
              Across my projects, I work mainly with TypeScript and React on
              frontend interfaces and product flows. Skillentis, VireonFit, and
              Food Store also give me hands-on experience with backend APIs and
              services, authentication, persistence, and database-backed
              functionality, while AI-assisted engineering workflows support how
              I plan, implement, review, and iterate.
            </p>

            <p>
              I&apos;m continuing my programming studies and building depth across
              these areas while looking for a junior frontend or full-stack
              opportunity where I can contribute, keep learning, and grow.
            </p>
          </div>
        </section>

        <section className="contact-section" id="writing">
          <p className="section-label">Writing</p>

          <div className="contact-content">
            <h2>Posts coming soon.</h2>

            <p>
              This space will contain short notes about frontend development,
              AI-assisted engineering, and lessons from building projects.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-label">Contact</p>

          <div className="contact-content">
            <h2>Let&apos;s talk about a junior development opportunity.</h2>

            <p>
              I&apos;m currently looking for a junior frontend or full-stack role
              where I can contribute to real products, continue learning, and
              grow as part of a development team.
            </p>

            <div className="contact-links">
              <a href="mailto:damian.nogueira@outlook.com">
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/damian-nogueira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/damiannogueira"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a href="/Damian_Nogueira_CV_2026.pdf" download>
                Download CV
              </a>

              <a
                href="https://calendly.com/damian-nogueira/intro-junior-frontend-full-stack-conversation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a conversation ↗
              </a>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
