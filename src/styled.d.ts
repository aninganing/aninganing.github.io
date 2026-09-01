import "styled-components"
import { ThemeColors } from "@/layout/theme"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColors {}
}
