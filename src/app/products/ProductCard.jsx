
import React from 'react'
import Button from '../components/Home/Button'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
import Heading from '../components/Home/Heading';
import BodyText from '../components/Home/BodyText';
import Stats from '../components/Home/Stats';
import { GiChicken } from 'react-icons/gi';

const products = [
  {
    id: 1,
    src: "/gallery/eggs.jpg",
    title: "Fresh Eggs",
    price: 200,
    quantity:"dozen",
    description: [
  "By the dozen",
  "Farm-fresh, free of additives",
  "Orders over 5 dozen"
]
  },
  {
    id: 2,
    src: "/gallery/Egg-Production-System-in-Nepal.jpg",
    title: "Local Eggs",
    price: 250,
    quantity:"dozen",
    description: [
  "By the dozen",
  "Farm-fresh, free of additives",
  "Orders over 5 dozen"
]
  },
    {
    id: 3,
    src: "/gallery/chickens.jpg",
    title: "Broiler Chicken",
    price: 230,
    quantity:"kg",
    description: [
  "100% farm-raised quality",
  "Fed with natural gains",
  "Orders over 2 chickens"
]
  },
    {
    id: 4,
    src: "/gallery/local_chicken.jpg",
    title: "Local Chicken",
    price: 340,
    quantity:"kg",
    description: [
  "100% farm-raised quality",
  "Fed with natural gains",
  "Orders over 2 chickens"
]
  },

]

const ProductCard = () => {
  return (
    <>
    <div className="grid grid-cols-2 gap-10 px-50 w-full">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="bg-gray-200 rounded-xl p-7 w-full flex flex-col gap-4"
          >
            <Image
              src={product.src}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-70 object-cover rounded-lg"
            />

            <h2 className="font-bold text-2xl text-emerald-900">
              {product.title}
            </h2>

            <div className="flex flex-col gap-4 text-gray-700 text-sm">
  {product.description.map((text, index) => (
    <p key={index} className="flex items-center gap-2">
      <span className='text-lime-500'>< FaCheck/> </span>
      <span>{text}</span>
    </p>
  ))}
</div>

            <p className="font-bold text-emerald-900 ">Rs. {product.price}<span>/{product.quantity}</span></p>

            <Button className="text-sm px-3 py-2">
             <div className='flex gap-2 items-center'><GiChicken/> Buy Now </div> 
            </Button>
          </div>
        )
      })}
    </div>  
    <div className='flex gap-10 px-30 mt-10 justify-around'>
    <InfoCard title="How to order?" text="Ordering from CoopFarm is simple and quick. 
    Call us or send a message, and we’ll deliver fresh poultry right to your door."></InfoCard>
    <InfoCard title="Free Delivery" text="We offer free delivery for every order placed nearby. 
    Enjoy farm-fresh eggs and poultry without extra cost or delay."></InfoCard>
    </div>

    <Stats/>
</>
)
}


const InfoCard= ({children, title, text}) => {
  return(
    <div className='bg-green-900 text-white rounded-xl p-10'>
    <Heading className='text-amber-300 text-xl/12 '>{title}</Heading>
    <BodyText className={'text-white text-base/7'}>{text}</BodyText>
    </div>
  )
}

export default ProductCard
