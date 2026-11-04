import React from 'react'

const BackgroundBanner = ({title}) => {
  return (
     <div className='relative w-full h-40 sm:h-52 md:h-60 lg:h-70 bg-[url(/images/farm_bg.jpg)] bg-cover bg-center'>
        <div className='absolute inset-0 bg-green-900/50 z-0'></div>
        <h1 className='text-white relative top-1/2 -translate-y-1/2 left-5 sm:left-10 md:left-20 lg:left-30 text-2xl sm:text-3xl md:text-4xl font-bold'>
          {title}
        </h1>
    </div>
  )
}

export default BackgroundBanner