'use client'

import { createContext, useReducer } from 'react'

import { GameLoopStateI, INITIAL_STATE } from './GameLoop.types'
import { ReducerT, gameStateReducer } from './GameLoop.reducer'

export const GameLoopContext = createContext<GameLoopStateI>(INITIAL_STATE)

/**
 * Component used to render the game loop context provider
 */
export function GameLoopProvider({ children }: ComponentProps) {
  const [state, dispatch] = useReducer<ReducerT>(
    gameStateReducer,
    INITIAL_STATE,
  )

  return (
    <GameLoopContext.Provider value={state}>
      {children}
    </GameLoopContext.Provider>
  )
}

export function useGameLoop() {
  const context = GameLoopContext

  if (context === undefined) {
    throw new Error('useGameLoop must be used within a GameLoopProvider')
  }

  return context
}

interface ComponentProps {
  children: React.ReactNode
}
