"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {

    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('light')
            console.log("set to light")
        } else {
            document.documentElement.classList.remove('light')
            console.log("set to dark")
        }
    }, [theme])

    function handleClick() {
        if (window.localStorage.theme !== 'light') {
            window.localStorage.theme = 'light'
            setTheme('light')
        } else {
            window.localStorage.theme = 'dark'
            setTheme('dark')
        } 
    }

    return(
        <div className={`flex items-center w-20 h-10 bg-container-secondary rounded-full p-1`}>
            <button onClick={handleClick} className={`${theme === 'dark' ? "translate-x-0" : "translate-x-7"} size-8 bg-accent rounded-full transition-translate duration-300`}></button>
        </div>
    )
}