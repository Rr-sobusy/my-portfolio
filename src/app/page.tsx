import Image from "next/image";
import { Header, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[80px] mx-[4rem]">
        <Hero />
      </main>
    </>
  );
}
