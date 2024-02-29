import { Profile } from "./Profile"
import { NavButton } from "./NavButton"
import { HR } from "./HR"
import { Footer } from "./Footer/Footer"

export function Navbar() {
  return (
    <nav className="w-96">
      <div className="bg-container-primary size-full p-3 space-y-2" >
        <Profile />
        <ul className="flex flex-col overflow-hidden content-center justify-between p-3 space-y-3">
          <NavButton href="/" label="Home" />
          <NavButton href="/about" label="About" />
          <NavButton href="/projects" label="Projects" />
        </ul>
        <HR />
        <Footer />
      </div>
    </nav>
  )
}
