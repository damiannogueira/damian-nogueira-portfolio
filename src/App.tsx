function App() {
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
          <p className="hero-label">Frontend Developer</p>

          <h1>
            I build clear, functional frontend interfaces around the real tasks
            users need to complete.
          </h1>

          <p className="hero-description">
            I build clear and functional frontend interfaces that help people
            complete real tasks, as shown through projects like Skillentis,
            VireonFit, and Food Store. I&apos;m currently looking for a junior
            frontend role where I can contribute to real products, keep learning,
            and grow as a developer.
          </p>

          <a className="hero-cta" href="#contact">
            Contact me about a junior frontend opportunity
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

              <a className="project-link" href="/skillentis">
                View case study →
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img
                src="/images/vireonfit/vireonfit-weekly-adjustment-dashboard.png"
                alt="VireonFit training dashboard showing experience, streaks, and a weekly load adjustment"
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

              <a className="project-link" href="/vireonfit">
                View case study →
              </a>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default App