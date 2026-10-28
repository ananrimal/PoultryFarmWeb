"use client"
import React from 'react'
import Image from 'next/image'
import Heading from '../components/Home/Heading'
import Subheading from '../components/Home/Subheading'
import BodyText from '../components/Home/BodyText'
import Button from '../components/Home/Button'
import { FaCheckCircle } from "react-icons/fa";
import Timeline from './Timeline'
import IconBox from '../components/Home/IconBox'
import RoundedImage from '../components/Home/RoundedImage'
import CTAbanner from '../components/Home/CTAbanner'
import BackgroundBanner from '../components/Home/BackgroundBanner'
const team = [
    { image: "/people/owner.avif", name: "Sujan Maharjan", title: "Owner" },
    { image: "/people/manager.avif", name: "Bikash Shrestha", title: "Manager" },
    { image: "/people/packing_lead.avif", name: "Anjali Thapa", title: "Packing Lead" },
    { image: "/people/vet.avif", name: "Prakash Gurung", title: "Veterinarian" },
]
const page = () => {
  return (
    <>
    {/*background and title*/}
   <BackgroundBanner title={"About Us"}/>
      {/*story and picture*/}
      <div className='bg-gray-200'>
     <div className='flex py-20 ml-30 justify-between'>
    <div className='flex flex-col gap-4 w-1/2'>
    <Subheading>Our story</Subheading>
    <Heading className='text-4xl w-4/5'>Three generations of hands-on poultry farming</Heading>
    <BodyText className="flex flex-col gap-3">
        <p>It started with forty hens and a borrowed barn. Our grandfather kept a small flock to feed the family, and neighbours soon began asking for eggs. 
            Today we supply shops, bakeries and households in the region.</p>
        <p>We know our hens by their sheds, not by numbers on a screen. 
            The person who walks the shed every morning is the first to notice when something looks off.</p>
    </BodyText>
     <div className="bg-white w-full px-8 py-7 rounded-4xl border-l-8 border-green-700">
      <Heading className='text-lg'>
       We grow the flock only as fast as we can look after it.
      </Heading>
    </div>
    <Button> See Our Products </Button>
    </div>
    <div className='relative'>
         
     <Image
        src="/images/chicken_blob.svg"
        alt="Farmer"
        width={400}
        height={300}
        className='rounded-2xl mr-10'
      />
      </div>
   </div>
   </div>
  {/* health checks */}

   <div className='flex py-18 ml-30 gap-25'>
      <Image
        src="/images/chicken_blob.svg"
        alt="Farmer"
        width={400}
        height={300}
        className='rounded-2xl mr-10'
      />
    <div className='flex flex-col gap-4 w-1/2'>
   
    <Subheading>Healthy & Happy </Subheading>
    <Heading className='text-4xl w-4/5'>Every hen has room to roam, perch and nest</Heading>
    <BodyText className="flex flex-col gap-3 *:flex *:items-center *:gap-2 ">
        We raise our flocks with care and balance, so the birds are healthier and the eggs taste like it.
<p> <FaCheckCircle className='text-amber-400'/> At least 4 m² of outdoor ground for every hen, with shade and dust baths. </p>
<p> <FaCheckCircle className='text-amber-400'/> Grain mixed on the farm, with no routine antibiotics. </p>
<p> <FaCheckCircle className='text-amber-400'/>  Two health checks in every shed, every day, written in the logbook. </p>
    </BodyText>
    <Button> See Our Products </Button>
    </div>
   </div>
   {/*journey*/}
  <Timeline/>

  {/* Icons */}
  <IconBox/>
  {/* The family */}
  <div className='p-10'>
    <div className='flex flex-col items-center gap-10 mt-5'>
    <Subheading>The family</Subheading>
    <Heading>Meet the people behind your eggs </Heading>
    </div>
    <div className='flex justify-center gap-10 mt-5'>
     
{team.map((person, key) => (
    <div key={key} className='flex flex-col items-center gap-y-2'>
        <RoundedImage size={200} src={person.image} />
        <div className='text-green-800 font-bold text-xl'>{person.name}</div>
        <div className='text-gray-500'>{person.title}</div>
    </div>
))}

    </div>
  </div>
  <CTAbanner/>
    </>
  )
}

export default page