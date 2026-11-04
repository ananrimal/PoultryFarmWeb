import React from 'react'

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
        <div className='flex flex-col md:flex-row w-full p-5 md:p-10 lg:p-20'>

            {events.map((event, key) => (
                <div key={key} className='flex flex-row md:flex-col flex-1'>

                    {/* Circle and line together */}
                    <div className='flex flex-col md:flex-row items-center md:w-full'>

                        <Circle />

                        {key !== events.length - 1 && (
                            <div className='bg-lime-300 w-1 h-16 md:w-auto md:h-1 md:flex-1'></div>
                        )}

                    </div>

                    <EventCard
                        year={event.year}
                        title={event.title}
                        text={event.text}
                    />

                </div>
            ))}

        </div>
    )
}

const Circle = () => {
    return (
        <div className='rounded-full border-2 border-green-500 bg-white p-1 shrink-0 z-10'>
            <div className='bg-amber-300 rounded-full w-5 h-5'></div>
        </div>
    )
}
const EventCard = ({ year, title, text }) => {
    return (
        <div className='flex flex-col gap-y-1 pr-4 mt-2 mb-6 md:mb-0'>
            <div className='text-green-800 font-bold text-xl md:text-2xl'>{year}</div>
            <div className='text-green-800 font-bold text-lg md:text-xl'>{title}</div>
            <div className='text-gray-500 text-sm md:text-md leading-relaxed'>{text}</div>
        </div>
    )
}

export default Timeline