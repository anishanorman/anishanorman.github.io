interface SVGButtonProps {
    href: string,
    src: string,
    alt: string
}

export function SVGButton({href, src, alt}:SVGButtonProps) {
  return (
    <a
      target="blank"
      href={href}
      className="rounded-full transition-colors-transform duration-200 hover:scale-110"
    >
      <img
        src={src}
        alt={alt}
        className="rounded-full shadow-xl"
      />
    </a>
  )
}
