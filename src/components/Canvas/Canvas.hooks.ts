import { useEffect } from 'react'

/**
 * Hook used to fit the canvas to the screen.
 */
export function useFitCanvasToScreen(
  canvasRef: React.RefObject<HTMLCanvasElement>,
) {
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    // Ensure the canvas is the same size as the window
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }, [canvasRef])
}
