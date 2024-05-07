import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="">
      <div className="relative h-[1100px] brightness-110">
        <Image src='/heroCandle.png' alt='hero' fill objectFit="cover" quality={100} />
        <div className="absolute  top-[85px] left-[200px]" style={{ fontFamily: "Kausan" }}>

          <div className="flex-col text-center tracking-widest">
            <p className="text-9xl font-extrabold opacity-90">WABI</p>
            <p className="text-9xl font-extrabold opacity-90">SABI</p>
            <p className="text-xl font-extrabold opacity-90">Beauty in imprfection</p>
          </div>
        </div>
      </div>
    </div>
  );
};
