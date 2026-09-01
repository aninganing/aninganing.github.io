import { useEffect, useRef, useState } from "react"

export default function useCountUp(
  target: number,
  active: boolean,
  durationMs = 900,
  skipAnimation = false
): number {
  const [value, setValue] = useState(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return

    if (skipAnimation) {
      setValue(target)
      return
    }

    let frameId: number
    startRef.current = null

    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [active, target, durationMs, skipAnimation])

  return value
}
