'use client'

import { useTheme } from 'next-themes'
import { FaMoon as Moon } from 'react-icons/fa'
import { FiSun as Sun } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { THEMES } from './constants'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const isDark = (theme ?? resolvedTheme) === THEMES.DARK

  const toggleTheme = () => setTheme(isDark ? THEMES.LIGHT : THEMES.DARK)

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {isDark ? (
        <Sun size={30} color="#ffe102" />
      ) : (
        <Moon size={30} color="#2b7fff" />
      )}
    </button>
  )
}
