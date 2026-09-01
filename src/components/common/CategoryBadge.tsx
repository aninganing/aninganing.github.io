import styled from "styled-components"
import Typography from "@/layout/typography"

const CategoryBadge = styled.mark`
  align-self: flex-start;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentTintBg};
  color: ${({ theme }) => theme.accentTintText};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  ${Typography.caption1};
`

export default CategoryBadge
