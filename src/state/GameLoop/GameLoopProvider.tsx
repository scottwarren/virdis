import { useReducer } from 'react'

import { GameLoopContext, INITIAL_STATE } from './GameLoop'
import { GameLoopStateI } from './GameLoop.types'
import { ReducerT, gameStateReducer } from './GameLoop.reducer'

/**
 * Component used to render the game loop context provider
 */
export function GameLoopProvider({ children }: ComponentProps) {
  const [state] = useReducer<ReducerT>(gameStateReducer, INITIAL_STATE)

  return (
    <GameLoopContext.Provider value={state}>
      {children}
    </GameLoopContext.Provider>
  )
}

interface ComponentProps {
  children: React.ReactNode
}
