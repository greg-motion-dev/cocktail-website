"use client";

import { navLinks } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-5 lg:px-0 py-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-8 h-8 object-contain"
          />
          <p className="font-modern-negra text-3xl -mb-2 text-white">Cosmo</p>
        </a>

        <ul className="flex items-center gap-7 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="cursor-pointer whitespace-nowrap text-sm md:text-base hover:text-yellow transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
