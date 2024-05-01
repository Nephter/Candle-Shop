import React from 'react'
import Image from 'next/image'

const Citrus = () => {
  return (
    <div className="pt-48 ">
      <div className="w-full h-[700px] relative flex pt-40">
        <Image src="/citrusWide2.png" alt="citrus" fill objectFit="cover" style={{ objectPosition: "center bottom" }} />
      </div>
    </div>
  )
}

export default Citrus