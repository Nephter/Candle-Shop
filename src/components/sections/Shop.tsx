'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const Shop = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={2} animatePreScroll={false} >

      <div className="w-full mt-20 text-center flex-col space-y-4" style={{ fontFamily: "Kaushan" }}>

        <p className="text-2xl opacity-80 pb-8 tracking-wider">
          TOP SELLERS
        </p>

        <div className="flex w-full space-x-4 justify-center px-10">

          <div className="flex-col text-start">
            <div className="relative cursor-pointer overflow-hidden">
              <div className="transition duration-500 ease-in-out transform">
                <Image src="/candle3.png" alt="Lavender Candle" width={600} height={600} />


                <div className="absolute inset-0 flex items-center  transition-all duration-500 ease-in-out">
                  <div className="w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out">
                    <div className="absolute w-full h-full font-bold p-6 text-lg opacity-90 flex-col flex justify-end mx-auto" >
                      <div className="flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                          <p className="text-xl opacity-80 tracking-wider">
                            LAVENDER
                          </p>
                          <p className="text-sm opacity-80 tracking-wider w-1/2">
                            $24.99
                          </p>
                        </div>
                        <p className="text-sm opacity-80 tracking-wider w-1/2">
                          Our combination of lavender and vanilla is a bestseller for a reason. It's a classic scent that's perfect for any room in your home.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm opacity-80 pt-2 tracking-wider">
                LAVENDER
              </p>
            </div>
          </div>

          <div className="flex-col text-start">
            <div className="relative cursor-pointer overflow-hidden">
              <div className="transition duration-500 ease-in-out transform">
                <Image src="/candle7.png" alt="Lavender Candle" width={600} height={600} />


                <div className="absolute inset-0 flex items-center  transition-all duration-500 ease-in-out">
                  <div className="w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out">
                    <div className="absolute w-full h-full font-bold p-6 text-lg opacity-90 flex-col flex justify-end mx-auto" >
                      <div className="flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                          <p className="text-xl opacity-80 tracking-wider">
                            ROSE + TOWEL
                          </p>
                          <p className="text-sm opacity-80 tracking-wider w-1/2">
                            $24.99
                          </p>
                        </div>
                        <p className="text-sm opacity-80 tracking-wider w-1/2">
                          Rose and towel is an old classic scent. Often found in the finest hotels, this scent is perfect for those who want to bring a touch of luxury to their home.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm opacity-80 pt-2 tracking-wider">
                ROSE + TOWEL
              </p>
            </div>
          </div>



          <div className="flex-col text-start">
            <div className="relative cursor-pointer overflow-hidden">
              <div className="transition duration-500 ease-in-out transform">
                <Image src="/candle5.png" alt="Lavender Candle" width={600} height={600} />

                <div className="absolute inset-0 flex items-center  transition-all duration-500 ease-in-out">
                  <div className="w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out">
                    <div className="absolute w-full h-full font-bold p-6 text-lg opacity-90 flex-col flex justify-end mx-auto" >
                      <div className="flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                          <p className="text-xl opacity-80 tracking-wider">
                            PINECONE + BATHSALTS
                          </p>
                          <p className="text-sm opacity-80 tracking-wider w-1/2">
                            $24.99
                          </p>
                        </div>
                        <p className="text-sm opacity-80 tracking-wider w-1/2">
                          A favorite in Florida. This scent will sate your hunger for your neightbor's face. We guarentee it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm opacity-80 pt-2 tracking-wider">
                PINECONE + BATHSALTS
              </p>
            </div>
          </div>

          <div className="flex-col text-start">
            <div className="relative cursor-pointer overflow-hidden">
              {/* Image Container with Hover Effect to Trigger Mask Expansion */}
              <div className="transition duration-500 ease-in-out transform">
                <Image src="/candle6.png" alt="Lavender Candle" width={600} height={600} className="brightness-110 opacity-90 " />
                <div className="absolute inset-0 flex items-center  transition-all duration-500 ease-in-out">
                  <div className="w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out">
                    <div className="absolute w-full h-full font-bold p-6 text-lg opacity-90 flex-col flex justify-end mx-auto" >
                      <div className="flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                          <p className="text-xl opacity-80 tracking-wider">
                            BIRCH + LEAVES
                          </p>
                          <p className="text-sm opacity-80 tracking-wider w-1/2">
                            $24.99
                          </p>
                        </div>
                        <p className="text-sm opacity-80 tracking-wider w-1/2">
                          My personal favorite. This scent has all the trappings of a tree with atleast 1 leaf. It's a must-have for any candle enthusiast.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm opacity-80 pt-2 tracking-wider">
                BIRCH + LEAVES
              </p>
            </div>
          </div>


        </div>
        <div className="w-full flex justify-center">
          <Button variant="outline" className="mt-10 justify-center flex bg-sky-700 bg-opacity-10 border-none "><p className="opacity-70">VIEW ALL SCENTS</p></Button>
        </div>
      </div >
    </ScrollAnimation>
  )
}

export default Shop