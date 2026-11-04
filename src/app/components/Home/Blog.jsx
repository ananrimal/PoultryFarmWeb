import React from 'react'
import Subheading from './Subheading'
import Heading from './Heading'
import Image from 'next/image'
import BodyText from './BodyText'
import Link from 'next/link'

export const articles=[
    {id:1, slug:"from-hen-to-table", src:"/gallery/Egg-Production-System-in-Nepal.jpg",date:"September 28, 2025", title:"From Hen to Table: How Fresh Eggs Reach You", article:"Every morning, our layer hens produce eggs that are collected, graded, and packed within hours. Here’s how we keep every egg fresh, clean, and ready for your kitchen.",},
    {id:2, slug:"healthy-flocks-start",src:"/gallery/chickens.jpg", date:"September 28, 2025", title:"Healthy Flocks Start With Space and Clean Air", article:"A roomy, well-ventilated shed keeps our broilers calm and healthy. Learn how clean bedding, fresh water, and steady feed help the flock grow strong without stress.",},
    {id:3, slug:"a-day-in-the-life-of-a-poultry-farmer", src:"/gallery/feeding.jpg",date:"September 28, 2025", title:"A Day in the Life of a Poultry Farmer", article:"Feeding, checking water, and watching over every chick: farm life starts at sunrise. Meet the people who care for our flock with patience and pride every single day.",},
]

const Blog = () => {
  return (
    <div className='py-10 md:py-20 px-5 md:px-10 lg:px-20'>

      <Subheading className='text-xl sm:text-2xl md:text-3xl/20 text-center'>
        Our Blog
      </Subheading>

      <Heading className='text-2xl sm:text-3xl md:text-4xl w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto md:mx-0 md:ml-10 lg:ml-10 text-center md:text-left'>
        All our birds roam freely with access to nests, perches, and fresh feed
      </Heading>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8 md:my-10 gap-8 lg:gap-10'>

        {articles.map((items)=>(
          <div className="flex flex-col items-start h-full" key={items.id}>

            <Image
              src={items.src}
              alt="blog_image"
              width={300}
              height={300}
              className='w-full h-[180px] sm:h-[200px] object-cover rounded-xl'
            />

            <div className='mt-3 text-sm md:text-base'>
              {items.date}
            </div>

            <Heading className='mt-2 text-lg sm:text-xl'>
              {items.title}
            </Heading>

            <BodyText className={'mt-3 text-sm sm:text-base'}>
              {items.article}
            </BodyText>

            <Link
              href={`/blog/${items.slug}`}
              className='self-start mt-auto py-2 text-amber-400 font-bold cursor-pointer hover:text-amber-300 hover:underline'
            >
              Read More &raquo;
            </Link>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Blog