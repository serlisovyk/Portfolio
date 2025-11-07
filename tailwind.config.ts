const tailwindConfig = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-contrast': 'var(--primary-contrast)',
        secondary: 'oklch(62.3% 0.214 259.815)',
      },
    },
  },
}

export default tailwindConfig
