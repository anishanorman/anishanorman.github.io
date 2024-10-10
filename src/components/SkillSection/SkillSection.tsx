"use client"

import { useEffect, useState } from "react"
import { InfiniteCarousel } from "../InfiniteCarousel/InfiniteCarousel"

export const SkillSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<null | number>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredSkill(index)
  }

  const handleMouseLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <div
      className="flex justify-center overflow-hidden h-32"
    >
      <InfiniteCarousel>
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="relative overflow-none transition duration-300 transform hover:scale-110 flex items-center justify-center h-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={skill.logo.src}
                alt={skill.logo.alt}
                className="w-fit h-fit white"
              />
            </div>
          )
        })}
      </InfiniteCarousel>
    </div>
  )
}

const skills = [
  {
    name: "React",
    logo: {
      src: "../../../assets/react.svg",
      alt: "React logo",
    },
  },
  {
    name: "TypeScript",
    logo: {
      src: "../../../assets/typescript.svg",
      alt: "TypeScript logo",
    },
  },
  {
    name: "Jest",
    logo: {
      src: "../../../assets/jest.svg",
      alt: "Jest logo",
    },
  },
  {
    name: "Vite",
    logo: {
      src: "../../../assets/vite.svg",
      alt: "Vite logo",
    },
  },
  {
    name: "Vitest",
    logo: {
      src: "../../../assets/vitest.svg",
      alt: "Vitest logo",
    },
  },
  {
    name: "Tailwind",
    logo: {
      src: "../../../assets/tailwind-css.svg",
      alt: "Tailwind logo",
    },
  },
  {
    name: "Node",
    logo: {
      src: "../../../assets/node.svg",
      alt: "Node logo",
    },
  },
  {
    name: "Next",
    logo: {
      src: "../../../assets/next.svg",
      alt: "Next.js logo",
    },
  },
  {
    name: "Docker",
    logo: {
      src: "../../../assets/docker.svg",
      alt: "Docker logo",
    },
  },
  {
    name: "Git",
    logo: {
      src: "../../../assets/git.svg",
      alt: "Git logo",
    },
  },
  {
    name: "Gitlab",
    logo: {
      src: "../../../assets/gitlab.svg",
      alt: "Gitlab logo",
    },
  },
  {
    name: "Figma",
    logo: {
      src: "../../../assets/figma.svg",
      alt: "Figma logo",
    },
  },
]
