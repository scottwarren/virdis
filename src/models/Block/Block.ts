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
    const position: BlockI['position'] = generatePseudoRandomPosition()

    const newBlock: BlockI = {
      id: uuidv4(),
      position,
    }

    blocks.push(newBlock)
  }

  return blocks
}

export function generatePseudoRandomPosition(): BlockI['position'] {
  // We don't want the blocks to be generated outside of the screen
  // therefore we use the block size to calculate the maximum X and Y
  const MAX_BLOCK_X = window.innerWidth - DEFAULT_BLOCK_SIZE
  // Using window.innerHeight because the other options I've tried are not reliable (e.g. document.body.scrollHeight)
  // and either return 0 or are not the actual height of the viewport.
  const MAX_BLOCK_Y = window.innerHeight - DEFAULT_BLOCK_SIZE

  // Using the min of DEFAULT_BLOCK_SIZE for the same reason as above,
  // We don't want the blocks to be generated outside of the screen
  const x = getRandomInt(DEFAULT_BLOCK_SIZE, MAX_BLOCK_X)
  const y = getRandomInt(DEFAULT_BLOCK_SIZE, MAX_BLOCK_Y)

  return [x, y]
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
