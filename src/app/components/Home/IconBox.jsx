import { FaMedal, FaBox, FaSmileBeam, FaShippingFast } from "react-icons/fa";
import React from 'react'
import Heading from "./Heading";
import BodyText from "./BodyText";
const banner=[
    {id:1, icon: <FaBox/>, title:"Products Range", desc:"We offer a wide variety of fresh poultry and eggs, raised with care for every customer."},
    {id:2, icon: <FaMedal/>, title:"Quality Matters", desc:"Every product reflects our promise of freshness, family tradition, and animal respect."},
    {id:3, icon: <FaSmileBeam/>, title:"Satisfaction", desc:"We build trust through honest service and fresh poultry that exceeds expectations."},
    {id:4, icon: <FaShippingFast />, title: "Fast Shipping", desc:"Enjoy farm-fresh deliveries right to your door, fast and reliable."}
    
]
const IconBox = () => {
  return (
    <>
    <div className="flex bg-gray-100 gap-8 px-25 py-20 ">
        
        {banner.map((item)=>{
            return(
                <div key={item.id} className="flex flex-col items-center gap-5 w-1/2 text-gray-400">
                <div className="text-6xl">{item.icon} </div>
                <Heading className="text-2xl">{item.title}</Heading>
                <BodyText className="text-center">{item.desc}</BodyText>
                </div>
            )
        })}
    </div>
   
    </>
  )
}

export default IconBox