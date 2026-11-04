import React from 'react'
import Heading from './Heading'
import BodyText from './BodyText'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

const CTAbanner = () => {
  return (
    <div className='relative bg-green-900 mx-5 md:mx-10 lg:mx-30 rounded-3xl md:rounded-4xl text-white p-8 md:p-12 lg:p-25 flex flex-col md:flex-row gap-8 lg:gap-30 items-center border-b-8 md:border-b-12 border-amber-300'>

      <Image
        className='absolute -top-10 -left-5 md:-top-20 md:-left-20 w-20 h-20 md:w-40 md:h-40'
        src='/designElements/brushStrokes.svg'
        alt="design_element"
        width={160}
        height={160}
        data-aos="fade-right"
      />

      <Image
        className='absolute bottom-0 -right-3 w-24 h-24 md:w-55 md:h-55 pointer-events-none'
        src='/designElements/footprints.svg'
        alt="design_element"
        width={160}
        height={160}
        data-aos="fade-up-right"
      />

      <div className='relative z-10 flex-1'>
        <Heading className='text-amber-300 text-2xl md:text-3xl/20'>
          Fresh from our farms to your shelves
        </Heading>

        <BodyText className='text-white mt-3'>
          We work directly with local farmers to bring you seasonal produce at fair prices. Get in touch for a custom quote tailored to your business.
        </BodyText>
      </div>

      <div className='relative z-10'>
        <Link href='/contact'>
          <Button className={'hover:bg-white hover:text-green-900'}>
            Contact Us
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default CTAbanner