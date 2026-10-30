"use client"
import React from 'react'
import { useState } from "react";
import { FaChevronDown,FaChevronUp, FaSmile,FaMoneyBill,FaWalking, FaTruck, } from "react-icons/fa";
import BodyText from '../components/Home/BodyText';

const iconSize=25
const faq = [
{ id: 1, category: 'General', question: 'What makes CoopFarm products different from other poultry products?', answer: 'CoopFarm products come straight from our own farm, so you get fresh eggs and poultry without middlemen. Our birds are raised with care, on quality feed and in clean, healthy conditions. That means better taste, better quality, and products you can trust.' },
{ id: 2, category: 'Delivery', question: 'When can I expect delivery after ordering?', answer: 'Orders placed before noon are usually delivered the same day or the next morning. Delivery times may vary slightly depending on your location.' },
{ id: 3, category: 'Pricing', question: 'How much do your eggs and poultry products cost?', answer: 'Prices depend on the product and quantity. Please check our products page for current rates, or contact us for the latest pricing.' },
{ id: 4, category: 'Visit', question: 'When can I visit your farm?', answer: 'Visitors are welcome every day from 9 AM to 5 PM. Weekends can get busy, so weekday visits are more relaxed.' },
{ id: 5, category: 'Delivery', question: 'Is there a minimum order requirement for delivery?', answer: 'Yes, we have a small minimum order amount for home delivery. Orders below it can be picked up directly from the farm.' },
{ id: 6, category: 'General', question: 'Are your eggs and chickens raised on your own farm?', answer: 'Yes, all our eggs and chickens are raised on our own farm. This lets us control quality, feed, and cleanliness from start to finish.' },
{ id: 7, category: 'Visit', question: 'Do I need to schedule an appointment before visiting?', answer: 'We recommend calling or messaging us ahead of time so we can guide you properly. Small groups are usually welcome without a long wait.' },
{ id: 8, category: 'Pricing', question: 'Do you offer discounts for bulk orders?', answer: 'Yes, we offer special rates for bulk orders from restaurants, shops, and events. Contact us with your quantity and we will share a quote.' },
{ id: 9, category: 'Delivery', question: 'How much does delivery cost?', answer: 'Delivery charges depend on your distance from the farm. Nearby areas have a low flat fee, and large orders may qualify for free delivery.' },
{ id: 10, category: 'Delivery', question: 'Which locations do you deliver to?', answer: 'We deliver across Kathmandu Valley and nearby areas. If your location is not listed, contact us and we will check if we can reach you.' },
]

const Dropdown = ({showCategory}) => {
    const [openID, setOpenID] = useState(null)
    const displayCategory = () => {
    if (!showCategory) {
        return faq;
    }

    return faq.filter((ques) => ques.category === showCategory);
}
  return (
    <>
    {displayCategory().map((ques) => {
    return (
        <div key={ques.id} className='flex flex-col'>
            <button
                type="button"
                className="w-full text-left"
                onClick={() => {
                    openID === ques.id ? setOpenID(null) : setOpenID(ques.id)
                }}
            >
                <div className='flex items-center gap-3 font-bold justify-between w-1/2 mx-auto py-4'>
                    <span className='flex items-center justify-center w-14 h-14 border p-2 border-gray-400 rounded-lg text-gray-400 shrink-0'>
                        {
                            ques.category === 'General' ? <FaSmile size={iconSize}/> :
                            ques.category === 'Pricing' ? <FaMoneyBill size={iconSize}/> :
                            ques.category === 'Visit' ? <FaWalking size={iconSize}/> :
                            <FaTruck size={iconSize}/>
                        }
                    </span>

                    <span className='text-green-900 flex-1'>
                        {ques.question}
                    </span>

                    {openID === ques.id ? <FaChevronUp/> : <FaChevronDown/>}
                </div>
           

            <BodyText
                className={`w-1/2 mx-auto px-17 pb-4 text-sm/6 transition-all duration-300 ease-in-out ${
                    openID === ques.id
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                {ques.answer}
            </BodyText>
             </button>
        </div>
    )
})}
   
  </>
  ) 
}

export default Dropdown