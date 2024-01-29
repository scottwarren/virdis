export interface PlayerI {
  /** ID of the player. */
  id: string
  /** X,Y position of the player. */
  position: [number, number]
}

// Allows the update of any player property, except for the ID
export type PlayerUpdateT = Partial<Omit<PlayerI, 'id'>>
