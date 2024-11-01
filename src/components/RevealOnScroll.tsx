"use client"

import { useEffect, useRef, useState } from "react"

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        scrollObserver.unobserve(entry.target)
      }
    })

    if (ref.current) {
      scrollObserver.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
        {children}
    </div>
  )
}
