import React from 'react'

const BackgroundBanner = ({title}) => {
  return (
     <div className='relative w-full h-70 bg-[url(/images/farm_bg.jpg)]'>
    <div className='absolute inset-0 bg-green-900/50 z-0'></div>
    <h1 className='text-white relative top-1/2 left-30 text-4xl font-bold'>{title}</h1>
    </div>
  )
}

export default BackgroundBanner