import Fade from "react-reveal/Fade"
import React from "react"
import Container from "./container"
import { Field, Input, Textarea } from "./form"
import Button from "./button"

function Contact() {
  return (
    <section id="contact">
      <Fade>
        <Container>
          <h2>Contact me!</h2>
          <form
            action="https://getsimpleform.com/messages?form_api_token=db91ba57c99990a4ee940508409894c6"
            method="post"
          >
            <input
              type="hidden"
              name="redirect_to"
              value="http://becca.is/thank-you"
            />
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
            <Field>
              <Button type="submit">Submit</Button>
            </Field>
          </form>
        </Container>
      </Fade>
    </section>
  )
}

export default Contact
