import { useEffect } from 'react'

import { clearCanvas } from './Canvas.helpers'

export function useClearCanvas(canvasRef: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    clearCanvas(context, {
      width: canvas.width,
      height: canvas.height,
    })
  }, [canvasRef])
}

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
