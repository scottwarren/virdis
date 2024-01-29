import { Dispatch } from 'react'
import { Player } from '../../components/Player/Player.types'
import { ValidActions } from './GameLoop.reducer'

export interface GameLoopStateI {
  players: Player[]
  // The score -- the indexes represent the player's index in the players array
  score: [number, number]
  /** Dispatch function used to trigger actions. */
  dispatch: Dispatch<ValidActions>
}

export const INITIAL_STATE: GameLoopStateI = {
  players: [],
  score: [0, 0],
  dispatch: () => {
    throw new Error('dispatch function must be overridden')
  },
}
