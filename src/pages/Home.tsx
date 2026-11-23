import ContactForm from "../components/ContactForm"

const projects = [
  {
    number: "01",
    name: "Skillentis",
    href: "/skillentis",
    image: "/images/skillentis/skillentis-evolution-dashboard.png",
    alt: "Skillentis developer evolution dashboard showing growth metrics and evolution charts",
    width: 1893,
    height: 902,
    context: "Independent product",
    role: "Product direction · Full-stack implementation",
    stack: "React · TypeScript · Supabase",
    description: "A developer evolution platform that turns public GitHub activity into evidence of consistency, architecture growth, collaboration, and professional practices.",
  },
  {
    number: "02",
    name: "VireonFit",
    href: "/vireonfit",
    image: "/images/vireonfit/vireonfit-weekly-adjustment-dashboard.png",
    alt: "VireonFit training dashboard showing experience, streaks, and a weekly load adjustment",
    width: 1895,
    height: 906,
    context: "Independent AI-assisted product",
    role: "Product direction · Full-stack implementation",
    stack: "React · TypeScript · Supabase",
    description: "A personal AI-assisted training app that combines workout tracking, progression, gamification, and weekly adjustments based on training consistency.",
  },
  {
    number: "03",
    name: "FixHub",
    href: "/fixhub",
    image: "/images/fixhub/fixhub-dashboard.png",
    alt: "FixHub management dashboard summarizing work orders and workshop activity",
    width: 1917,
    height: 911,
    context: "Team project · Final Integrative Project at UTN",
    role: "Backend foundation · Core modules · Integration",
    stack: "React · TypeScript · Java · Spring Boot · MySQL",
    description: "A full-stack workshop management application developed by a three-person team, covering clients, equipment, work orders, budgets, inventory, and role-based access.",
  },
  {
    number: "04",
    name: "Food Store",
    href: "/food-store",
    image: "/images/food-store/food-store-customer-catalogue.png",
    alt: "Food Store customer catalogue showing categories, search, sorting, and available products",
    width: 1352,
    height: 643,
    context: "Individual academic project · UTN",
    role: "Full-stack implementation",
    stack: "TypeScript · Vite · Java · Spring Boot · MySQL",
    description: "A full-stack food ordering application with authentication, product browsing, cart and checkout, order management, and an admin area.",
  },
  {
    number: "05",
    name: "Lynkroam",
    href: "/lynkroam",
    image: "/images/lynkroam/lynkroam-decision-workspace.png",
    alt: "Lynkroam visual travel research workspace showing travel options organized by decision status",
    width: 1898,
    height: 912,
    context: "Independent project · Currently building",
    role: "Product direction · Frontend foundation",
    stack: "Next.js · React · TypeScript · Tailwind CSS",
    description: "A visual travel research workspace that turns scattered travel links into organized, source-aware trip decisions while preserving their original context.",
  },
]

function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="site-name" href="/">Damián Nogueira</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero-label">Frontend AI Engineer &amp; Full-Stack Developer</p>
          <h1>I build clear, functional products around the real tasks users need to complete.</h1>
          <p className="hero-description">
            I build modern frontend experiences with React, TypeScript, and
            Next.js, using AI-assisted engineering workflows to plan, implement,
            and iterate. My full-stack projects also cover APIs, backend
            services, data, authentication, testing, and deployment.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View selected work</a>
            <a className="button button-secondary" href="#contact">Contact me</a>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="section-label">Selected Work</p>
            <h2>Projects built around real user needs.</h2>
          </div>

          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <a className="project-image-link" href={project.href} aria-label={`View ${project.name} case study`}>
                <div className="project-image">
                  <img src={project.image} alt={project.alt} width={project.width} height={project.height} loading="lazy" />
                </div>
              </a>
              <div className="project-content">
                <div className="project-identity">
                  <p className="project-number">{project.number}</p>
                  <h3>{project.name}</h3>
                  <p className="project-context">{project.context}</p>
                </div>
                <div className="project-summary">
                  <p className="project-role">{project.role}</p>
                  <p className="project-stack">{project.stack}</p>
                  <p className="project-description">{project.description}</p>
                </div>
                <a className="project-link" href={project.href} aria-label={`View ${project.name} case study`}>
                  View case study →
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="experience-section" aria-labelledby="experience-heading">
          <div className="section-heading section-heading-compact">
            <p className="section-label">Experience &amp; Learning</p>
            <h2 id="experience-heading">Building depth in frontend and applied AI.</h2>
          </div>
          <div className="experience-panel">
            <div className="experience-intro">
              <p className="experience-name">FlyRank AI</p>
              <p>Practical learning tracks that support my frontend AI engineering focus alongside portfolio projects where I apply the work.</p>
            </div>
            <ul className="experience-list">
              <li><span>Frontend AI Engineering</span><strong>Completed</strong></li>
              <li><span>AI Fluency</span><strong>Completed</strong></li>
              <li><span>Machine Learning</span><strong>In progress</strong></li>
            </ul>
          </div>
        </section>

        <section className="capabilities-section" aria-labelledby="capabilities-heading">
          <div className="section-heading section-heading-compact">
            <p className="section-label">Capabilities</p>
            <h2 id="capabilities-heading">A frontend focus with full-stack delivery.</h2>
          </div>
          <div className="capabilities-grid">
            <article><h3>Frontend</h3><p>React · TypeScript · Next.js · Vite</p></article>
            <article><h3>AI Engineering</h3><p>AI-assisted planning · Implementation · Review · Validation</p></article>
            <article><h3>Full-Stack</h3><p>Java · Spring Boot · REST APIs · SQL · Authentication</p></article>
            <article><h3>Delivery</h3><p>Testing · Git/GitHub · Docker · Vercel · Render · Railway</p></article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-heading">
            <p className="section-label">About</p>
            <h2>I care about building products that make the next step clear.</h2>
          </div>
          <div className="about-content">
            <p>Frontend is where I do my strongest and most recurring work. I care about clear interfaces, understandable product flows, and implementation decisions that support the people using them.</p>
            <p>I also enjoy working beyond the interface when a product needs it, from backend services and application data to testing and deployment. I&apos;m growing through focused training, independent products, academic work, and collaboration with other developers.</p>
            <p>I&apos;m looking for a junior frontend or full-stack opportunity where I can contribute to real products, keep learning, and grow as part of a development team.</p>
          </div>
        </section>

        <section className="contact-section" id="writing" hidden>
          <p className="section-label">Writing</p>
          <div className="contact-content">
            <h2>Posts coming soon.</h2>
            <p>This space will contain short notes about frontend development, AI-assisted engineering, and lessons from building projects.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-label">Contact</p>
          <div className="contact-content">
            <h2>Let&apos;s build something useful.</h2>
            <p>I&apos;m open to junior frontend and full-stack opportunities where I can contribute to real products and continue developing my frontend AI engineering practice.</p>
            <div className="contact-links">
              <a className="contact-link-primary" href="mailto:damian.nogueira@outlook.com">Email me</a>
              <a href="https://www.linkedin.com/in/damian-nogueira/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href="/Damian_Nogueira_CV_2026.pdf" download>Download CV</a>
              <a href="https://github.com/damiannogueira" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a className="contact-link-secondary" href="https://calendly.com/damian-nogueira/intro-junior-frontend-full-stack-conversation" target="_blank" rel="noopener noreferrer">Book a conversation ↗</a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
