import Image from 'next/image';
import { Button } from './ui/button';

export const Seasonal = () => {
  return (
    <section id="howItWorks" className="container text-center flex flex-col space-y-4" style={{ fontFamily: "Kaushan" }}>
      <p className="text-2xl opacity-80">
        MOTHER'S DAY GIFTS
      </p>
      <p className="text-sm opacity-80">
        TOP PICKS
      </p>
      <div className="flex space-x-4">
        <div className="flex-col text-start">
          <div>
            <Image src="/mothers1.png" alt="hero" width={400} height={400} />
          </div>
          <p className="text-sm opacity-80">
            GIFT SET
          </p>
        </div>

        <div className="flex-col text-start">
          <div>
            <Image src="/mothers.png" alt="hero" width={712} height={400} />
          </div>
          <p className="text-sm opacity-80">
            BIRCH + CARDAMUM + LAVENDER
          </p>
        </div>

        <div className="flex-col text-start">
          <div>
            <Image src="/mothers2.png" alt="hero" width={400} height={400} />
          </div>
          <p className="text-sm opacity-80">
            CHERRY BLOSSOM + PEONY
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Button variant="outline" className="mt-10 justify-center flex bg-sky-700 bg-opacity-20 border-none rounded-sm"><p className="opacity-70">VIEW MOTHER'S DAY COLLECTION</p></Button>
      </div>

    </section>
  );
};
