import React from 'react'
import Subheading from './Subheading'
import Heading from './Heading'
import BodyText from './BodyText'
import RoundedImage from './RoundedImage'

const Testimonials = () => {
  return (
    <>
    <div className="h-180 w-full bg-[url('/images/agriculture-Land.jpg')] bg-cover bg-center relative">
     <div className="absolute inset-0 bg-green-950/55"></div>
        <div className="grid grid-cols-2 gap-10">
        <div className=' relative top-25 ml-30 flex flex-col gap-5'>
        <Subheading className='text-white text-[#84C224]'>Testimonials</Subheading>
        <Heading className='text-white text-4xl'> What people say about us</Heading>  
        <div className='flex flex-col gap-15 items-center'>
        <BodyText className="relative bg-white w-full h-auto p-8 text-center text-xl rounded-2xl break-words leading-loose">
        &quot;The CoopFarm team treats every order with genuine care. 
        You can taste the difference in every fresh egg we receive weekly.&quot;
          <span className="absolute left-1/2 -bottom-4 h-0 w-0 -translate-x-1/2 border-x-[16px] border-t-[16px] border-x-transparent border-t-yellow-400" />
        </BodyText>
        <div className='items-center text-white flex flex-col text-lg/8'>
        <RoundedImage src="/people/person1.jpg"/>
        <div>Anita Sharma</div>
        <div> Customer </div>
            </div>
            </div>
            </div>
        <div className='flex flex-col justify-evenly items-center relative top-25 mr-10'> 
            <div><RoundedImage size={100} src="/people/person2.jpg"/></div>
            <div className='flex gap-30'>
                <RoundedImage size={130}src="/people/person3.jpg"/>
                <RoundedImage size={150} src="/people/person4.jpg"/>
                <RoundedImage size={120} src="/people/person5.jpg"/>
            </div>
            <div className='flex gap-40'>
                <RoundedImage size={120} src="/people/person6.jpg"/>
                <RoundedImage size={100} src="/people/person7.jpg"/>
            </div>
        </div>
           
            
        
     </div>
    </div>
 
    </>
  )
}

export default Testimonials