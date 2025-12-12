import React from "react"

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`text-white bg-primary border-none py-[8.31px] rounded-[4px] w-full cursor-pointer transition-all duration-200 hover:bg-[#57163f] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
