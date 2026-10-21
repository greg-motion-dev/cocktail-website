"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  useGSAP(() => {
    const split = new SplitText(".animated-heading", { type: "chars,words" });

    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="animated-heading text-5xl text-indigo-300 font-bold text-center">
        Cocktail Bar
      </h1>
    </main>
  );
}
