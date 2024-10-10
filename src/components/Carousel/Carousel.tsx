"use client"

import { useEffect, useRef, useState } from "react"

interface CarouselProps {
  children: React.ReactNode[]
}

export const Carousel = ({ children }: CarouselProps) => {
  const [isPaused, setIsPaused] = useState(false)
  const marqueeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)

    marquee.addEventListener("mouseenter", handleMouseEnter)
    marquee.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter)
      marquee.removeEventListener("mouseleave", handleMouseLeave)
    }
  })

  return (
    <div
      ref={marqueeRef}
      className={`flex flex-row h-full gap-20 animate-carousel ${
        isPaused ? "paused" : ""
      }`}
    >
      {children.map((item, index) => {
        return (
          <div
            key={index}
            className="transition-transform transform hover:scale-110 p-4"
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}
