import { useContext } from 'react'
import { GameStateContext } from './GameStateProvider'

/**
 * Hook that's used to access the game state.
 */
export function useGameState() {
  return useContext(GameStateContext)
}
