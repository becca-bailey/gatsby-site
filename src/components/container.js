import React from "react"

const Container = ({ children, small, className = "", ...props }) => {
  const maxWidthClass = small
    ? "max-w-[931px]"
    : "max-w-[1064px]"
  
  return (
    <div
      className={`py-8 px-6 small:py-12 small:px-8 medium:py-16 medium:px-12 ${maxWidthClass} mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
