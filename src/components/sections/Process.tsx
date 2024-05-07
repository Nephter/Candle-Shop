'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs'
import Image from 'next/image'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const Process = () => {
  const [activeTab, setActiveTab] = React.useState('ourProcess');
  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={2} animatePreScroll={false} >

      <div className="w-full justify-center flex relative pb-64">
        <Tabs defaultValue="ourProcess" className=" relative">


          <TabsContent value="ourProcess" >
            <div className="flex-col " style={{ fontFamily: "Kaushan" }}>
              <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative  flex">

                <div className={`relative w-full ${activeTab === 'ourProcess' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
                  <Image src="/process1.webp" alt="summer" width={600} height={600} style={{ transform: 'scaleX(-1)' }} />
                </div>

                <div className={`flex flex-col justify-end p-16 ${activeTab === 'ourProcess' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
                  <div className="text-start flex flex-col justify-end space-y-4 h-full">
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
              <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative  flex">

                <div className={`relative w-full ${activeTab === 'casting' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
                  <Image src="/process2.webp" alt="summer" width={600} height={600} className=" w-max-[600px] h-[600px]" style={{ transform: 'scaleX(-1)' }} />
                </div>

                <div className={`flex flex-col justify-end p-16 ${activeTab === 'casting' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
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
              <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative  flex">

                <div className={`relative w-full ${activeTab === 'sanding' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
                  <Image src="/process3.webp" alt="summer" width={600} height={600} />
                </div>

                <div className={`flex flex-col justify-end p-16 ${activeTab === 'sanding' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
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
              <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative  flex">

                <div className={`relative w-full ${activeTab === 'sealing' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
                  <Image src="/process4.webp" alt="summer" width={600} height={600} style={{ transform: 'scaleX(-1)' }} />
                </div>

                <div className={`flex flex-col justify-end p-16 ${activeTab === 'sealing' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
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
              <div className="mx-auto max-w-screen-xl w-full bg-yellow-900 bg-opacity-10 mt-44 relative  flex">

                <div className={`relative w-full ${activeTab === 'packaging' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
                  <Image src="/process5.webp" alt="summer" width={600} height={600} />
                </div>

                <div className={`flex flex-col justify-end p-16 ${activeTab === 'packaging' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} duration-500 ease-in`}>
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
              <TabsTrigger value="ourProcess" className={` border-b-[3px] border-slate-700 rounded-none outline-none p-0 ${activeTab === 'ourProcess' ? 'border-b-[3px] border-slate-700' : 'border-none'}`} onClick={() => setActiveTab('ourProcess')} data-state-active="border-b-3 border-slate-700">
                <p className={` tracking-wider border-transparent`}>
                  OUR PROCESS
                </p>
              </TabsTrigger>

              <TabsTrigger value="casting" className={` border-b-[3px] border-slate-700 rounded-none outline-none p-0 ${activeTab === 'casting' ? 'border-b-[3px] border-slate-700' : 'border-none'}`} onClick={() => setActiveTab('casting')} data-state-active="border-b-3 border-slate-700">
                <p className={` tracking-wider border-transparent`}>
                  CASTING
                </p>
              </TabsTrigger>

              <TabsTrigger value="sanding" className={` border-b-[3px] border-slate-700 rounded-none outline-none p-0 ${activeTab === 'sanding' ? 'border-b-[3px] border-slate-700' : 'border-none'}`} onClick={() => setActiveTab('sanding')} data-state-active="border-b-3 border-slate-700">
                <p className={` tracking-wider border-transparent`}>
                  SANDING
                </p>
              </TabsTrigger>

              <TabsTrigger value="sealing" className={` border-b-[3px] border-slate-700 rounded-none outline-none p-0 ${activeTab === 'sealing' ? 'border-b-[3px] border-slate-700' : 'border-none'}`} onClick={() => setActiveTab('sealing')} data-state-active="border-b-3 border-slate-700">
                <p className={` tracking-wider border-transparent`}>
                  SEALING
                </p>
              </TabsTrigger>

              <TabsTrigger value="packaging" className={` border-b-[3px] border-slate-700 rounded-none outline-none p-0 ${activeTab === 'packaging' ? 'border-b-[3px] border-slate-700' : 'border-none'}`} onClick={() => setActiveTab('packaging')} data-state-active="border-b-3 border-slate-700">
                <p className={` tracking-wider border-transparent`}>
                  PACKAGING
                </p>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>
    </ScrollAnimation>
  )
}

export default Process


