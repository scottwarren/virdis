import { BlockI, DEFAULT_BLOCK_SIZE } from '@/models/Block/Block'
import { useEffect } from 'react'

/**
 * Function used to draw a block on the canvas.
 */
export function drawBlock(context: CanvasRenderingContext2D, block: BlockI) {
  const [x, y] = block.position

  context.fillStyle = 'red'

  context.fillRect(x, y, DEFAULT_BLOCK_SIZE, DEFAULT_BLOCK_SIZE)
}

export function useBlockRenderer(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  blocks: BlockI[],
) {
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    blocks.forEach((block) => {
      drawBlock(context, block)
    })

    // render the blocks
  }, [blocks, canvasRef])
}
