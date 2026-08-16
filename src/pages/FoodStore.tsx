function FoodStore() {
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
          <p className="case-label">03 / Food Store</p>

          <h1>
            Building a complete customer and admin flow around a real backend.
          </h1>

          <p className="case-intro">
            Food Store is a full-stack academic e-commerce project where
            customers can browse products, complete purchases, and follow their
            orders, while administrators manage products, categories, and order
            status.
          </p>

          <div className="case-meta">
            <div>
              <p className="case-meta-label">Project type</p>
              <p>
                Individual academic project for Programming III, a course in
                UTN&apos;s university-level Programming degree
              </p>
            </div>

            <div>
              <p className="case-meta-label">Stack</p>
              <p>
                TypeScript, Vite, Java, Spring Boot, JPA/Hibernate and MySQL
              </p>
            </div>

            <div>
              <p className="case-meta-label">Result</p>
              <p>Completed — final academic grade: 10</p>
            </div>
          </div>
        </section>

        <section className="case-image-section">
          <img
            src="/images/food-store/food-store-customer-catalogue.png"
            alt="Food Store customer catalogue showing categories, search, sorting, products, prices, and cart navigation"
          />

          <p className="case-caption">
            Customer catalogue — the main shopping experience with categories,
            search, sorting, product information, cart access, and order
            history.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">01</p>

          <div className="case-text-content">
            <h2>The assignment and challenge</h2>

            <p>
              The project was developed individually for Programming III, a
              course in the university-level Programming degree at Universidad
              Tecnológica Nacional (UTN). The requirement was not only to create
              separate screens, but to build a complete application with
              customers, administrators, products, categories, orders, and
              persistent data.
            </p>

            <p>
              The main challenge was connecting the frontend experience to a
              functional backend so that both sides of the application worked
              as one system.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">02</p>

          <div className="case-text-content">
            <h2>The customer journey</h2>

            <p>
              I built the customer flow from registration and login through
              product browsing, search, filtering, product detail, cart,
              checkout, and order tracking.
            </p>

            <p>
              The goal was to make the complete purchase journey work instead
              of treating each screen as an isolated exercise.
            </p>
          </div>
        </section>

        <section className="case-image-section">
          <img
            src="/images/food-store/food-store-cart-checkout.png"
            alt="Food Store shopping cart showing selected products, totals, delivery information, payment method, notes, and order confirmation"
          />

          <p className="case-caption">
            Cart and checkout — selected products, quantities, subtotals,
            delivery information, payment method, optional notes, and the final
            order action.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">03</p>

          <div className="case-text-content">
            <h2>The administrator journey</h2>

            <p>
              The administrator side needed a different workflow. I separated
              it from the customer experience and created views for managing
              categories, products, and orders.
            </p>

            <p>
              Administrators can review orders, inspect customer and product
              details, filter by status, and update the state of an order. The
              role-based flow also required administrators to be redirected to
              their own area after login.
            </p>
          </div>
        </section>

        <section className="case-image-section">
          <img
            src="/images/food-store/food-store-admin-order-management.png"
            alt="Food Store administrator order management screen showing customer details, products, current order status, and status update controls"
          />

          <p className="case-caption">
            Administrative order management — a complete order with customer
            details, line items, current status, and the action for changing its
            state.
          </p>

          <p className="case-caption">
            Test data note: The phone number and delivery address shown in this
            screenshot are fictional test data. Only my name is real.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">04</p>

          <div className="case-text-content">
            <h2>Frontend and backend integration</h2>

            <p>
              The frontend was connected to a Java and Spring Boot REST API. The
              backend used JPA and Hibernate for persistence, DTOs for data
              transfer, validation, centralized error handling, and MySQL for
              the main application data.
            </p>

            <p>
              Swagger documentation helped me inspect and test the API
              independently from the frontend. This made it easier to determine
              whether a problem came from the interface, the request being sent,
              or the backend response.
            </p>
          </div>
        </section>

        <section className="case-image-section">
          <img
            src="/images/food-store/food-store-swagger-api-overview.png"
            alt="Swagger documentation for the Food Store REST API showing product, order, category, user, and authentication controllers"
          />

          <p className="case-caption">
            Swagger API overview — documented controllers for products, orders,
            categories, users, and authentication behind the frontend.
          </p>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">05</p>

          <div className="case-text-content">
            <h2>Problems I solved</h2>

            <p>
              One issue incorrectly redirected administrator users after login,
              so I corrected the role-based flow to send each user to the
              appropriate part of the application.
            </p>

            <p>
              I also fixed the order detail experience so that the products
              associated with an order were displayed correctly. During the
              backend work, I moved to Maven after encountering configuration
              conflicts with the previous setup.
            </p>

            <p>
              The project also required me to work through validation, backend
              responses, customer and administrator states, and corrections
              requested during the academic review.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">06</p>

          <div className="case-text-content">
            <h2>Result and feedback</h2>

            <p>
              The completed application covered the required customer and
              administrator workflows and received a final academic grade of
              10.
            </p>

            <p>
              During the review, the professor asked for clearer exclusive
              administrator access and corrections to the order-detail
              experience. I applied those changes before the final delivery.
            </p>

            <p>
              The professor also recommended improving the frontend toward a
              more consistent single-page application experience.
            </p>
          </div>
        </section>

        <section className="case-text-section">
          <p className="case-section-number">07</p>

          <div className="case-text-content">
            <h2>What I learned and would improve</h2>

            <p>
              If I rebuilt Food Store today, I would define the route structure
              and shared layouts earlier instead of allowing screens to grow
              independently.
            </p>

            <p>
              I would also create more reusable components, organize shared
              frontend state more clearly, and define the communication
              contract between the frontend and API before implementing every
              screen.
            </p>

            <p>
              The project helped me understand that a working full-stack
              application depends as much on planning the connections between
              its parts as on building each individual feature.
            </p>
          </div>
        </section>

        <section className="case-closing">
          <p className="section-label">What this project shows</p>

          <h2>
            Food Store shows that I can connect a frontend to a real backend,
            build complete user flows, respond to technical feedback, and carry
            a project through to a working final delivery.
          </h2>

          <a className="hero-cta" href="/#contact">
            Contact me about a junior frontend opportunity
          </a>
        </section>
      </main>
    </>
  )
}

export default FoodStore