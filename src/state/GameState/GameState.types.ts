import { Dispatch } from 'react'
import { PlayerI } from '../../components/Player/Player.types'
import { ValidActions } from './GameState.reducer'

export interface GameStateI {
  players: PlayerI[]
  // The score -- the indexes represent the player's index in the players array
  score: [number, number]
}

export const INITIAL_STATE: GameStateI = {
  players: [],
  score: [0, 0],
}
