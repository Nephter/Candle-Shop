import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs'
import Image from 'next/image'
import React from 'react'

const Process = () => {
  return (
    <div className="w-full justify-center flex relative pb-64">
      <Tabs defaultValue="ourProcess" className=" relative">


        <TabsContent value="ourProcess">
          <div className="flex-col " style={{ fontFamily: "Kaushan" }}>
            <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative rounded-sm flex">

              <div className="relative w-full ">
                <Image src="/process1.webp" alt="summer" width={600} height={600} className="rounded-sm" style={{ transform: 'scaleX(-1)' }} />
              </div>

              <div className="flex flex-col justify-end p-16">
                <div className="text-start  flex flex-col justify-end space-y-4  h-full">
                  <p className="text-2xl opacity-80 tracking-wider">
                    OUR PROCESS
                  </p>
                  <div className="flex-col space-y-0">
                    <p className="opacity-70 w-96">
                      We don't just pour our own candles. We make our own vessels too. From creation to packaging, all our products go through a multistep process before they are headed to you. Get to know what goes into each candle we produce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="casting">
          <div className="flex-col" style={{ fontFamily: "Kaushan" }}>
            <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative rounded-e flex">

              <div className="relative w-full">
                <Image src="/process2.webp" alt="summer" width={600} height={600} className="rounded-e w-max-[600px] h-[600px]" style={{ transform: 'scaleX(-1)' }} />
              </div>

              <div className="flex flex-col justify-end p-16">
                <div className="text-start  flex flex-col justify-end space-y-4  h-full">
                  <p className="text-2xl opacity-80 tracking-wider">
                    CASTING
                  </p>
                  <div className="flex-col space-y-0">
                    <p className="opacity-70 w-96">
                      Our concrete vessels have humble beginnings. Casting involves the creation and use of silicone molds in order to ensure precise measurements each and every time. Our vessels are cast from gypsum and sand, creating a wonderfully minimalist, textured vessel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sanding">
          <div className="flex-col " style={{ fontFamily: "Kaushan" }}>
            <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative rounded-e flex">

              <div className="relative w-full ">
                <Image src="/process3.webp" alt="summer" width={600} height={600} className="rounded-s" />
              </div>

              <div className="flex flex-col justify-end p-16">
                <div className="text-start  flex flex-col justify-end space-y-4  h-full">
                  <p className="text-2xl opacity-80 tracking-wider">
                    SANDING
                  </p>
                  <div className="flex-col space-y-0">
                    <p className="opacity-70 w-96">
                      Once each vessel has cured, it is removed from the mold and sanded. Sharp edges are carefully removed with a diamond grit sande
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sealing">
          <div className="flex-col " style={{ fontFamily: "Kaushan" }}>
            <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative rounded-sm flex">

              <div className="relative w-full ">
                <Image src="/process4.webp" alt="summer" width={600} height={600} className="rounded-e" style={{ transform: 'scaleX(-1)' }} />
              </div>

              <div className="flex flex-col justify-end p-16">
                <div className="text-start  flex flex-col justify-end space-y-4  h-full">
                  <p className="text-2xl opacity-80 tracking-wider">
                    SEALING
                  </p>
                  <div className="flex-col space-y-0">
                    <p className="opacity-70 w-96">
                      Our vessels in their natural state are pourous, so we use a water-based, food-grade sealer to prepare these vessels for wax. Each coat is applied by hand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="packaging">
          <div className="flex-col " style={{ fontFamily: "Kaushan" }}>
            <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative rounded-e flex">

              <div className="relative w-full ">
                <Image src="/process5.webp" alt="summer" width={600} height={600} className="rounded-s" />
              </div>

              <div className="flex flex-col justify-end p-16">
                <div className="text-start  flex flex-col justify-end space-y-4  h-full">
                  <p className="text-2xl opacity-80 tracking-wider">
                    PACKAGING
                  </p>
                  <div className="flex-col space-y-0">
                    <p className="opacity-70 w-96">
                      Last but not least, we leave no detail overlooked and design all our packaging in house. Our packaging and inserts are designed with you in mind. We use sustainable products wherever possible and want to leave you with a personal connection to more than just a candle but to us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <div className="w-full flex  justify-center">
          <TabsList className="bg-transparent pt-10 space-x-32" style={{ fontFamily: "Kaushan" }}>
            <TabsTrigger value="ourProcess" className="focus:outline-none focus:border-b-[3px] focus:border-slate-700 rounded-none outline-none p-0" data-state-active="border-b-3 border-slate-700">
              <p className="border-b-2 tracking-wider border-transparent">
                OUR PROCESS
              </p>
            </TabsTrigger>

            <TabsTrigger value="casting" className="focus:outline-none focus:border-b-[3px] focus:border-slate-700 rounded-none outline-none p-0" data-state-active="border-b-3 border-slate-700">
              <p className="border-b-2 tracking-wider border-transparent ">
                CASTING
              </p>
            </TabsTrigger>

            <TabsTrigger value="sanding" className="focus:outline-none focus:border-b-[3px] focus:border-slate-700 rounded-none outline-none p-0" data-state-active="border-b-3 border-slate-700">
              <p className="border-b-2 tracking-wider border-transparent ">
                SANDING
              </p>
            </TabsTrigger>

            <TabsTrigger value="sealing" className="focus:outline-none focus:border-b-[3px] focus:border-slate-700 rounded-none outline-none p-0" data-state-active="border-b-3 border-slate-700">
              <p className="border-b-2 tracking-wider border-transparent ">
                SEALING
              </p>
            </TabsTrigger>

            <TabsTrigger value="packaging" className="focus:outline-none focus:border-b-[3px] focus:border-slate-700 rounded-none outline-none p-0" data-state-active="border-b-3 border-slate-700">
              <p className="border-b-2 tracking-wider border-transparent ">
                PACKAGING
              </p>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  )
}

export default Process


