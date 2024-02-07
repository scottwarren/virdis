export interface BlockI {
  /** ID of the player. */
  id: string
  /** X,Y position of the player. */
  position: [number, number]
  /** The player's score. */
  score: number
  /** Player's velocity. X, Y */
  velocity: [number, number]
}

// The width/height of a block.
export const DEFAULT_BLOCK_SIZE = 45
