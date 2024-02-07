export interface BlockI {
  /** ID of the block. */
  id: string
  /** X,Y position of the block. */
  position: [number, number]
}

// The width/height of a block.
export const DEFAULT_BLOCK_SIZE = 45
