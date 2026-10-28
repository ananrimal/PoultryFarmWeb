import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = ({ children, className = '' }) => {
  return (
    <h1 className={twMerge('font-roboto text-green-800 font-bold', className)}>
      {children}
    </h1>
  )
}

export default Heading
