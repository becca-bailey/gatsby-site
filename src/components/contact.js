import { Fade } from "react-swift-reveal"
import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import { Form, Field, Input, Textarea } from "./form"
import Button from "./button"
import ModalContext from "../containers/modal-context"
import Modal from "./modal"

const initialState = {}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function Contact() {
  const [state, setState] = React.useState(initialState)
  const { showModal, hideModal } = React.useContext(ModalContext)

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    // Only submit if values have changed
    if (state !== initialState) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
        .then(() => {
          showModal("thank-you")
          setState(initialState)
        })
        .catch((error) => console.error(error))
    }
  }

  return (
    <section id="contact">
      <Fade>
        <Container>
          <h2 className="text-stone-brown">Contact form</h2>
          <p className="text-sm text-stone-brown/70 mb-6 font-medium">
            Leave me a message here:
          </p>
          <Form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <Field>
              <label htmlFor="name">
                <div>Name</div>
                <Input
                  value={state.name || ""}
                  onChange={handleChange}
                  type="text"
                  name="name"
                />
              </label>
            </Field>
            <Field>
              <label htmlFor="email">
                <div>Email</div>
                <Input
                  value={state.email || ""}
                  onChange={handleChange}
                  type="text"
                  name="email"
                />
              </label>
            </Field>
            <Field>
              <label htmlFor="message">
                <div>Message</div>
                <Textarea
                  value={state.message || ""}
                  onChange={handleChange}
                  name="message"
                />
              </label>
            </Field>
            <Button type="submit" fullWidth>
              Submit
            </Button>
          </Form>
        </Container>
      </Fade>
      <Modal id="thank-you">
        <h1>Thank you!</h1>
        <p>Your response has been submitted.</p>
        <Button onClick={() => hideModal()}>Close</Button>
      </Modal>
    </section>
  )
}

export default Contact
