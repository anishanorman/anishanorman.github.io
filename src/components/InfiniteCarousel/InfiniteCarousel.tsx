"use client"

import { useEffect, useState, useMemo, useRef } from "react"

interface CarouselProps {
  children: React.ReactNode[]
}

const INTERVAL_DELAY = 3000

const moveItems = (
  setCarouselItems: React.Dispatch<React.SetStateAction<React.ReactNode[]>>
) => {
  setCarouselItems((prevItems) => {
    const [first, ...rest] = prevItems
    return [...rest, first]
  })
}

export const InfiniteCarousel = ({ children }: CarouselProps) => {
  const initialCarouselItems = useMemo(
    () => [...children, ...children],
    [children]
  )
  const [carouselItems, setCarouselItems] = useState(initialCarouselItems)
  const [isPaused, setIsPaused] = useState(false)
  const [isMoving, setIsMoving] = useState(false)

  const handleMoveCarouselItems = () => {
    if (isMoving) return
    moveItems(setCarouselItems)
    setIsMoving(true)
    requestAnimationFrame(() => {
      setIsMoving(false)
    })
  }

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(handleMoveCarouselItems, INTERVAL_DELAY)
      return () => clearInterval(intervalId)
    }
  }, [isPaused, handleMoveCarouselItems])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const movingClass = isMoving
    ? `translate-x-0`
    : `-translate-x-full transition-transform duration-1000`

  const minItemWidth = Math.floor((1 / (carouselItems.length - 2)) * 100)

  return (
    <div
      className={`flex justify-center grow`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`p-8 basis-full ${movingClass} w-32 h-32`}
          style={{ minWidth: `${minItemWidth}%` }}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
