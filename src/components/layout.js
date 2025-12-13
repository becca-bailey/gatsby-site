import React from "react"
import Navigation from "./navigation"

function Layout({ title, children }) {
  return (
    <div>
      <div className="mx-auto py-[33.25px] px-[24.94px]">
        <Navigation title={title} />
      </div>
      <main>{children}</main>
      <footer className="text-center py-[16.625px]">
        <small className="block">
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Becca Bailey
        </small>
        <small className="block">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </small>
      </footer>
    </div>
  )
}

export default Layout
