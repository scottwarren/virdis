import { useRef } from 'react'
import { useGameLoop, useWorldRenderer } from './World.hooks'

export function World() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useGameLoop()
  useWorldRenderer(canvasRef)

  return (
    <canvas
      className='outline-dashed outline-1 outline-red-700'
      ref={canvasRef}
    />
  )
}
