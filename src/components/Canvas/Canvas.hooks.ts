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
  }, [])
}
