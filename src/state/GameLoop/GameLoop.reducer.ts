import { Update } from 'next/dist/build/swc'
import { GameLoopStateI } from './GameLoop.types'
import { PlayerUpdateT } from '../../components/Player/Player.types'
import { Reducer } from 'react'

export function gameStateReducer(
  state: GameLoopStateI,
  action: ValidActions,
): GameLoopStateI {
  switch (action.type) {
    case 'update_score':
      const newScore: [number, number] = [...state.score]
      newScore[action.payload.playerIndex] = action.payload.score
      return {
        ...state,
        score: newScore,
      }
  }

  return state
}

export type ValidActions = UpdateScoreAction | UpdatePlayerAction

type UpdateScoreAction = {
  type: 'update_score'
  payload: UpdateScorePayload
}

type UpdatePlayerAction = {
  type: 'update_player'
  payload: UpdatePlayerPayload
}

type UpdateScorePayload = {
  playerIndex: number
  score: number
}

type UpdatePlayerPayload = {
  playerIndex: number
  playerUpdate: PlayerUpdateT
}

export type ReducerT = Reducer<GameLoopStateI, ValidActions>
