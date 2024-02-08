import { v4 as uuidv4 } from 'uuid'
export interface BlockI {
  /** ID of the block. */
  id: string
  /** X, Y position of the block. */
  position: [number, number]
}

// The width/height of a block.
export const DEFAULT_BLOCK_SIZE = 45

/**
 * Function used to generate n number of blocks.
 * @param numberOfBlocks number of blocks to generate.
 */
export function generateBlocks(numberOfBlocks: number) {
  const blocks: BlockI[] = []

  for (let i = 0; i < numberOfBlocks; i++) {
    const position: BlockI['position'] = [50, 80]

    const newBlock: BlockI = {
      id: uuidv4(),
      position,
    }

    blocks.push(newBlock)
  }

  return blocks
}
