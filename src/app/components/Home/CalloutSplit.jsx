import React from 'react'
import Subheading from './Subheading'
import Heading from './Heading'
import BodyText from './BodyText'
import Image from 'next/image'
import Button from './Button'

const CalloutSplit = () => {
  return (
   <>
   <div className='flex py-20 ml-30 justify-between'>
    <div className='flex flex-col gap-5 w-1/2'>
    <Subheading>Providing premium poultry since 1983</Subheading>
    <Heading className='text-4xl w-4/5'>We monitor agricultural products for customers & partners</Heading>
    <BodyText className="flex flex-col gap-3">
        <p>Our farms follow careful, hands-on practices 
        from hatch to harvest. Every flock is raised in clean, spacious housing with fresh feed and water, so you get poultry you can trust.</p>
        <p>We work closely with local growers and partners to track quality at every stage. From regular health checks to safe handling and delivery, 
            we make sure each order arrives fresh and on time.</p>
    </BodyText>
    <Button> Our Products </Button>
    </div>
    <div className='relative'>
        <div className='flex items-center bg-green-800 text-white w-2/5 h-30 rounded- z-2 absolute -top-7 -left-9 rounded-md px-7 text-xl'>Our poultry is fed an entirely vegetarian diet.</div> 
     <Image
        src="/images/chicken.jpg"
        alt="Farmer"
        width={600}
        height={400}
        className='rounded-2xl mr-10'
      />
      </div>
   </div>
   </>
  )
}

export default CalloutSplit