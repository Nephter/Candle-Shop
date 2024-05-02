import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="">
      <div className="relative h-[1100px] brightness-110">
        <Image src='/heroCandle.png' alt='hero' fill objectFit="cover" quality={100} />
        <div className="absolute  top-[85px] left-[200px]" style={{ fontFamily: "Kausan" }}>

          {/* <div className="flex-col text-center">
            <p className="text-9xl font-extrabold ">WABI</p>
            <p className="text-9xl font-extrabold">SABI</p>
            <p className="text-xl font-extrabold opacity-80 ">Beauty in imperfection</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
