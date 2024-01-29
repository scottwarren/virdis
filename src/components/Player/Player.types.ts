export interface PlayerI {
  /** ID of the player. */
  id: string
  /** X,Y position of the player. */
  position: [number, number]
  /** The player's score. */
  score: number
  /** Player's velocity. X, Y */
  velocity: [number, number]
}

// Allows the update of any player property, except for the ID
export type PlayerUpdateT = Partial<Omit<PlayerI, 'id'>>

// Default velocity per frame
export const DEFAULT_PLAYER_VELOCITY_PER_FRAME = 0.01

export const DEFAULT_PLAYER_SIZE_PX = 16
