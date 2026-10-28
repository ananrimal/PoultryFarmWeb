import React from 'react'
import { twMerge  } from 'tailwind-merge'

const Subheading = ({ children, className = '' }) => {
  return (
    <h2 className={twMerge('text-3xl font-niconne text-emerald-600', className)}>
      {children}
    </h2>
  )
}

export default Subheading