import React from "react"

export function Field({ children, className = "", ...props }) {
  return (
    <div className={`block pb-[24.94px] ${className}`} {...props}>
      {children}
    </div>
  )
}

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full border border-gray rounded-[5px] py-[8.31px] px-[8.31px] ${className}`}
      {...props}
    />
  )
}

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full border border-gray rounded-[4px] py-[8.31px] px-[8.31px] min-h-[133px] ${className}`}
      {...props}
    />
  )
}

export function Form({ children, className = "", ...props }) {
  return (
    <form
      className={`small:max-w-[665px] small:mx-auto small:bg-[#F5F7F5] small:border small:border-[#E0E5E0] small:rounded-[4px] small:p-[33.25px] ${className}`}
      {...props}
    >
      {children}
    </form>
  )
}
