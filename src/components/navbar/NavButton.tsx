"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface LinkProps {
    href: string,
    label: string
}

export function NavButton({href, label}: LinkProps) {
    const pathname = usePathname()
    return(
            <Link className={`${pathname === href ? 'bg-accent text-black' : 'bg-container-secondary text-white/60'} active:bg-container-tertiary rounded-full text-lg text-center shadow-lg p-2 transition-colors-transform duration-200 hover:scale-105`} href={href}>{label}</Link>
    )
}