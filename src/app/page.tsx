import { Quote } from "@/src/components/Quote";
import { Cta } from "@/src/components/Cta";
import { FAQ } from "@/src/components/FAQ";

import { Hero } from "@/src/components/Hero";
import { Newsletter } from "@/src/components/Newsletter";
import { Pricing } from "@/src/components/Pricing";

import { Services } from "@/src/components/Services";
import { Seasonal } from "../components/Seasonal";
import Summer from "../components/Summer";
import Shop from "../components/Shop";
import GiftBox from "../components/GiftBox";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <Seasonal />
      <Summer />
      <Shop />
      <GiftBox />
      <Services />
      <Cta />
      <Pricing />
      <Newsletter />
      <FAQ />

    </>
  );
}
