import React from 'react'
import Heading from './Heading'
import BodyText from './BodyText'
import Button from './Button'
import Image from 'next/image'

const CTAbanner = () => {
  return (
     <div className='relative bg-green-900 mx-30 rounded-4xl text-white p-25 flex gap-30 items-center border-b-12 border-amber-300'> 
        <Image className='absolute -top-20 -left-20 w-40 h-40'src='/designElements/brushStrokes.svg' alt="design_element" width={160} height={160}/>
         <Image className='absolute bottom-0 -right-3 w-55 h-55 pointer-events-none'src='/designElements/footprints.svg' alt="design_element" width={160} height={160}/>
    <div>
    <Heading className='text-amber-300 text-3xl/20'>Fresh from our farms to your shelves</Heading>
    <BodyText className='text-white'>We work directly with local farmers to bring you seasonal produce at fair prices. Get in touch for a custom quote tailored to your business.</BodyText>
    </div>
    <Button className={'hover:bg-white hover:text-green-900'}>Contact Us</Button>
    </div>
  )
}

export default CTAbanner