import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import { Fade } from "react-swift-reveal"
import { ButtonLink } from "./button"

function Hero() {
  return (
    <section
      id="hero"
      aria-label="About Becca"
      className="bg-gradient-to-b from-cream to-peach/20 pt-6 pb-12 small:pt-8 small:pb-16 medium:py-20"
    >
      <Fade>
        <Container>
          <div className="flex flex-col mb-6 small:mb-8 medium:mb-12 medium:flex-row medium:items-center medium:gap-12">
            <div className="flex-shrink-0 mb-4 small:mb-6 medium:mb-0">
              {/* Mobile: cropped version, full-width with padding */}
              <div className="medium:hidden -mx-6 small:-mx-8 px-6 small:px-8">
                <StaticImage
                  src="../assets/headshot-cropped.jpg"
                  alt="Portrait of Becca Bailey"
                  className="w-full border-2 small:border-[3px] border-peach shadow-sm small:shadow-md"
                  layout="fullWidth"
                  placeholder="blurred"
                  quality={90}
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              {/* Desktop: original version */}
              <div className="hidden medium:block">
                <StaticImage
                  src="../assets/headshot.jpg"
                  alt="Portrait of Becca Bailey"
                  className="w-[400px] h-auto max-w-[400px] border-4 border-peach shadow-md"
                  layout="constrained"
                  placeholder="blurred"
                  quality={90}
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            </div>
            <div className="flex-1 text-left">
              <Fade top cascade>
                <h1
                  className="text-3xl small:text-4xl medium:text-6xl large:text-7xl font-header text-stone-brown mb-3 small:mb-4 medium:mb-6 tracking-tight"
                  aria-level="1"
                >
                  Hi, I'm Becca.
                </h1>
              </Fade>
              <Fade>
                <p className="text-base small:text-lg text-stone-brown mb-3 small:mb-4 leading-relaxed">
                  I help founders and small teams make sense of complex,
                  half-built technical systems — and decide what to do next with
                  clarity and confidence.
                </p>
                <p className="text-base small:text-lg text-stone-brown mb-5 small:mb-6 medium:mb-8 leading-relaxed">
                  I'm a senior software engineer and technical leader with a
                  background in frontend architecture, performance, and systems
                  thinking. These days, I focus on work that's thoughtful,
                  finite, and sustainable — for both the product and the people
                  maintaining it.
                </p>
                <div className="flex flex-col small:flex-row small:items-center gap-3 small:gap-4">
                  <ButtonLink
                    to="/work-with-me"
                    variant="primary"
                    className="text-sm small:text-base medium:text-lg"
                  >
                    Work with me
                  </ButtonLink>
                  <Link
                    to="/writing"
                    className="inline-block text-stone-brown hover:text-blue transition-colors font-medium text-sm small:text-base medium:text-lg"
                  >
                    View my writing →
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default Hero
