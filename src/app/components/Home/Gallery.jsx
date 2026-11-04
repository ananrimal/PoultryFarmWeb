"use client"
import React, {useState} from 'react'
import Subheading from './Subheading'
import Heading from './Heading'
import Image from 'next/image'
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const images=[
  {id:1, src:"/gallery/chicken.jpg", alt:"gallery image"},
  {id:2, src:"/gallery/chickens.jpg", alt:"gallery image"},
  {id:3, src:"/gallery/Egg-Production-System-in-Nepal.jpg", alt:"gallery image"},
  {id:4, src:"/gallery/eggs.jpg", alt:"gallery image"},
  {id:5, src:"/gallery/feeding.jpg", alt:"gallery image"},
  {id:6, src:"/gallery/local_chicken.jpg", alt:"gallery image"},
  {id:7, src:"/gallery/group.jpg", alt:"gallery image"},
  {id:8, src:"/gallery/poultryfarm.jpg", alt:"gallery image"},
]

const Gallery = () => {
  const [slide, setSlide] = useState(1)
  const [lightbox, setLightbox]=useState(false)

  return (
    <>
    <div className='bg-gray-100 relative w-full overflow-hidden'>
    
    <div className='flex flex-col items-center gap-5 md:gap-8 px-5 py-10 md:p-18'>
    <Subheading className='text-2xl md:text-4xl'>Our Gallery</Subheading>
    <Heading className='text-2xl text-center md:text-4xl'>Get to know our farm</Heading>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 sm:px-8 md:px-10 lg:px-15 pb-10'>   
    
    {images.map((pic)=>(
      <div key={pic.id} className='relative group h-56 sm:h-52 md:h-64 w-full'>
      
      <div className='absolute inset-0 bg-black/40 pointer-events-none z-10 opacity-0 rounded-xl group-hover:opacity-100 transition-opacity duration-300'></div>

       <Image
        src={pic.src}
        alt={pic.alt}
        fill
        onClick={() => {
          setSlide(pic.id);
          setLightbox(true);
        }}  
        className='object-cover rounded-xl cursor-pointer'
       />
      </div>
    ))}
    </div>

    <Carousel images={images} slide={slide} setSlide={setSlide} lightbox={lightbox} setLightbox={setLightbox}/>

    </div>
    </>
  )
}


const Carousel = ({images, slide, setSlide, lightbox, setLightbox})=>{

const nextSlide = () => {
  setSlide(slide===images.length? 1: slide+1)
}

const prevSlide = () => {
  setSlide(slide===1? images.length : slide-1)
}

  return(
    <>
    {lightbox &&(
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/90 overflow-hidden'>

      <IoMdClose 
        size={30} 
        className='absolute top-5 right-5 md:top-10 md:right-10 text-white cursor-pointer z-50' 
        onClick={() => setLightbox(false)}
      />

      <BsArrowLeftCircleFill 
        size={30} 
        className='absolute left-3 md:left-5 top-1/2 -translate-y-1/2 text-white cursor-pointer z-50' 
        onClick={prevSlide}
      />

      {images.map((item)=>{
        return (
          <div key={item.id} className={slide===item.id?"absolute inset-0 flex items-center justify-center":"hidden"}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              onClick={()=>setSlide(item.id)}
              className="object-contain p-12 md:p-20"
            />
          </div>
        )
      })}

      <BsArrowRightCircleFill 
        size={30} 
        className='absolute right-3 md:right-5 top-1/2 -translate-y-1/2 text-white cursor-pointer z-50' 
        onClick={nextSlide}
      />

      <span className="absolute bottom-5 flex justify-center z-50">
        {images.map((idx) => {
          return (
            <button
              key={idx.id}
              onClick={()=> setSlide(idx.id)}
              disabled={slide === idx.id}
              className='bg-gray-200 h-2 w-2 rounded-full mx-1 cursor-pointer shadow-xl disabled:bg-white'
            ></button>
          );
        })}
      </span>

    </div>
    )}
  </>
  )
}

export default Gallery
