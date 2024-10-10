const Bubbles = () => {
  return (
    <div>
      {bubbles.map((bubble, index) => (
        <div
          key={`bubble-${index}`}
          className="absolute rounded-full bg-accent animate-float"
          style={{
            height: `${bubble.size}%`,
            aspectRatio: 1,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            opacity: `${Math.random() * 0.6 + 0.1}`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Bubbles

const bubbles = [
  {
    size: 30,
    top: -9,
    left: 94,
  },
  {
    size: 25,
    top: 25,
    left: 84,
  },
  {
    size: 25,
    top: 67,
    left: 98,
  },
  {
    size: 25,
    top: -14,
    left: 24,
  },
  {
    size: 25,
    top: -3,
    left: 67,
  },
  {
    size: 25,
    top: 24,
    left: -3,
  },
  {
    size: 25,
    top: -7,
    left: 49,
  },
  {
    size: 20,
    top: -7,
    left: 6,
  },
  {
    size: 20,
    top: 29,
    left: 93,
  },
  {
    size: 20,
    top: -11,
    left: 86,
  },
  {
    size: 20,
    top: 2,
    left: 35,
  },
  {
    size: 20,
    top: 5,
    left: 77,
  },
  {
    size: 17,
    top: 3,
    left: 1,
  },
  {
    size: 17,
    top: -9,
    left: 61,
  },
  {
    size: 17,
    top: -5,
    left: 41,
  },
  {
    size: 17,
    top: 10,
    left: 90,
  },
  {
    size: 17,
    top: 60,
    left: 94,
  },
  {
    size: 17,
    top: -9,
    left: 14,
  },
  {
    size: 17,
    top: 62,
    left: -3,
  },
  {
    size: 13,
    top: 49,
    left: 99,
  },
  {
    size: 13,
    top: -4,
    left: 82,
  },
  {
    size: 13,
    top: 10,
    left: 85,
  },
  {
    size: 13,
    top: -6,
    left: -1,
  },
  {
    size: 13,
    top: 5,
    left: 56,
  },
  {
    size: 13,
    top: 43,
    left: 90.5,
  },
  {
    size: 13,
    top: -7,
    left: 21,
  },
  {
    size: 13,
    top: 1,
    left: 46,
  },
  {
    size: 13,
    top: 28,
    left: 98,
  },
  {
    size: 13,
    top: -8,
    left: 75,
  },
  {
    size: 13,
    top: -5,
    left: 33,
  },
  {
    size: 10,
    top: 83,
    left: -0.5,
  },
  {
    size: 10,
    top: 54,
    left: 0.5,
  },
  {
    size: 10,
    top: 1,
    left: 18,
  },
  {
    size: 10,
    top: 51,
    left: 96.5,
  },
  {
    size: 10,
    top: -2,
    left: 58,
  },
  {
    size: 10,
    top: -2,
    left: 92,
  },
  {
    size: 10,
    top: 21,
    left: 96,
  },
  {
    size: 10,
    top: 14,
    left: -1,
  },
  {
    size: 10,
    top: -4,
    left: 11.5,
  },
  {
    size: 10,
    top: 29,
    left: 91,
  },
  {
    size: 10,
    top: 19,
    left: 82,
  },
  {
    size: 10,
    top: 4,
    left: 74,
  },
  {
    size: 10,
    top: 8,
    left: 30,
  },
  {
    size: 10,
    top: -6,
    left: 65,
  },
  {
    size: 6,
    top: -2,
    left: 4,
  },
  {
    size: 6,
    top: 76,
    left: 1,
  },
  {
    size: 6,
    top: 22,
    left: 2,
  },
  {
    size: 6,
    top: 7,
    left: 60,
  },
  {
    size: 6,
    top: 0,
    left: 30,
  },
  {
    size: 6,
    top: -2,
    left: 55,
  },
  {
    size: 6,
    top: -3,
    left: 80,
  },
  {
    size: 6,
    top: -2,
    left: 39,
  },
  {
    size: 6,
    top: 51,
    left: 94,
  },
  {
    size: 6,
    top: 20,
    left: 88,
  },
  {
    size: 6,
    top: 36,
    left: 80,
  },
  {
    size: 6,
    top: 64,
    left: 91,
  },
  {
    size: 6,
    top: 81,
    left: 96,
  },
  {
    size: 6,
    top: 13,
    left: 23,
  },
  {
    size: 6,
    top: 14,
    left: 73,
  },
  {
    size: 6,
    top: 11,
    left: 83,
  },
  {
    size: 6,
    top: 21,
    left: 94,
  },
  {
    size: 6,
    top: -2,
    left: 73,
  },
  {
    size: 6,
    top: 45,
    left: 4,
  },
  {
    size: 6,
    top: 13,
    left: 44,
  },
  {
    size: 6,
    top: 18,
    left: 7,
  },
  {
    size: 6,
    top: 11,
    left: 64,
  },
  {
    size: 10,
    top: 5,
    left: 89,
  },
  {
    size: 13,
    top: 43,
    left: -2,
  },
]
