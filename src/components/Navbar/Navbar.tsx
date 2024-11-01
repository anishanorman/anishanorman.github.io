"use client"

import { NavButton } from "./NavButton"
import { useState } from "react"
import Link from "next/link"
import { SVGButton } from "./SVGButton"
import { RoundDivider } from "./RoundDivider"

export function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const handleBurgerClick = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  const handleLinkClick = () => {
    setMobileNavOpen(false)
  }

  return (
    <nav>
      {/* Mobile Navbar */}
      <div className="flex sm:hidden bg-container/95 p-3 text-white/80 overflow-hidden">
        <button
          onClick={handleBurgerClick}
          className="flex flex-col gap-1 justify-center p-3"
        >
          <div className="h-1 w-6 bg-white/90 rounded"></div>
          <div className="h-1 w-6 bg-white/90 rounded"></div>
          <div className="h-1 w-6 bg-white/90 rounded"></div>
        </button>
        <div className="flex items-center gap-3 grow justify-center">
          <img
            src="assets/Profile.jpg"
            alt="profile image"
            className="h-10 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-xl font-medium">Anisha Norman</p>
            <p className="text-sm text-white/60">Associate Software Engineer</p>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden flex flex-col bg-container/95 p-3 ${
          mobileNavOpen ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col overflow-hidden items-center py-3 gap-4">
          <NavButton onClick={handleLinkClick} href="/" label="Home" />
          <NavButton onClick={handleLinkClick} href="/about" label="About" />
          <NavButton
            onClick={handleLinkClick}
            href="/projects"
            label="Projects"
          />
        </ul>
        <div className="flex items-center justify-center gap-4 m-4">
          <SVGButton
            href="https://github.com/anishanorman"
            src="../assets/github.svg"
            alt="Github logo"
            className="h-10"
          />
          <RoundDivider />
          <SVGButton
            href="https://www.linkedin.com/in/anisha-norman"
            src="../assets/linkedIn.svg"
            alt="LinkedIn logo"
            className="h-10"
          />
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-between bg-container/90 p-3 text-white/80 px-[3vw]">
        <div className="flex items-center gap-3 grow justify-start">
          <img
            src="assets/Profile.jpg"
            alt="profile image"
            className="h-10 rounded-full"
          />
          <div className="xl:flex xl:flex-row xl:items-center xl:gap-3">
            <p className="text-xl font-medium">Anisha Norman</p>
            <RoundDivider className="hidden xl:block" />
            <p className="text-sm text-white/60">Associate Software Engineer</p>
          </div>
        </div>
        <div className="flex justify-around items-center w-1/3 grow px-[2vw] lg:px=[4vw] xl:px-[8vw]">
          <Link
            href="/"
            className="hover:scale-110 duration-300"
          >
            Home
          </Link>
          <RoundDivider />
          <Link
            href="/about"
            className="hover:scale-110 duration-300"
          >
            About
          </Link>
          <RoundDivider />
          <Link
            href="/projects"
            className="hover:scale-110 duration-300"
          >
            Projects
          </Link>
        </div>
        <div className="flex w-1/6 justify-end">
          <div className="flex items-center justify-center gap-3 xl:gap-5">
            <SVGButton
              href="https://github.com/anishanorman"
              src="../assets/github.svg"
              alt="Github logo"
              className="h-8"
            />
            <RoundDivider />
            <SVGButton
              href="https://www.linkedin.com/in/anisha-norman"
              src="../assets/linkedIn.svg"
              alt="LinkedIn logo"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
