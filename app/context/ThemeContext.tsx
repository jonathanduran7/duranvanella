import { createContext } from 'react'

interface Prop {
  theme: string
  handleThemeChange: () => void
}

export const ThemeContext = createContext<Prop>({} as Prop)
