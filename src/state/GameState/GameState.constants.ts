import { GameStateI } from '@/models/GameState/GameState'

export const INITIAL_STATE: GameStateI = {
  players: [],
  blocks: [],
  updatePlayerPosition: () => {
    throw new Error('updatePlayerPosition() not implemented')
  },
  gamePaused: false,
  setGamePaused: () => {
    throw new Error('setGamePaused() not implemented')
  },
  updatePlayerVelocity: () => {
    throw new Error('updatePlayerVelocity() not implemented')
  },
}
