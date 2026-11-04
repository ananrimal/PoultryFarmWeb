import React from 'react'
import Image from 'next/image'

const RoundedImage = ({ src, alt = "person", size = 80, className = "", "data-aos": dataAos }) => {
  return (
    <div
      data-aos={dataAos}
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover rounded-full"
      />
    </div>
  )
}

export default RoundedImage