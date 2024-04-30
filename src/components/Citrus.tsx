import React from 'react'
import Image from 'next/image'

const Citrus = () => {
  return (
    <div className="pt-40">
      <div className="w-full h-[500px] border relative flex pt-40">
        <Image src="/citrusWide.png" alt="citrus" fill objectFit="cover" className="opacity-100 brightness-90" />
      </div>
    </div>
  )
}

export default Citrus