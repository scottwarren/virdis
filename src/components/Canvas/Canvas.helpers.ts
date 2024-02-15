/**
 * Function used to clear the canvas before rendering the players and blocks.
 */
export function clearCanvas(
  context: CanvasRenderingContext2D,
  canvas: CanvasProps,
) {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

interface CanvasProps {
  width: number
  height: number
}
