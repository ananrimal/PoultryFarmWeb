import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt,FaMailBulk, FaClock } from "react-icons/fa";
import BackgroundBanner from '../components/Home/BackgroundBanner'
import Heading from '../components/Home/Heading';
import BodyText from '../components/Home/BodyText';
import Subheading from '../components/Home/Subheading';
import Form from '../components/Home/Form';
import Button from '../components/Home/Button';
const iconsize=45
const contact=[
    {id:1, icon:<FaPhoneAlt size={iconsize}/>, title:"Phone", info:["+977 9000000000","+977 9111111111"],},
    {id:2, icon:<FaMapMarkerAlt size={iconsize}/>, title:"Address", info:["Banepa","Kavrepalanchok"],},
    {id:3, icon:<FaMailBulk size={iconsize}/>, title:"Email", info:["gaungharpoultry@gmail.com","info_gaugharpoultry@gmail.com"],},
    {id:4, icon:<FaClock size={iconsize}/>, title:"Opening Hours", info:["Mon-Fri: 7am - 7pm","Sat-Sun: Closed"],},
]

const page = () => {
  return (
    <>
    <BackgroundBanner title={"Contact Us"}/>
    <div className='flex gap-15 px-10 py-20'>
        {/* Contact Cards */}
    <div className='grid grid-cols-2 gap-3 flex-1 min-w-0'>
        
        {contact.map((items)=>{
            return(

                <div key={items.id} className='bg-gray-200 flex flex-col gap-3 items-center justify-center rounded-lg'>
                <div className='text-gray-500'>{items.icon} </div>
                <Heading className='text-xl whitespace-nowrap'> {items.title} </Heading>
            <div className="flex flex-col items-center">
            {items.info.map((text, index) => (
                <BodyText key={index} className={'text-sm/5'}>{text}</BodyText>
            ))}
            </div>
                </div>
            )
        })}
    </div>
    {/* Message form */}
    <div className='flex flex-col flex-1 min-w-0'>
        <Subheading>Send us a message!</Subheading>
        <Heading className='text-3xl w-4/5'>Your feedback means a lot to us, 
            it helps CoopFarm grow and serve you even better</Heading>
           <div className='flex flex-col gap-4 pr-2 mt-5'>
            <Form placeholder={'Name'}></Form>
            <Form placeholder={'Email'}></Form>
             <Form multiline placeholder={'Message'} className={'h-50'}></Form>
                <Button className={'text-md'}>Send A Message </Button> 
            </div>


    </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28278.787916929974!2d85.49045562744142!3d27.629208720915397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb090026c628f1%3A0x4b8aa5cbb800a04b!2sBanepa%20poultry%20Suppliers!5e0!3m2!1sen!2snp!4v1793184829835!5m2!1sen!2snp" 
    width="400" 
    height="500" 
    className="w-full px-20" 
    allowFullScreen
    loading="lazy" 
    referrerPolicy="strict-origin-when-cross-origin">
    </iframe>
    </>
  )
}

export default page