'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const GiftBox = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={2} animatePreScroll={false} >

      <div className="flex-col" style={{ fontFamily: "Kaushan" }}>
        <div className="w-full flex bg-yellow-900 bg-opacity-10 mt-20 relative rounded-sm ">

          <div className="flex relative r-0 h-[500px]">
            <Image src="/gift1.png" alt="summer" width={800} height={700} style={{ transform: 'scaleX(-1)' }} />
          </div>

          <div className="w-2/3 flex flex-col justify-end">
            <div className="text-start pb-20 flex flex-col justify-end space-y-4 pl-14 h-full ">
              <p className="text-2xl opacity-80 tracking-wider">
                GIFT SETS
              </p>
              <div className="flex-col space-y-0">
                <p className=" opacity-70 w-96">
                  We've got gift sets, and they come in boxes. Every gift is a set. Every box contains a gift. Every gift has been tested on animals. What more could you ask for.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Button variant="outline" className="mt-16 justify-center flex bg-sky-700 bg-opacity-20"><p className="opacity-70">VIEW GIFT SETS</p></Button>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default GiftBox