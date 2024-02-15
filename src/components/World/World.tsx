import { useRef } from 'react'
import { useGameLoop, useWorldRenderer } from './World.hooks'

export function World() {
  useGameLoop()

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useWorldRenderer(canvasRef)

  return (
    <canvas
      className='outline-dashed outline-1 outline-red-700'
      ref={canvasRef}
    />
  )
}
