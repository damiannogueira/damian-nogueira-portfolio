import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit] = useForm("myeyzdbe")
  const hasFormError = (state.errors?.getFormErrors().length ?? 0) > 0

  return (
    <div className="contact-form-container">
      <h3>Send a message</h3>

      {state.succeeded ? (
        <p className="contact-form-success" role="status">
          Thanks — your message was sent successfully. I&apos;ll get back to you
          soon.
        </p>
      ) : (
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          aria-busy={state.submitting}
        >
          <div className="contact-form-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              required
            />
            <ValidationError
              className="contact-form-error"
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
            <ValidationError
              className="contact-form-error"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={7}
              required
            />
            <ValidationError
              className="contact-form-error"
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {hasFormError && (
            <p className="contact-form-error" role="alert">
              Sorry, I couldn&apos;t send your message. Please check your connection
              and try again, or use one of the contact options above.
            </p>
          )}

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm
