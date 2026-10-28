import React from 'react'
import { twMerge } from 'tailwind-merge'

const BodyText = ({children, className}) => {
  return (
    <h3 className={twMerge('text-base text-gray-500', className)}>{children} </h3> 
  )
}

export default BodyText