import React from 'react'
import BackgroundBanner from '../components/Home/BackgroundBanner'
import Subheading from '../components/Home/Subheading'
import Heading from '../components/Home/Heading'
import BodyText from '../components/Home/BodyText'
import ProductCard from './ProductCard'

const page = () => {
  return (
    <>
   <BackgroundBanner title={"Products"}/>
   <div className='flex flex-col items-center m-10 gap-4'>
    <Subheading>Free of hormones & additives</Subheading>
    <Heading className='text-3xl p-3 w-200 text-center'>Our eggs are hand-picked twice daily to meet our loyal customers’ needs</Heading>
   <BodyText>
   We collect with care to deliver only fresh and natural eggs every day.</BodyText>
   <ProductCard/>
      </div>

   </>
  )
}

export default page