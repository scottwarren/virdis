import { PlayerI } from '../../components/Player/Player.types'

export interface GameStateI {
  /** Whether or not the game is over. */
  gameOver: boolean
  /** List of players in the game. */
  players: PlayerI[]
  /** Function used to update a player's position. */
  updatePlayerPosition: (id: string, position: [number, number]) => void
  /** Function used to update a player's velocity. */
  updatePlayerVelocity: (id: string, velocity: [number, number]) => void
  /** Function used to set the game over state. */
  setGameOver: (gameOver: boolean) => void
}

export const INITIAL_STATE: GameStateI = {
  players: [],
  updatePlayerPosition: () => {
    throw new Error('updatePlayerPosition() not implemented')
  },
  gameOver: false,
  setGameOver: () => {
    throw new Error('setGameOver() not implemented')
  },
  updatePlayerVelocity: () => {
    throw new Error('updatePlayerVelocity() not implemented')
  },
}
