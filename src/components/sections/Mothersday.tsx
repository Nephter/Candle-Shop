'use client'
import Image from 'next/image';
import { Button } from '../ui/button';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export const Mothersday = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={2} animatePreScroll={false} >
      <section
        id="howItWorks"
        className="px-10 text-center w-full flex flex-col space-y-4"
        style={{ fontFamily: "Kaushan" }}
      >
        <p className="text-2xl opacity-80 tracking-wider">
          MOTHER'S DAY GIFTS
        </p>
        <p className="text-sm opacity-80 tracking-wider">
          TOP PICKS
        </p>
        <div className="flex space-x-4 relative mx-auto">

          <div className="flex-col text-start">
            <div className="relative cursor-pointer overflow-hidden">
              <div className="transition duration-500 ease-in-out transform">
                <Image src="/mothers1.png" alt="Lavender Candle" width={600} height={600} className="brightness-110 opacity-90 " />
                <div className="absolute inset-0 flex items-center  transition-all duration-500 ease-in-out">
                  <div className="w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out">
                    <div className="absolute w-full h-full font-bold p-6 text-lg opacity-90 flex-col flex justify-end mx-auto" >
                      <div className="flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                          <p className="text-xl opacity-80 tracking-wider">
                            GIFT SET
                          </p>
                          <p className="text-sm opacity-80 tracking-wider w-1/2">
                            $94.99
                          </p>
                        </div>
                        <p className="text-sm opacity-80 tracking-wider w-1/2">
                          Our Mother's Day gift set includes our Birch, Cardamum, and Lavender candles. It's the perfect gift for the mom who loves to relax and unwind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm opacity-80 pt-2 tracking-wider">
                GIFT SET
              </p>
            </div>
          </div>

          <div className="flex-col text-start">
            <div className="relative cursor-pointer overflow-hidden">
              <div className="transition duration-500 ease-in-out transform">
                <Image src="/mothers.png" alt="Lavender Candle" width={1070} height={600} />
                <div className="absolute inset-0 flex items-center  transition-all duration-500 ease-in-out">
                  <div className="w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out">
                    <div className="absolute w-full h-full font-bold p-6 text-lg opacity-90 flex-col flex justify-end mx-auto" >
                      <div className="flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                          <p className="text-xl opacity-80 tracking-wider">
                            ROSE + LAVENDER + XANAX
                          </p>
                          <p className="text-sm opacity-80 tracking-wider w-1/2">
                            $24.99
                          </p>
                        </div>
                        <p className="text-sm opacity-80 tracking-wider w-1/2">
                          Infused with xanax for the mom who needs to relax. Do not burn this candle in your car while operating heavy machinery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm opacity-80 pt-2 tracking-wider">
                ROSE + LAVENDER + XANAX
              </p>
            </div>
          </div>

          <div className="flex-col text-start">
            <div className="relative cursor-pointer overflow-hidden">
              <div className="transition duration-500 ease-in-out transform">
                <Image src="/mothers2.png" alt="Lavender Candle" width={600} height={600} className="brightness-110 opacity-90 " />
                <div className="absolute inset-0 flex items-center  transition-all duration-500 ease-in-out">
                  <div className="w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out">
                    <div className="absolute w-full h-full font-bold p-6 text-lg opacity-90 flex-col flex justify-end mx-auto" >
                      <div className="flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                          <p className="text-xl opacity-80 tracking-wider">
                            CHERRY BLOSSOM + PEONY
                          </p>
                          <p className="text-sm opacity-80 tracking-wider w-1/2">
                            $24.99
                          </p>
                        </div>
                        <p className="text-sm opacity-80 tracking-wider w-1/2">
                          A delicious candle. I often have to remind myself not to eat it. It smells like a cherry blossom and a peony had a baby and threw it in a fryer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm opacity-80 pt-2 tracking-wider">
                CHERRY BLOSSOM + PEONY
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Button variant="outline" className="mt-10 justify-center flex bg-sky-700 bg-opacity-20 border-none rounded-sm"><p className="opacity-70">VIEW MOTHER'S DAY COLLECTION</p></Button>
        </div>

      </section>
    </ScrollAnimation>
  );
};
