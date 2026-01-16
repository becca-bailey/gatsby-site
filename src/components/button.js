import React from "react"
import { Link } from "gatsby"

// Button component with primary and secondary variants
function Button({
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
  ...props
}) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-lg font-medium text-center transition-all duration-200 cursor-pointer no-underline"

  const variantClasses = {
    primary:
      "bg-gold text-stone-brown hover:bg-gold/90 shadow-sm hover:shadow-md",
    secondary:
      "border-2 border-gold text-stone-brown bg-transparent hover:bg-gold hover:text-stone-brown",
  }

  const widthClass = fullWidth ? "w-full" : ""

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// ButtonLink component for links styled as buttons
export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
  to,
  ...props
}) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-lg font-medium text-center transition-all duration-200 cursor-pointer no-underline"

  const variantClasses = {
    primary:
      "bg-gold text-stone-brown hover:bg-gold/90 shadow-sm hover:shadow-md",
    secondary:
      "border-2 border-gold text-stone-brown bg-transparent hover:bg-gold hover:text-stone-brown",
  }

  const widthClass = fullWidth ? "w-full" : ""

  return (
    <Link
      to={to}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default Button
