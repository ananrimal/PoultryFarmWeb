"use client"
import React, {useState, useEffect} from 'react'
import Subheading from './Subheading'
import Heading from './Heading'
import BodyText from './BodyText'
import RoundedImage from './RoundedImage'

const statements=
    [{
    id:1, 
    name:"Anita Sharma", 
    role:"Customer", 
    img:"/people/person1.jpg", 
    testimonial:"The CoopFarm team treats every order with genuine care. You can taste the difference in every fresh egg we receive weekly."
    },
    {
    id:2, 
    name:"Ram Maharjan",
    role:"Customer",
    img:"/people/person2.jpg",
    testimonial:"Great quality poultry products at reasonable prices. I'm very happy with every purchase!"
    },
    {
    id:3,
    name:"Bir Bahadur",
    role:"Customer",
    img:"/people/person3.jpg",
    testimonial:"You can really taste the freshness in their products. Highly recommended for every household!"
    },
    {
    id:4,
    name:"Gita Tamang",
    role:"Customer",
    img:"/people/person4.jpg",
    testimonial:"Excellent customer service and fresh farm products. I'll definitely keep coming back!"
    },
    {
    id:5,
    name:"Shreya Shrestha",
    role:"Customer",
    img:"/people/person5.jpg",
    testimonial:"The delivery is always quick and hassle-free, and my orders arrive fresh and right on time. I really appreciate their reliable service and attention to quality. Definitely a great experience every time!"
},]

const slides = [...statements, statements[0]]

const Testimonials = () => {
const [slide, setSlide] = useState(1)
const [animate, setAnimate] = useState(true)


useEffect(() => {
  const interval = setInterval(() => {
    setAnimate(true)
    setSlide(prev => prev + 1)
  }, 3000)

  return () => clearInterval(interval)
}, [])


useEffect(() => {
  if (slide === slides.length) {
    const timeout = setTimeout(() => {
      setAnimate(false)
      setSlide(1)
    }, 700)
    return () => clearTimeout(timeout)
  }
}, [slide])

const nextSlide = () => {
  setSlide(slide === statements.length ? 1 : slide + 1)
}

const prevSlide = () => {
  setSlide(slide === 1 ? statements.length : slide - 1)
}

   return (
    <section id="testimonials">
    <div className="min-h-[720px] md:h-180 w-full bg-[url('/images/agriculture-Land.jpg')] bg-cover bg-center relative py-10 md:py-0">
     <div className="absolute inset-0 bg-green-950/55"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">

        <div className='relative mt-10 md:top-25 md:mt-0 mx-5 md:ml-10 lg:ml-30 flex flex-col gap-5'>
        <Subheading className='text-[#84C224]'>Testimonials</Subheading>
        <Heading className='text-white text-3xl md:text-4xl'> What people say about us</Heading>  

        <div className='w-full overflow-hidden'>
            <div className={`flex items-center ${animate ? 'transition-transform duration-700 ease-in-out' : ''}`}
     style={{ transform: `translateX(-${(slide - 1) * 100}%)` }}>
                {slides.map((items, i)=>{
                return(
                    <div key={i} className='w-full shrink-0 basis-full p-4'>
                    <BodyText className="relative bg-white w-full mb-8 min-h-48 h-auto p-5 md:p-8 text-center text-base md:text-xl rounded-2xl break-words leading-relaxed md:leading-loose">
                        &quot;{items.testimonial}&quot;
                        <span className="absolute left-1/2 -bottom-4 h-0 w-0 -translate-x-1/2 border-x-[16px] border-t-[16px] border-x-transparent border-t-yellow-400" />
                    </BodyText>

                    <div className='items-center text-white flex flex-col text-lg/8'>
                        <RoundedImage src={items.img}/>
                        <div>{items.name}</div>
                        <div>{items.role}</div>
                    </div>
                    </div>
                )
                })}
            </div>
            </div>
            </div>

            {/* Rounded images appear from 768px */}
                  <div className='hidden md:flex flex-col justify-evenly items-center relative top-25 mr-5 lg:mr-10'> 
                <div><RoundedImage size={100} src="/people/person2.jpg"/></div>
                <div className='flex gap-8 lg:gap-30'>
                    <RoundedImage size={130} src="/people/person3.jpg"/>
                    <RoundedImage size={150} src="/people/person4.jpg"/>
                    <RoundedImage size={120} src="/people/person5.jpg"/>
                </div>
                <div className='flex gap-10 lg:gap-40'>
                    <RoundedImage size={120} src="/people/person6.jpg"/>
                    <RoundedImage size={100} src="/people/person7.jpg"/>
                </div>
            </div>

     </div>
   </div>
 
    </section>
  )
}

export default Testimonials
