import React, { Children } from 'react'
import { Fragment } from 'react'

const events = [
    {
        year: 1998,
        title: "Forty hens",
        text: "Our grandfather starts a small flock in a borrowed barn."
    },
    {
        year: 2004,
        title: "The first shed",
        text: "We build our own shed and sell eggs at the weekly market."
    },
    {
        year: 2011,
        title: "Our Own feed",
        text: "Grain is mixed on site to a recipe our vet signs off."
    },
    {
        year: 2016,
        title: "Farm visits",
        text: "Families start coming on Saturday mornings to meet the hens."
    },
    {
        year: 2024,
        title: "Six sheds",
        text: "The flock reaches 12,000 hens, each shed still walked daily."
    },
]
const Timeline = () => {
    return (
        <div className='flex w-full p-30'>
            {events.map((event, key) => (
                <div key={key}>
                    <Circle>
                        <Pillar />
                    </Circle>
                    <EventCard year={event.year} title={event.title} text={event.text} />
                </div>
            ))}
        </div>
    )
}

const Circle = ({ children }) => {
    return (
        <div className='flex items-center w-full'>
            <div className='rounded-full border-2 border-green-500 bg-white p-1'>
                <div className='bg-amber-300 rounded-full w-5 h-5'></div>
            </div>
            {children}
        </div>
    )
}

const Pillar = () => {
    return (
        <div className='bg-lime-300 rounded-full h-1 flex-1'></div>
    )
}

const EventCard = ({ year, title, text }) => {
    return (
        <div className='flex flex-col gap-y-1 pr-6 mt-2'>
            <div className='text-green-800 font-bold text-2xl'>{year}</div>
            <div className='text-green-800 font-bold text-xl'>{title}</div>
            <div className='text-gray-500 text-md leading-relaxed'>{text}</div>
        </div>
    )
}

export default Timeline