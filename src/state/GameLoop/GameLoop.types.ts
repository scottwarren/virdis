import { Player } from '../Player/Player.types'

export interface GameLoopStateI {
  players: Player[]
  // The score -- the indexes represent the player's index in the players array
  score: [number, number]
}
