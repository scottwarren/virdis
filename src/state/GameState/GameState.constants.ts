import { GameStateI } from '@/models/GameState/GameState'

export const INITIAL_STATE: GameStateI = {
  blocks: [],
  deleteBlock: () => {
    throw new Error('deleteBlock() not implemented')
  },
  gamePaused: false,
  players: [],
  setGamePaused: () => {
    throw new Error('setGamePaused() not implemented')
  },
  updatePlayerPosition: () => {
    throw new Error('updatePlayerPosition() not implemented')
  },
  updatePlayerVelocity: () => {
    throw new Error('updatePlayerVelocity() not implemented')
  },
}
