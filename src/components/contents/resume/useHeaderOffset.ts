import { useEffect, useState } from "react"

const FALLBACK_OFFSET = 96

export default function useHeaderOffset(): number {
  const [offset, setOffset] = useState(FALLBACK_OFFSET)

  useEffect(() => {
    const headerEl = document.querySelector("header")
    if (!headerEl) return

    const update = () => setOffset(headerEl.getBoundingClientRect().height + 16)
    update()

    if (typeof ResizeObserver === "undefined") return

    const observer = new ResizeObserver(update)
    observer.observe(headerEl)
    return () => observer.disconnect()
  }, [])

  return offset
}
