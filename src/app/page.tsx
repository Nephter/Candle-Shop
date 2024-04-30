import { About } from "@/src/components/About";
import { Cta } from "@/src/components/Cta";
import { FAQ } from "@/src/components/FAQ";

import { Hero } from "@/src/components/Hero";
import { Newsletter } from "@/src/components/Newsletter";
import { Pricing } from "@/src/components/Pricing";

import { Services } from "@/src/components/Services";
import { Seasonal } from "../components/Seasonal";
import Summer from "../components/Summer";
import Citrus from "../components/Citrus";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Seasonal />
      <Summer />
      <Citrus />
      <Services />
      <Cta />
      <Pricing />
      <Newsletter />
      <FAQ />
    </>
  );
}
