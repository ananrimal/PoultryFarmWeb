import React from 'react'
import Subheading from './Subheading'
import Heading from './Heading'
import BodyText from './BodyText'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const CalloutSplit = () => {
  return (
   <>
   <div className='flex flex-col md:flex-row py-10 md:py-20 px-5 md:ml-15 lg:ml-30 gap-10 md:gap-5 justify-between'>
    <div className='flex flex-col gap-5 w-full md:w-1/2'>
    <Subheading>Providing premium poultry since 1983</Subheading>
    <Heading className='text-3xl md:text-4xl w-full md:w-4/5'>We monitor agricultural products for customers & partners</Heading>
    <BodyText className="flex flex-col gap-3">
        <p>Our farms follow careful, hands-on practices 
        from hatch to harvest. Every flock is raised in clean, spacious housing with fresh feed and water, so you get poultry you can trust.</p>
        <p>We work closely with local growers and partners to track quality at every stage. From regular health checks to safe handling and delivery, 
            we make sure each order arrives fresh and on time.</p>
    </BodyText>
    <Link href='/products'> <Button> Our Products </Button> </Link>
    </div>
    {/* image and green card */}
    <div className='relative w-full md:w-1/2 '>
    {/* green card absolute */}
        <div className='flex items-center bg-green-800 text-white w-3/5 md:w-3/5 h-auto min-h-20 rounded- z-2 absolute -top-4 left-2 md:-top-7 md:-left-9 rounded-md px-4 md:px-7 py-3 text-base md:text-xl'>Our poultry is fed an entirely vegetarian diet.</div> 
     <Image
        src="/images/chicken.jpg"
        alt="Farmer"
        width={600}
        height={400}
        className='rounded-2xl w-full h-auto md:mr-10'
      />
      </div>
   </div>
   </>
  )
}

export default CalloutSplit
