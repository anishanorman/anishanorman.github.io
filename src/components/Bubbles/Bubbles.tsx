function getRandomNumber(min: number, max: number) {
  return (Math.random() * (max - min + min)).toFixed(2)
}

const Bubbles = () => {
  const numBubbles = 50

  return (
    <div className="fixed inset-0 z-[-999] overflow-hidden">
      {Array.from({ length: numBubbles }, (_, index) => (
        <div
          key={`bubble-${index}`}
          className={`absolute rounded-full bg-accent animate-float`}
          style={{
            height: `${getRandomNumber(4, 6)}rem`,
            aspectRatio: 1,
            top: `${getRandomNumber(0, 100)}%`,
            left: `${getRandomNumber(0, 100)}%`,
            opacity: `${getRandomNumber(0.2, 0.5)}`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          }}
        />
      ))}
    </div>
  )
}


export default Bubbles
