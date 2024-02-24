"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export function Links() {
  const pathname = usePathname()

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
