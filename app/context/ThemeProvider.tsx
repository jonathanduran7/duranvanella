import { ReactNode, useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext"

type Theme = 'light' | 'dark'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  )
}
