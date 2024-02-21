import { DEFAULT_PLAYER_SIZE_PX, PlayerI } from '@/models/Player/Player'

/**
 * Function used to draw a player on the canvas.
 */
export function drawPlayer(context: CanvasRenderingContext2D, player: PlayerI) {
  const [x, y] = player.position

  context.fillStyle = 'green'

  context.beginPath()

  arcTopLeft(context, x, y, DEFAULT_PLAYER_SIZE_PX)

  context.fill()
}

/**
 * Function used to draw an arc/circle within the canvas, starting from the top left instead of from the centre.
 *
 * Angle parameters default to draw a circle (0, Math.PI * 2).
 */
function arcTopLeft(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  startAngle = 0,
  endAngle = Math.PI * 2,
) {
  context.arc(x + radius, y + radius, radius, startAngle, endAngle, false)
}
