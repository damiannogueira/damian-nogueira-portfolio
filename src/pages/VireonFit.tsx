function VireonFit() {
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
          <p className="case-label">02 / VireonFit</p>

          <h1>
            Turning an overbuilt fitness idea into a focused personal training
            experience.
          </h1>

          <p className="case-intro">
            VireonFit is a personal AI-assisted training app that combines
            workout routines, progress tracking, gamification, and weekly
            adjustments based on training consistency.
          </p>

          <div className="case-meta">
            <div>
              <p className="case-meta-label">Project type</p>
              <p>Independent personal project</p>
            </div>

            <div>
              <p className="case-meta-label">My role</p>
              <p>
                Product direction, frontend flows, Supabase integration, testing
                and iteration
              </p>
            </div>

            <div>
              <p className="case-meta-label">Status</p>
              <p>Live web app · Still being refined</p>
            </div>
          </div>

          <a
            className="case-primary-link"
            href="https://vireonfitapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            View live project ↗
          </a>
        </section>

        <section className="case-image-section">
          <img
            src="/images/vireonfit/vireonfit-weekly-adjustment-dashboard.png"
            alt="VireonFit dashboard showing experience, streaks, weekly activity, and a weekly training adjustment"
          />

          <p className="case-caption">
            Current dashboard — training progress, gamification, and the Weekly
            Adjustment system in one view.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">01</p>

          <div className="case-text-content">
            <h2>The problem</h2>

            <p>
              The original idea came from observing how workout progress and
              routine changes were often managed informally. Trainers needed a
              better way to follow how people were improving, while users also
              needed a clearer view of their own routines and progress.
            </p>

            <p>
              I initially tried to solve both sides at the same time: the
              training experience for individual users and the management needs
              of trainers and gyms.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">02</p>

          <div className="case-text-content">
            <h2>What I built and decided</h2>

            <p>
              I built VireonFit independently using React, TypeScript, Vite,
              Tailwind CSS, and Supabase. AI tools helped me with parts of the
              implementation, while I remained responsible for the product
              direction, feature decisions, scope, user flows, testing, and
              iteration.
            </p>

            <p>
              Managing Supabase gave me practical experience with application
              data and authentication. It also showed me that adding technical
              complexity can slow down product validation when the main user
              problem is still being tested.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">03</p>

          <div className="case-text-content">
            <h2>What didn&apos;t work — and the pivot</h2>

            <p>
              The first version became too broad. It combined personal training,
              gym administration, trainers, students, and manually managed
              routines in the same product.
            </p>

            <p>
              When trainers tested the concept, the experience was not clear
              enough. It was difficult to understand which parts were meant for
              gyms and which were for individual users.
            </p>

            <p>
              I removed the gym-management direction and narrowed the product to
              one main experience: a personal training app assisted by AI. The
              focus became following routines, recording workouts, tracking
              progress, and using XP, levels, achievements, and streaks to
              support motivation.
            </p>
          </div>
        </section>

        <section className="case-image-section">
          <img
            src="/images/vireonfit/vireonfit-active-workout-flow.png"
            alt="VireonFit active workout screen showing exercises, set progress, movement instructions, and the Begin action"
          />

          <p className="case-caption">
            Active workout flow — evidence of the core user task: following and
            completing a real training session.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">04</p>

          <div className="case-text-content">
            <h2>Result and current state</h2>

            <p>
              VireonFit currently works as a web-based trial version and can be
              installed from compatible browsers. The product direction now
              centers on AI-assisted routines, workout tracking, progression,
              and gamification.
            </p>

            <p>
              A small group of people reacted positively to the idea and the
              experience, but that feedback did not become sustained use. Most
              testers continued training with their usual gym instructor.
            </p>

            <p>
              The planned Pro version is not finished, so I do not present
              VireonFit as a completed commercial product.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">05</p>

          <div className="case-text-content">
            <h2>What I learned</h2>

            <p>
              One of the most important lessons was that positive feedback is
              not the same as behavior change. People can like a product without
              changing an existing habit or replacing a service they already
              trust.
            </p>

            <p>
              I would validate continued use earlier by running longer tests and
              observing whether people actually complete routines, return to the
              app, and rely on it consistently instead of only asking whether
              they liked the first experience.
            </p>

            <p>
              I also learned to reduce scope earlier and avoid adding technical
              or product complexity before validating the central user journey.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">06</p>

          <div className="case-text-content">
            <h2>Future direction</h2>

            <p>
              The current direction is to keep VireonFit focused on the personal
              AI-assisted training experience rather than bringing gym
              administration back into the product.
            </p>

            <p>
              I want to continue improving the trial experience and test it with
              a smaller group over a longer period before investing more work in
              unfinished paid features.
            </p>
          </div>
        </section>

        <section className="case-closing">
          <p className="section-label">What this project shows</p>

          <h2>
            VireonFit shows how I learned to reduce scope, focus a product around
            one user journey, and distinguish positive feedback from evidence of
            continued use.
          </h2>

          <a className="hero-cta" href="/#contact">
            Contact me about a junior frontend opportunity
          </a>
        </section>
      </main>
    </>
  )
}

export default VireonFit