import { DEFAULT_PLAYER_SIZE_PX, PlayerI } from '@/models/Player/Player'
import { useEffect } from 'react'

/**
 * Function used to draw a player on the canvas.
 */
export function drawPlayer(context: CanvasRenderingContext2D, player: PlayerI) {
  const [x, y] = player.position

  context.fillStyle = 'green'

  context.beginPath()

  context.arc(
    x,
    y,
    DEFAULT_PLAYER_SIZE_PX,
    CIRCLE_START_ANGLE,
    CIRCILE_END_ANGLE,
  )

  context.fill()
}

// Start/end angle for a circle, used to draw the player.
const CIRCLE_START_ANGLE = 0
const CIRCILE_END_ANGLE = Math.PI * 2

/**
 * Uses the canvasRef to render the players on the canvas.
 */
export function usePlayerRenderer(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  players: PlayerI[],
) {
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      console.warn('Canvas not found')
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      console.warn('Canvas context not found')
      return
    }

    // render the players
    players.forEach((player) => {
      drawPlayer(context, player)
    })
  }, [players, canvasRef])
}
