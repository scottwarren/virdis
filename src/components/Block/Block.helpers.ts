import { BlockI, DEFAULT_BLOCK_SIZE } from '@/models/Block/Block'

/**
 * Function used to draw a block on the canvas.
 */
export function drawBlock(context: CanvasRenderingContext2D, block: BlockI) {
  const [x, y] = block.position

  context.fillStyle = 'red'

  context.fillRect(x, y, DEFAULT_BLOCK_SIZE, DEFAULT_BLOCK_SIZE)
}
