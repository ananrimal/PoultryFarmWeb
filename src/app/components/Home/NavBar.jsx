import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='bg-white flex items-center justify-between p-3'>
    <Image
    src="/images/GaugharPoultryLogo.svg"
    alt='logo'
    width={200}
    height={200}
    className='ml-20'
    />
    <ul className='flex mr-10 text-lg text-green-900 font-semibold divide-x-2 divide-gray-400 *:px-5 *:cursor-pointer'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/">Pages</Link></li>
        <li><Link href="/">Blog</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
    </ul>
    </nav>

  )
}

export default NavBar