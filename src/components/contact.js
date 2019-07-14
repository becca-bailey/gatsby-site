import Fade from "react-reveal/Fade"
import React from "react"
import Container from "./container"
import { Form, Field, Input, Textarea } from "./form"
import Button from "./button"

function Contact() {
  return (
    <section id="contact">
      <Fade>
        <Container>
          <h2>Contact me!</h2>
          <p>
            Do you need a speaker at your next JavaScript event? Do you want to
            talk to me about my cats? Leave me a message here and I will try to
            get back to you as soon as possible.
          </p>
          <Form method="post" data-netflify="true">
            <Field>
              <label for="name">
                <div>Name</div>
                <Input type="text" name="name" />
              </label>
            </Field>
            <Field>
              <label for="email">
                <div>Email</div>
                <Input type="text" name="email" />
              </label>
            </Field>
            <Field>
              <label for="message">
                <div>Message</div>
                <Textarea name="message" />
              </label>
            </Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </Fade>
    </section>
  )
}

export default Contact
