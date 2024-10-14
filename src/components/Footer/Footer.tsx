"use client"

export const Footer = () => {
  return (
    <div className="flex p-4 gap-8 justify-center items-center bg-container/90 overflow-x-auto w-full">
      {skills.map((skill, index) => {
        return (
          <img
            key={index}
            src={skill.logo.src}
            alt={skill.logo.alt}
            className="w-10 duration-300 transform hover:scale-110"
          />
        )
      })}
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
    name: "Next",
    logo: {
      src: "../../../assets/next.svg",
      alt: "Next.js logo",
    },
  },
  {
    name: "Tailwind",
    logo: {
      src: "../../../assets/tailwind-css.svg",
      alt: "Tailwind logo",
    },
  },
]
