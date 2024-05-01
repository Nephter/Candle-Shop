import React from 'react'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const Summer = () => {
  return (
    <div className="flex-col" style={{ fontFamily: "Kaushan" }}>
      <div className="w-full flex bg-amber-50 mt-44 relative justify-between">
        <div className="w-2/3">

          <div className="h-3/5 w-full " />

          <div className="flex justify-between">
            <div />
            <div>
              <div className="text-end h-full pt-6 flex-col space-y-8 pr-6" >
                <p className="text-2xl opacity-80">
                  SUMMER COLLECTION
                </p>
                <div className="flex space-x-4">
                  <Badge variant="outline"><p className="opacity-80">SWEAT</p></Badge>
                  <Badge variant="outline"><p className="opacity-80">SUNBLOCK + EYEBALL</p></Badge>
                  <Badge variant="outline"><p className="opacity-80">HEATWAVE</p></Badge>
                </div>
              </div>
            </div>

          </div>


        </div>
        <div className="flex relative r-0 h-[500px]">
          <Image src="/summerWide.png" alt="summer" width={800} height={700} />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button variant="outline" className="mt-16 justify-center flex bg-sky-700 bg-opacity-20"><p className="opacity-70 ">VIEW SUMMER COLLECTION</p></Button>
      </div>
    </div>

  )
}

export default Summer