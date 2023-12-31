import { useEffect } from "react";
import Image from "next/image";
import { Header, About, Projects } from "@/components";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("../components/hero/Hero"));

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[80px] mx-0 lg:mx-[4rem]">
        <DynamicHero />
        <About />
        <Projects />
      </main>
    </>
  );
}
