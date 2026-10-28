import React from 'react'
import Image from 'next/image'
import BodyText from './BodyText'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Heading from './Heading';
import Button from './Button';
const links=[
    {id:1, text:"HOME", link:"./"},
    {id:2, text:"ABOUT US", link:"./about-us"},
    {id:3, text:"CONTACT US", link:"./"},
    {id:4, text:"TESTIMONIALS", link:"./"},
    {id:5, text:"FAQ", link:"./"},
    {id:6, text:"SERVICES", link:"./"},
]
const Footer = () => {
  return (

    <div className='bg-gray-100 flex mt-10'>
        <div className=' w-1/3 ml-30 mt-10'>
        <Image
        src='/images/GaugharPoultryLogo.svg'
        alt="brand_logo"
        width={200}
        height={200}/>
        <BodyText className={"my-4 text-lg/7"}>At our poultry farm, our customers can be sure that they are buying high-quality poultry meat produced with care and attention to every detail.</BodyText>
        <div className='flex gap-2 text-green-900'>
            <div className='hover:text-amber-400'><FaFacebook size={25}/> </div>
           <div className='hover:text-amber-400'> <FaInstagram size={25}/> </div>
            <div className='hover:text-amber-400'><FaLinkedin size={25}/> </div> </div>
        </div>
        <div className='mb-20 px-10'>
           <Heading className='text-2xl mt-15'> Our Links</Heading>
           <ul className='mt-10 text-md space-y-6 text-green-900 font-bold cursor-pointer'>
            {links.map((link)=>(
                <li key={link.id} className='group'>
                    <span className='text-lime-500 transition-colors group-hover:text-green-900'>&rsaquo;</span> {link.text} 
                </li>
            ))}
           </ul>
        </div>
        <div className='flex flex-col mt-15 gap-5 ml-10'>
            <Heading className='text-2xl '>Newsletter </Heading>
            <BodyText>Receive news straight to your inbox.</BodyText>
            <div>
            <input className='w-70 border-1 border-gray-200 h-10 mr-5 placeholder:text-gray-400 p-2' placeholder="Your Email"></input>
            <Button className={"w-25 py-2"}> Send </Button>
            </div>
        </div>
    </div>
  )
}

export default Footer