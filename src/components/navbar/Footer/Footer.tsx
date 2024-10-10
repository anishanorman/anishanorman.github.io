import { RoundDivider } from "./RoundDivider"
import { SVGButton } from "./SVGButton"
import { ThemeToggle } from "./ThemeToggle"

export function Footer() {
  return (
    <div className="flex grow flex-col justify-end">
      <div className="flex p-3 items-center justify-center space-x-4">
        <SVGButton
          href="https://github.com/anishanorman"
          src="../assets/github.svg"
          alt="Github logo"
        />
        <RoundDivider />
        <SVGButton
          href="https://www.linkedin.com/in/anisha-norman"
          src="../assets/linkedIn.svg"
          alt="LinkedIn logo"
        />
        {/* <div className="size-2 bg-white/40 rounded-full"/> */}
        {/* <ThemeToggle /> */}
      </div>
    </div>
  )
}
