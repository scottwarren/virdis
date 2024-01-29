export interface GameLoopStateI {
  players: Player[]
  // The score -- the indexes represent the player's index in the players array
  score: [number, number]
}

interface Player {
  /** ID of the player. */
  id: string
  /** X,Y position of the player. */
  position: [number, number]
}
