"use client"
import { useState } from 'react'
import React from 'react'
import Heading from '../components/Home/Heading'
import BodyText from '../components/Home/BodyText'
import Link from 'next/link'
import Button from '../components/Home/Button'
import BackgroundBanner from '../components/Home/BackgroundBanner'
import Dropdown from './Dropdown'

const buttonText=[
    {id:1, category:'General', link:'/'},
    {id:2, category:'Pricing', link:'/'},
    {id:3, category:'Visit', link:'/'},
    {id:4, category:'Delivery', link:'/'},
]
const Page = () => {
const [categoryActive, setCategoryActive] = useState(null)
  return (
<>
<BackgroundBanner title={"FAQ's"}></BackgroundBanner>
    <div className='flex flex-col gap-5 items-center p-15'>
        <Heading className='text-4xl'>Frequently asked questions</Heading>
            <BodyText className={'text-xl'}>
           <p>These are the most frequently asked questions about Gaunghar Poultry.</p>
            <p>Can&apos;t find what you&apos;re looking for? <span className='underline'><Link href="/contact">Send us a message.</Link></span></p>
        </BodyText>
        <div className='flex gap-3 mt-7'>
            {buttonText.map((text)=>{
                return(
                    <Button
                      active={categoryActive === text.category} 
                    onClick={()=>{
                categoryActive===text.category? setCategoryActive(null): setCategoryActive(text.category)
                    }} key={text.id}
                     className={'text-lg'}>
                        {text.category}
                        </Button>
                )
            })}
        </div>
    {categoryActive==="General"?"":
    categoryActive==="Pricing"?"":
    categoryActive==="Visit"?"":
    categoryActive==="Delivery"?"":null}
    </div>

    <Dropdown showCategory={categoryActive}/>
</>
  )
}

export default Page