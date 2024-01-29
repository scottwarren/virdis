import { useReducer } from 'react'

import { GameLoopContext, INITIAL_STATE } from './GameLoop'
import { GameLoopStateI } from './GameLoop.types'

/**
 * Component used to render the game loop context provider
 */
export function GameLoopProvider({ children }: ComponentProps) {
  return (
    <GameLoopContext.Provider value={INITIAL_STATE}>
      {children}
    </GameLoopContext.Provider>
  )
}

interface ComponentProps {
  children: React.ReactNode
}
