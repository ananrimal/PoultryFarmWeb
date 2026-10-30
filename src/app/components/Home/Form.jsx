import React from 'react'
import { twMerge } from 'tailwind-merge'

const Form = ({ placeholder, className, multiline }) => {
  const styles = twMerge(
    'border border-gray-300 rounded-md placeholder:text-gray-400 p-4 w-full',
    multiline ? 'h-50 resize-y' : 'h-12',
    className
  )

  return multiline ? (
    <textarea placeholder={placeholder} className={styles} />
  ) : (
    <input placeholder={placeholder} className={styles} />
  )
}

export default Form