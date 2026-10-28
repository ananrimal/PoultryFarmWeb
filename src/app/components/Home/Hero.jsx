import React from 'react'
import Button from "./Button";
import Heading from './Heading';
import Subheading from './Subheading';
import BodyText from './BodyText';

const Hero = () => {
  return (
    <>
        <div className="relative flex items-center justify-center w-full h-180 bg-[url('/images/farm.webp')] bg-cover bg-center bg-black/80">
             <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col gap-18 text-center text-white justify-center items-center">
            <Subheading className='text-white'>No anti-biotics, no growth stimulants!</Subheading>
            <Heading className='text-amber-300 font-bold text-7xl'>Fresh Eggs for you everyday!</Heading>
            <BodyText className="text-white">From farm to table, our eggs are simply incredible!</BodyText>
             <Button> CONTACT US </Button>
            </div>
        </div>
    </>
  )
}

export default Hero