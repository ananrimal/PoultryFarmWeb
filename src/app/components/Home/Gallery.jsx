import React from 'react'
import Subheading from './Subheading'
import Heading from './Heading'
import Image from 'next/image'

const images=[
  {id:1, src:"/gallery/chicken.jpg"},
  {id:2, src:"/gallery/chickens.jpg"},
  {id:3, src:"/gallery/Egg-Production-System-in-Nepal.jpg"},
  {id:4, src:"/gallery/eggs.jpg"},
  {id:5, src:"/gallery/feeding.jpg"},
  {id:6, src:"/gallery/local_chicken.jpg"},
  {id:7, src:"/gallery/group.jpg"},
  {id:8, src:"/gallery/poultryfarm.jpg"},
]
const Gallery = () => {
  return (
    <>
    <div className='bg-gray-100'>
    <div className='flex flex-col items-center gap-8 p-18'>
    <Subheading className='text-4xl'>Our Gallery</Subheading>
    <Heading className='text-5xl'>Get to know our farm</Heading>
    </div>
    <div className='grid grid-cols-4 gap-5 px-28 pb-12'>   
    {images.map((pic)=>(
      <div key={pic.id} className='relative h-64 w-full'>
       <Image
        src={pic.src}
        alt="gallery_images"
        fill
        className='object-cover rounded-xl'
         />
         </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default Gallery