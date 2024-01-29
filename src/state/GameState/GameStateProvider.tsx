'use client'

import { createContext, useContext, useMemo, useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { GameStateI, INITIAL_STATE } from './GameState.types'
import { ReducerT, gameStateReducer } from './GameState.reducer'
import { PlayerI } from '@/components/Player/Player.types'

export const GameStateContext = createContext<GameStateI>(INITIAL_STATE)

/**
 * Component used to render the game loop context provider
 */
export function GameStateProvider({ children }: ComponentProps) {
  const [player1, setPlayer1] = useState<PlayerI>({
    position: [0, 0],
    id: uuidv4(),
  })

  const [player2, setPlayer2] = useState<PlayerI>({
    position: [0, 0],
    id: uuidv4(),
  })

  const [score, setScore] = useState<[number, number]>([0, 0])

  const state = useMemo((): GameStateI => {
    return {
      players: [player1, player2],
      score,
    }
  }, [player1, player2, score])

  return (
    <GameStateContext.Provider value={state}>
      {children}
    </GameStateContext.Provider>
  )
}

interface ComponentProps {
  children: React.ReactNode
}
