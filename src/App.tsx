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
      </main>
    </>
  )
}

export default App