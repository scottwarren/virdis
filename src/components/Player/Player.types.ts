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
