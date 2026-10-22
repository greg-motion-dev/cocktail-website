"use client";

import { navLinks } from "@/constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-5 lg:px-0 py-5 bg-black/40 backdrop-blur-md  transition-all duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <a href="#hero" className="flex items-center gap-3">
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
                className="cursor-pointer whitespace-nowrap text-sm md:text-base text-white hover:text-yellow transition-colors"
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
