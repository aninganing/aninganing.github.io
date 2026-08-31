import Colors from "./color"

export type ThemeMode = "light" | "dark"

export interface ThemeColors {
  bg: string
  surface: string
  surfaceAlt: string
  text: string
  textSecondary: string
  textTertiary: string
  accent: string
  accentTintBg: string
  accentTintText: string
  border: string
  shadow: string
  shadowHover: string
}

export const lightTheme: ThemeColors = {
  bg: "#FAFAF3",
  surface: "#FFFFFF",
  surfaceAlt: "#F1F2E8",
  text: Colors.pointPrimary,
  textSecondary: "#6B6F62",
  textTertiary: "#9A9D8E",
  accent: Colors.pointSecondary,
  accentTintBg: "#E3EAD2",
  accentTintText: "#4E5B22",
  border: "#E7E7DA",
  shadow: "0 1px 2px rgba(38,41,34,.05), 0 8px 20px -12px rgba(38,41,34,.14)",
  shadowHover:
    "0 4px 10px rgba(38,41,34,.08), 0 20px 32px -14px rgba(38,41,34,.2)",
}

export const darkTheme: ThemeColors = {
  bg: "#1B1D17",
  surface: "#22251D",
  surfaceAlt: "#2A2E22",
  text: "#EDEEE4",
  textSecondary: "#A9AD9A",
  textTertiary: "#767A69",
  accent: "#A6C158",
  accentTintBg: "#333B22",
  accentTintText: "#C3DA8C",
  border: "#343729",
  shadow: "0 1px 2px rgba(0,0,0,.35), 0 8px 20px -12px rgba(0,0,0,.5)",
  shadowHover:
    "0 4px 12px rgba(0,0,0,.4), 0 24px 40px -14px rgba(0,0,0,.6)",
}

export function getTheme(mode: ThemeMode): ThemeColors {
  return mode === "dark" ? darkTheme : lightTheme
}
