import React from "react"

/**
 * Card component for consistent content presentation
 * Uses design system colors and spacing
 */
function Card({ children, className = "" }) {
  return (
    <div
      className={`mb-8 small:bg-cream small:border small:border-peach small:rounded-lg small:p-8 small:mb-6 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card

