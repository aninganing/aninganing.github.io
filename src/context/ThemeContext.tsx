import React, { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { getTheme, ThemeMode } from "@/layout/theme"

interface ThemeContextValue {
  mode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "light",
  toggleTheme: () => {},
})

const STORAGE_KEY = "theme-mode"

interface Props {
  children: React.ReactNode
}

export function ThemeContextProvider({ children }: Props) {
  const [mode, setMode] = useState<ThemeMode>("light")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "light" || stored === "dark") {
      setMode(stored)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark")
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode)
  }, [mode])

  const toggleTheme = () => {
    setMode(prev => {
      const next = prev === "light" ? "dark" : "light"
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <StyledThemeProvider theme={getTheme(mode)}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useThemeMode() {
  return useContext(ThemeContext)
}
