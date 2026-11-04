import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import BodyText from './BodyText'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Heading from './Heading';
import Button from './Button';

const links=[
    {id:1, text:"HOME", link:"/"},
    {id:2, text:"ABOUT US", link:"/about-us"},
    {id:3, text:"PRODUCTS", link:"/products"},
    {id:4, text:"CONTACT US", link:"/contact"},
    {id:5, text:"FAQ", link:"/faqs"},
    {id:6, text:"TESTIMONIALS", link:"#testimonials"},
]

const Footer = () => {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row mt-10 px-5 md:px-10 lg:px-20 py-10 gap-10 md:gap-5'>

        {/* Brand section */}
        <div className='w-full md:w-1/3 mt-0 md:mt-5'>
            <Image
                src='/images/GaugharPoultryLogo.svg'
                alt="brand_logo"
                width={200}
                height={200}
                className='w-40 md:w-48 h-auto'
            />

            <BodyText className={"my-4 text-base md:text-lg/7"}>
                At our poultry farm, our customers can be sure that they are buying high-quality poultry meat produced with care and attention to every detail.
            </BodyText>

            <div className='flex gap-3 text-green-900'>
                <div className='hover:text-amber-400'><FaFacebook size={25}/></div>
                <div className='hover:text-amber-400'><FaInstagram size={25}/></div>
                <div className='hover:text-amber-400'><FaLinkedin size={25}/></div>
            </div>
        </div>

        {/* Links section */}
        <div className='w-full md:w-1/4 md:px-5'>
            <Heading className='text-2xl mt-0 md:mt-5'>Our Links</Heading>

            <ul className='mt-5 md:mt-10 text-md space-y-4 md:space-y-6 text-green-900 font-bold cursor-pointer'>
                {links.map((link)=>(
                    <li key={link.id} className='group'>
                        <Link href={link.link}>
                            <span className='text-lime-500 transition-colors group-hover:text-green-900'>&rsaquo;</span> {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Newsletter section */}
        <div className='w-full md:flex-1 flex flex-col gap-5 mt-0 md:mt-5'>
            <Heading className='text-2xl'>Newsletter</Heading>

            <BodyText>Receive news straight to your inbox.</BodyText>

            <div className='flex flex-col sm:flex-row gap-3'>
                <input
                    className='w-full sm:w-70 border border-gray-200 h-10 placeholder:text-gray-400 p-2'
                    placeholder="Your Email"
                />

                <Button className={"w-fit py-2"}>
                    Send
                </Button>
            </div>
        </div>

    </div>
  )
}

export default Footer