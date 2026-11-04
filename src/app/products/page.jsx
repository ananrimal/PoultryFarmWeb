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

      <div className='flex flex-col items-center my-10 md:my-15 px-5 md:px-10 gap-4'>
        <Subheading>Free of hormones & additives</Subheading>

        <Heading className='text-2xl md:text-3xl p-3 w-full md:max-w-3xl text-center'>
          Our eggs are hand-picked twice daily to meet our loyal customers’ needs
        </Heading>

        <BodyText className='text-center'>
          We collect with care to deliver only fresh and natural eggs every day.
        </BodyText>

        <ProductCard/>
      </div>
    </>
  )
}

export default page