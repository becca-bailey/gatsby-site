import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

function Navigation({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { to: "/work-with-me", label: "Work with me" },
    { to: "/writing", label: "Writing" },
    { to: "/speaking", label: "Speaking" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <>
      <div className="flex items-center justify-between mb-4 relative">
        <h1 className="text-4xl m-0 font-header text-stone-brown">
          <Link to="/" className="text-stone-brown hover:text-blue transition-colors" onClick={closeMenu}>
            {title}
          </Link>
        </h1>
        {/* Desktop navigation */}
        <div className="hidden medium:flex medium:items-center gap-4">
          {navLinks.map((link) => (
            <span key={link.to} className="lowercase">
              <Link
                to={link.to}
                className="text-stone-brown hover:text-blue transition-colors"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="medium:hidden p-2 text-stone-brown hover:text-blue transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 medium:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      {/* Slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-cream shadow-lg z-50 transform transition-transform duration-300 ease-in-out medium:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="p-6">
          <div className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="lowercase text-stone-brown hover:text-blue transition-colors text-lg"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
