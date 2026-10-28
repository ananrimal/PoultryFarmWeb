import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({children, className}) => {
  return (
    <>
    <button className={twMerge("bg-amber-300 text-green-900 whitespace-nowrap font-bold py-3 px-3 w-fit rounded-full cursor-pointer hover:bg-green-900 hover:text-white transition-colors delay-100 text-sm hover:scale-105", className)}> {children} </button>
      </>  
  )
}

export default Button