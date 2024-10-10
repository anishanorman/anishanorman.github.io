"use client"

import Link from "next/link"
import Bubbles from "../Bubbles/Bubbles"

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden text-white/80 grow">
      <Bubbles />
      <div className="animate-float transition-1000 text-white/80 flex flex-row justify-center items-center gap-16 h-full max-w-3/4 mx-40 mt-12">
        <div className="flex flex-col">
          <p className="font-bold text-7xl">Hi!</p>
          <p className="text-2xl mt-2">
            I&rsquo;m <span className="text-accent">Anisha</span>.
          </p>
          <p className="text-white/70 italic">
            Ex-medical student turned software developer.
          </p>
          <p className="text-white/70">Curious to know more?</p>
          <div className="flex flex-wrap gap-5 mt-6">
            <a
              href={"/assets/ANISHA NORMAN CV SEP 2024.pdf"}
              target="_blank"
              className="grow bg-accent text-black rounded-full text-lg text-center shadow-lg p-2 transition-colors-transform duration-200 hover:scale-105"
            >
              View CV
            </a>
            <Link
              href=""
              className="grow flex align-center justify-center bg-container-secondary text-white/60 rounded-full text-lg text-center shadow-lg p-2 transition-colors-transform duration-200 hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </div>
        <img
          src="assets/fullProfile.png"
          alt="Picture of Anisha with a black and white dress on, holding a cocktail and golf club"
          className="h-72 rounded shadow-lg"
        />
      </div>
    </div>
  )
}
