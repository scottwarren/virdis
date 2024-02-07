import { PlayerI } from '@/models/Player/Player'
import { BlockI } from '@/models/Block/Block'

export interface GameStateI {
  /** Whether or not the game is over. */
  gamePaused: boolean
  /** List of players in the game. */
  players: PlayerI[]
  /** List of blocks. Upon player colliding with a block, the block is destroyed, and the player's movement is inverted. */
  blocks: BlockI[]
  /** Function used to update a player's position. */
  updatePlayerPosition: (id: string, position: [number, number]) => void
  /** Function used to update a player's velocity. */
  updatePlayerVelocity: (id: string, velocity: [number, number]) => void
  /** Function used to set the game over state. */
  setGamePaused: (gamePaused: boolean) => void
}
