import React from 'react'
import Image from 'next/image'
import { IoCall } from "react-icons/io5";
import Subheading from './Subheading';
import Heading from './Heading';
import BodyText from './BodyText';

const Features = () => {
  return (
    <>
    <div className='bg-gray-100 mt-0 pb-4'>
    <div className='flex flex-col gap-12 ml-20 mr-20 mb-12 mt-0 justify-center items-center text-center pt-12'>
    <Subheading> We prioritize poultry welfare </Subheading>
   <Heading className='text-4xl font-bold'> We offer healthy, natural poultry raised with family care </Heading>
    <BodyText> Raised with care to deliver healthy, natural poultry.</BodyText>
    </div>
<div className="flex flex-col md:flex-row items-center justify-between gap-8">

  <Image
    src="/images/farmer.svg"
    alt="Farmer"
    width={200}
    height={200}
    priority
    className="w-full md:w-2/5 max-w-xl h-auto"
  />

  <div className="flex flex-col gap-5 w-full md:w-3/5 mr-15">
    <div className="bg-white w-full px-8 py-8 rounded-4xl border-l-8 border-green-700">
      <Heading className='text-2xl'>  We invest in modern facilities and technologies for optimal bird care</Heading>
      <BodyText>
        Our barns are clean and bright, giving every bird comfort and better living conditions.
      </BodyText>
    </div>

    <div className="bg-white w-full px-8 py-8 rounded-4xl border-l-8 border-green-700">
      <Heading className='text-2xl'>
        We promise you a reliable delivery of quality eggs at wholesale prices
      </Heading>
    </div>

    <div className="flex gap-4 items-center m-4">
      <IoCall size={50} className="bg-amber-300 rounded-full p-3 text-green-900" />
      <div className="flex flex-col gap-1 justify-center">
       <Heading className='text-2xl'>
        Place an order
      </Heading>
       <BodyText>+977 90000000000</BodyText>
       </div>
    </div>
  </div>

</div>




</div>
    </>
  )
}

export default Features