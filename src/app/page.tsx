import { Quote } from "@/src/components/sections/Quote";
import { Hero } from "@/src/components/sections/Hero";
import { Mothersday } from "../components/sections/Mothersday";
import Summer from "../components/sections/Summer";
import Shop from "../components/sections/Shop";
import GiftBox from "../components/sections/GiftBox";
import Process from "../components/sections/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <Mothersday />
      <Summer />
      <Shop />
      <GiftBox />
      <Process />
    </>
  );
}
