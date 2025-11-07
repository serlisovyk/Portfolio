'use client'

import { useTheme } from 'next-themes'
import { THEMES } from '@/constants'
import { FaMoon as Moon } from 'react-icons/fa'
import { FiSun as Sun } from 'react-icons/fi'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDark = (theme ?? resolvedTheme) === THEMES.DARK

  const toggleTheme = () => setTheme(isDark ? THEMES.LIGHT : THEMES.DARK)

  return (
    <button onClick={toggleTheme}>
      {isDark ? (
        <Sun size={30} color="#ffe102" />
      ) : (
        <Moon size={30} color="oklch(62.3% 0.214 259.815)" />
      )}
    </button>
  )
}
