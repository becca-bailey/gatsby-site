import React from "react"
import { Link } from "gatsby"

function Navigation({ title }) {
  return (
    <div className="flex items-center justify-between mb-4 relative">
      <h1 className="text-[41.56px] lowercase m-0 font-header">
        <Link to="/">{title}</Link>
      </h1>
      <div className="flex flex-col medium:flex-row medium:items-center">
        <span className="lowercase pr-4">
          <Link to="/work-with-me">Work with me</Link>
        </span>
        <span className="lowercase pr-4">
          <Link to="/writing">Writing</Link>
        </span>
        <span className="lowercase pr-4">
          <Link to="/speaking">Speaking</Link>
        </span>
        <span className="lowercase pr-4">
          <Link to="/#contact">Contact</Link>
        </span>
      </div>
    </div>
  )
}

export default Navigation
