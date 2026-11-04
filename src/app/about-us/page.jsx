"use client"
import React from 'react'
import Link from 'next/link'
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
      {/* background and title */}
      <BackgroundBanner title={"About Us"}/>

      {/* story and picture */}
      <div className='bg-gray-200'>
        <div className='flex flex-col md:flex-row py-10 md:py-20 px-5 md:px-10 lg:px-20 gap-10 md:gap-5 lg:gap-10 items-center'>

          <div className='flex flex-col gap-4 w-full md:w-1/2'>
            <Subheading>Our story</Subheading>

            <Heading className='text-3xl md:text-4xl w-full md:w-4/5'>
              Three generations of hands-on poultry farming
            </Heading>

            <BodyText className="flex flex-col gap-3">
              <p>
                It started with forty hens and a borrowed barn. Our grandfather kept a small flock to feed the family, and neighbours soon began asking for eggs.
                Today we supply shops, bakeries and households in the region.
              </p>
              <p>
                We know our hens by their sheds, not by numbers on a screen.
                The person who walks the shed every morning is the first to notice when something looks off.
              </p>
            </BodyText>

            <div className="bg-white w-full px-5 md:px-8 py-6 md:py-7 rounded-3xl md:rounded-4xl border-l-8 border-green-700">
              <Heading className='text-lg'>
                We grow the flock only as fast as we can look after it.
              </Heading>
            </div>

            <Link href='/products'>
              <Button>See Our Products</Button>
            </Link>
          </div>

          <div className='relative w-full md:w-1/2 flex justify-center'>
            <Image
              src="/images/chicken_blob.svg"
              alt="Farmer"
              width={400}
              height={300}
              className='rounded-2xl w-full max-w-[400px] h-auto'
            />
          </div>

        </div>
      </div>

      {/* health checks */}
      <div className='flex flex-col md:flex-row py-10 md:py-18 px-5 md:px-10 lg:px-20 gap-10 lg:gap-15 items-center'>

        <div className='w-full md:w-1/2 flex justify-center'>
          <Image
            src="/images/chicken_blob.svg"
            alt="Farmer"
            width={400}
            height={300}
            className='rounded-2xl w-full max-w-[400px] h-auto'
          />
        </div>

        <div className='flex flex-col gap-4 w-full md:w-1/2'>

          <Subheading>Healthy & Happy</Subheading>

          <Heading className='text-3xl md:text-4xl w-full md:w-4/5'>
            Every hen has room to roam, perch and nest
          </Heading>

          <BodyText className="flex flex-col gap-3 *:flex *:items-start *:gap-2">
            We raise our flocks with care and balance, so the birds are healthier and the eggs taste like it.

            <p>
              <FaCheckCircle className='text-amber-400 shrink-0 mt-1'/>
              At least 4 m² of outdoor ground for every hen, with shade and dust baths.
            </p>

            <p>
              <FaCheckCircle className='text-amber-400 shrink-0 mt-1'/>
              Grain mixed on the farm, with no routine antibiotics.
            </p>

            <p>
              <FaCheckCircle className='text-amber-400 shrink-0 mt-1'/>
              Two health checks in every shed, every day, written in the logbook.
            </p>
          </BodyText>

          <Link href='/products'>
            <Button>See Our Products</Button>
          </Link>

        </div>
      </div>

      {/* journey */}
      <Timeline/>

      {/* Icons */}
      <IconBox/>

      {/* The family */}
      <div className='px-5 md:px-10 py-10'>

        <div className='flex flex-col items-center gap-5 md:gap-10 mt-5 text-center'>
          <Subheading>The family</Subheading>

          <Heading className='text-3xl md:text-4xl'>
            Meet the people behind your eggs
          </Heading>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10 mt-10'>

          {team.map((person, key) => (
            <div key={key} className='flex flex-col items-center gap-y-2'>
              <RoundedImage size={200} src={person.image}/>
              <div className='text-green-800 font-bold text-lg md:text-xl text-center'>
                {person.name}
              </div>
              <div className='text-gray-500'>
                {person.title}
              </div>
            </div>
          ))}

        </div>
      </div>

      <CTAbanner/>
    </>
  )
}

export default page