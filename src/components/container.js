import React from "react"

const Container = ({ children, small, className = "", ...props }) => {
  const maxWidthClass = small
    ? "max-w-[931px]"
    : "max-w-[1064px]"
  
  return (
    <div
      className={`py-[33.25px] px-[24.94px] ${maxWidthClass} mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
