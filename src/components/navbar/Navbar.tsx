import { Profile } from "./Profile"
import { NavButton } from "./NavButton"
import { HR } from "./HR"
import { Footer } from "./Footer/Footer"

export function Navbar() {
  return (
    <nav className="w-96">
      <div className="flex flex-col bg-container-primary size-full p-3 justify-between" >
        <Profile />
        <ul className="flex flex-col overflow-hidden content-center justify-between p-3 space-y-3 py-10">
          <NavButton href="/" label="Home" />
          <NavButton href="/about" label="About" />
          <NavButton href="/projects" label="Projects" />
        </ul>
        <Footer />
      </div>
    </nav>
  )
}
