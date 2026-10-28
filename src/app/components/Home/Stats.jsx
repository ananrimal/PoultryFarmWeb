import Image from 'next/image'
import React from 'react'
import Subheading from './Subheading'
import BodyText from './BodyText'
import Heading from './Heading'

const numbers=[
    {id:1, number:46, unit:"k", title:"Areas"},
    {id:2, number:15, unit:"+", title:"Experience"},
    {id:3, number:30, unit:"T", title:"Products"},
    {id:4, number:10, unit:"k", title:"Customers"},
]
const Stats = () => {
  return (
    <>
    <div className='flex flex-col items-center gap-8 p-18'>
    <Subheading>High-quality eggs</Subheading>
    <Heading className='text-5xl'>Our Results show how we keep improving</Heading>
    <BodyText className="text-2xl">We’re proud to see our hard work reflected in every egg we deliver</BodyText>
    </div>
    <div className='flex gap-4 px-20 pb-20'>
    
       {numbers.map((items)=>(
        <div className='relative' key={items.id}>
        <Image
        src="images/statEgg.svg"
        alt="stat card"
        className='relative'
        width={300}
        height={300}/>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-green-900 text-center'>
       <span>{items.number}</span><span>{items.unit}</span>
       <div className='text-xl p-2'>{items.title}</div>
       </div> 
        
        
        </div>
       ))}
   
    </div>
    </>
  )
}

export default Stats