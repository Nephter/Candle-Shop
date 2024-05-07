'use client'

import React from 'react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css';

const Summer = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={2} animatePreScroll={false} >

      <div className="flex-col " style={{ fontFamily: "Kaushan" }}>
        <div className="w-full flex bg-yellow-900 bg-opacity-10 mt-20 relative justify-between">
          <div className="w-2/3 justify-end">

            <div className="h-3/6 w-full" />

            <div className="flex pr-14">

              <div style={{ flexGrow: 1 }} />

              <div className="text-end h-full pt-10 flex-col space-y-4 " >
                <p className="text-2xl opacity-80 tracking-wider">
                  SUMMER COLLECTION
                </p>

                <p className="opacity-70 w-96">
                  Our summer collection brings the heat. From sweat-proof sunblock to heatwave-ready eyeball protection, we've got you covered. They smell like sweat.
                </p>
              </div>
            </div>

          </div>
          <div className="flex relative r-0 h-[500px]">
            <Image src="/summerWide.png" alt="summer" width={800} height={700} />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button variant="outline" className="mt-16 justify-center flex bg-sky-700 bg-opacity-20">
            <p className="opacity-70">VIEW SUMMER COLLECTION</p>
          </Button>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default Summer