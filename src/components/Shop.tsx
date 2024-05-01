import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Shop = () => {
  return (
    <div className="w-full pt-48 text-center flex-col space-y-4" style={{ fontFamily: "Kaushan" }}>

      <p className="text-2xl opacity-80 pb-8">
        BEST SELLERS
      </p>

      <div className="flex w-full space-x-4 justify-center">
        <div className="flex-col text-start">
          <div>
            <Image src="/candle3.png" alt="hero" width={400} height={400} />
          </div>
          <p className="text-sm opacity-80">
            LAVENDER
          </p>
        </div>
        <div className="flex-col text-start">
          <div>
            <Image src="/candle7.png" alt="hero" width={400} height={400} />
          </div>
          <p className="text-sm opacity-80">
            LINEN + ROSE
          </p>
        </div>

        <div className="flex-col text-start">
          <div>
            <Image src="/candle5.png" alt="hero" width={400} height={400} />
          </div>
          <p className="text-sm opacity-80">
            PINECONE + BATHSALTS
          </p>
        </div>

        <div className="flex-col text-start">
          <div>
            <Image src="/candle6.png" alt="hero" width={400} height={400} className="brightness-110 opacity-90 " />
          </div>
          <p className="text-sm opacity-80">
            BIRCH + LEAVES
          </p>
        </div>


      </div>
      <div className="w-full flex justify-center">
        <Button variant="outline" className="mt-10 justify-center flex bg-sky-700 bg-opacity-20 border-none rounded-sm"><p className="opacity-70">VIEW ALL SCENTS</p></Button>
      </div>
    </div >
  )
}

export default Shop