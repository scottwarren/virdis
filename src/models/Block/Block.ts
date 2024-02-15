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
  const MAX_BLOCK_X = document.body.clientWidth - DEFAULT_BLOCK_SIZE
  const MAX_BLOCK_Y = document.body.clientHeight - DEFAULT_BLOCK_SIZE

  // Using the min of DEFAULT_BLOCK_SIZE for the same reason as above,
  // We don't want the blocks to be generated outside of the screen
  const x = randomIntFromInterval(DEFAULT_BLOCK_SIZE, MAX_BLOCK_X)
  const y = randomIntFromInterval(DEFAULT_BLOCK_SIZE, MAX_BLOCK_Y)

  console.log('x', x, 'y', y)

  return [x, y]
}

/**
 * Function to generate a random integer between min and max.
 *
 * @returns a random integer between min and max (inclusive of min and max)
 *
 * @see https://stackoverflow.com/a/7228322
 */
function randomIntFromInterval(min: number, max: number) {
  // Rouding up the min, otherwise we could get a number less than min
  // same for max, we round down to avoid getting a number greater than max
  const minInt = Math.ceil(min)
  const maxInt = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1) + min)
}
