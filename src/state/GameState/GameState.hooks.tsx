import { useEffect, useState } from 'react'

/**
 * Hook that returns the current frame time
 *
 * @source: https://medium.com/projector-hq/writing-a-run-loop-in-javascript-react-9605f74174b
 */
export function useFrameTime() {
  const [frameTime, setFrameTime] = useState(0)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setFrameTime(performance.now())
    })

    return () => cancelAnimationFrame(frameId)
  }, [])

  return frameTime
}
