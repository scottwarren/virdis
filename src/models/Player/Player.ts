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

// For security reasons we don't allow the user to update the ID.
type ValidFieldsToUpdateOnPlayer = Omit<PlayerI, 'id'>

// Allows the update of any player property, except for the ID
export type PlayerUpdateT = Partial<ValidFieldsToUpdateOnPlayer>

// Amount of movement applied to the player per tick. Same for both x and y.
export const DEFAULT_PLAYER_VELOCITY_PER_TICK = 2

// The width and height of the player UI element.
export const DEFAULT_PLAYER_SIZE_PX = 16
