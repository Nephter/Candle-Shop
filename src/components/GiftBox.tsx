import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const GiftBox = () => {
  return (
    <div className="flex-col" style={{ fontFamily: "Kaushan" }}>
      <div className="w-full flex bg-amber-50 mt-44 relative">

        <div className="relative w-1/3 h-[500px]">
          <Image src="/gift1.png" alt="summer" layout="fill" objectFit="cover" style={{ transform: 'scaleX(-1)' }} />
        </div>

        <div className="w-2/3 flex flex-col justify-end">
          <div className="text-start pb-20 flex flex-col justify-end space-y-8 pl-6 h-full ">
            <p className="text-2xl opacity-80">
              GIFT SETS
            </p>
            <div className="flex-col space-y-0">
              <p className="text-sm opacity-80">
                WE'VE GOT GIFT SETS, AND THEY COME IN BOXES.
              </p>
              <p className="text-sm opacity-80">
                EVERY BOX HAS BEEN TESTED ON ANIMALS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Button variant="outline" className="mt-16 justify-center flex bg-sky-700 bg-opacity-20"><p className="opacity-70">VIEW GIFT SETS</p></Button>
      </div>
    </div>
  )
}

export default GiftBox
