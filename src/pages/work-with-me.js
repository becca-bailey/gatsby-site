import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

function WorkWithMe({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Work with me"
        keywords={[`freelance`, `consulting`, `technical audit`, `software engineering`]}
      />
      <Container small>
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-8">Working With Me</h1>
          
          <div className="mb-12">
            <p className="text-lg mb-4">
              I help founders and small teams make sense of complex, half-built technical systems — and decide what to do next with clarity and confidence.
            </p>
            <p className="mb-4">
              If you've built something that mostly works but feels fragile, confusing, or hard to maintain, I can help you step back, understand what's really happening, and move forward with a clear plan.
            </p>
            <p>
              I work in short, well-defined engagements because that's where I do my best work — and because it makes expectations clear from the start.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-6">How I Work</h2>
            <p className="mb-6">
              I keep my work intentionally focused and finite. Each engagement has a clear scope, a clear timeline, and a clear end, so you always know what to expect.
            </p>

            <div className="space-y-12">
              {/* Diagnostic Sprint */}
              <div className="border-b border-gray pb-8">
                <h3 className="mb-4">1. Diagnostic Sprint</h3>
                <p className="text-lg mb-4 font-medium">Starting at $2,000</p>
                
                <div className="mb-4">
                  <p className="font-medium mb-2">Best for:</p>
                  <p>Founders or teams who have a sense that something isn't quite right, but aren't sure where to start.</p>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">What this is:</p>
                  <p>A two-week technical deep dive focused on understanding how your system actually works today.</p>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">What I do:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Review your codebase, architecture, and core user flows</li>
                    <li>Identify technical debt, fragility, and hidden risks</li>
                    <li>Surface key tradeoffs and decision points</li>
                    <li>Create a clear, prioritized action plan</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">What you get:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>A written technical audit you can refer back to</li>
                    <li>Prioritized recommendations with context and rationale</li>
                    <li>Plain-language explanations of options and risks</li>
                    <li>An optional Loom walkthrough of findings</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">How this helps:</p>
                  <p>You leave with a clearer mental model of your system and a concrete plan for next steps — whether you implement them yourself or hand them off to another developer.</p>
                </div>

                <div className="text-sm text-gray-600">
                  <p><strong>Timeline:</strong> 2 weeks</p>
                  <p><strong>Investment:</strong> Starting at $2,000 (most sprints fall between $2,000–$2,500)</p>
                </div>
              </div>

              {/* Fixed-Scope Build */}
              <div className="border-b border-gray pb-8">
                <h3 className="mb-4">2. Fixed-Scope Build</h3>
                <p className="text-lg mb-4 font-medium">Typically $3,000–$6,000</p>
                
                <div className="mb-4">
                  <p className="font-medium mb-2">Best for:</p>
                  <p>Teams who want help implementing one specific, well-defined improvement.</p>
                  <p className="mt-2">This works best after a Diagnostic Sprint, so scope and priorities are aligned before any build work begins.</p>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">What this is:</p>
                  <p>A short, focused implementation designed to deliver one clear outcome.</p>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">Examples:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Stabilizing authentication or error handling</li>
                    <li>Refactoring a critical user flow</li>
                    <li>Shipping a small MVP feature with clean boundaries</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">How it works:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Scope is defined in writing up front, so there are no surprises</li>
                    <li>Communication is asynchronous, so calendars stay manageable</li>
                    <li>Weekly written updates keep things transparent</li>
                    <li>A clear end date, so the engagement doesn't drag on</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">What this isn't designed for:</p>
                  <p>Ongoing iteration, open-ended ownership, or emergency support.</p>
                </div>
              </div>

              {/* Technical Office Hours */}
              <div className="pb-8">
                <h3 className="mb-4">3. Technical Office Hours</h3>
                <p className="mb-4">Advisory support, without handing off execution</p>
                
                <div className="mb-4">
                  <p className="font-medium mb-2">Pricing:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>$750 for 5 sessions</li>
                    <li>$1,400 for 10 sessions</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">What this is:</p>
                  <p>Prepaid advisory sessions where you bring questions, decisions, or designs, and we talk them through together.</p>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">Good for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Architecture and technical decisions</li>
                    <li>Code reviews</li>
                    <li>Tradeoffs and prioritization</li>
                    <li>Unblocking yourself or your team</li>
                  </ul>
                </div>

                <p className="text-sm">Sessions are 45 minutes and meant to be practical and focused. There's no prep or follow-up required — you set the agenda based on what's most useful to you.</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6">Fit & Expectations</h2>
            
            <div className="mb-6">
              <p className="font-medium mb-2">I'm a good fit for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Early-stage founders who value clarity and thoughtfulness</li>
                <li>Small teams with real users and real constraints</li>
                <li>Organizations that want honest guidance, not hype</li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-medium mb-2">I'm probably not the right fit if you're looking for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Ongoing availability or on-call support</li>
                <li>A fractional CTO or long-term retainer</li>
                <li>Work where scope is expected to evolve continuously</li>
              </ul>
              <p className="mt-2">If that's the case, I'm happy to help point you toward someone else.</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-4">Availability</h2>
            <p>
              I take on a limited number of projects at a time so I can stay focused and do this work well.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-4">Getting Started</h2>
            <p className="mb-4">
              The first step is a short intro call to see whether a Diagnostic Sprint is the right fit.
            </p>
            <p className="mb-6">
              If it is, we'll define scope, timeline, and expectations clearly before any work begins.
            </p>
            <a
              href="mailto:beccanelsonbailey@gmail.com?subject=Work%20with%20me%20inquiry"
              className="inline-block bg-gold text-stone-brown hover:bg-gold/90 shadow-sm hover:shadow-md px-6 py-3 rounded-lg font-medium text-center transition-all duration-200 cursor-pointer no-underline"
            >
              Schedule an intro call
            </a>
          </div>

          <div className="text-sm text-gray-600 italic">
            <p>I care a lot about building systems that are sustainable — not just technically, but for the people working with them. My goal is to leave you with clarity, not dependency.</p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default WorkWithMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

