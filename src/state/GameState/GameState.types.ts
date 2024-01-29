import { PlayerI } from '../../components/Player/Player.types'

export interface GameStateI {
  players: PlayerI[]

  updatePlayerPosition: (id: string, position: [number, number]) => void
}

export const INITIAL_STATE: GameStateI = {
  players: [],
  updatePlayerPosition: () => {
    throw new Error('updatePlayerPosition() not implemented')
  },
}
