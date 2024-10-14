"use client"

import Link from "next/link"

export const HeroSection = () => {
  return (
    <div className="w-fit text-white/80 flex flex-col sm:flex-row bg-container/95 p-3 md:p-6 rounded-lg shadow-2xl m-5 my-auto">
      <div className="flex flex-col p-6">
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
        className="m-auto hidden sm:block rounded shadow-xl sm:w-3/4 w-1/2 object-top object-cover h-32 sm:h-72 aspect-auto"
      />
    </div>
  )
}
