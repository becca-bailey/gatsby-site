import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import { Fade } from "react-swift-reveal"

function Hero() {
  return (
    <section id="hero" aria-label="About Becca">
      <Fade>
        <Container>
          <div className="flex justify-center flex-col mb-[33.25px] medium:flex-row medium:items-center">
            <div className="hidden medium:block">
              <StaticImage
                src="../../content/assets/becca.png"
                alt="Portrait of Becca Bailey"
                className="rounded-full min-w-[400px] max-w-full align-center mr-7 medium:block"
                width={400}
                height={400}
              />
            </div>
            <div>
              <Fade top cascade>
                <h1 className="flex flex-col text-[49.88px] mt-0 small:items-center small:flex-row small:text-[66.5px] medium:mt-[33.25px] medium:-ml-[99.75px]" aria-level="1">
                  Hi, I'm Becca.
                </h1>
              </Fade>
              <Fade>
                <p>
                  I help founders and small teams make sense of complex, half-built technical systems — and decide what to do next with clarity and confidence.
                </p>
                <p>
                  I'm a senior software engineer and technical leader with a background in frontend architecture, performance, and systems thinking. These days, I focus on work that's thoughtful, finite, and sustainable — for both the product and the people maintaining it.
                </p>
                <div className="mt-[33.25px] flex flex-col small:flex-row small:gap-4">
                  <Link
                    to="/work-with-me"
                    className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-[#57163f] transition-colors no-underline font-medium text-center"
                  >
                    Work with me
                  </Link>
                  <Link
                    to="/writing"
                    className="inline-block border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors no-underline font-medium text-center"
                  >
                    Writing
                  </Link>
                  <Link
                    to="/speaking"
                    className="inline-block border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors no-underline font-medium text-center"
                  >
                    Speaking
                  </Link>
                  <Link
                    to="/#contact"
                    className="inline-block border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors no-underline font-medium text-center"
                  >
                    Contact
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-[33.25px] medium:flex-row medium:items-center">
            <div className="hidden medium:block">
              <div className="max-w-full self-center small:h-[465.5px] medium:flex-row medium:items-center medium:min-w-[532px]">
                <StaticImage
                  src="../../content/assets/coffee.png"
                  alt=""
                  className="rounded-full small:left-7 small:top-48"
                  width={200}
                  height={200}
                  aria-hidden="true"
                />
                <StaticImage
                  src="../../content/assets/lucy.png"
                  alt=""
                  className="rounded-full"
                  width={300}
                  height={300}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="self-center small:mr-[16.625px] medium:hidden">
            <div className="grid grid-cols-3 gap-4">
              <StaticImage
                src="../../content/assets/becca.png"
                alt="Portrait of Becca Bailey"
                className="rounded-full"
              />
              <StaticImage
                src="../../content/assets/coffee.png"
                alt=""
                className="rounded-full"
                aria-hidden="true"
              />
              <StaticImage
                src="../../content/assets/lucy.png"
                alt=""
                className="rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default Hero

