'use client'

import { createContext, useMemo } from 'react'

import { GameStateI, INITIAL_STATE } from './GameState.types'
import { PlayerI } from '@/components/Player/Player.types'
import { UsePlayerReturnI, usePlayer } from '@/components/Player/Player.hooks'

export const GameStateContext = createContext<GameStateI>(INITIAL_STATE)

/**
 * Component used to render the game loop context provider
 */
export function GameStateProvider({ children }: ComponentProps) {
  const player1 = usePlayer()

  const players = useMemo((): Record<string, UsePlayerReturnI> => {
    return {
      [player1.player.id]: player1,
    }
  }, [player1])

  const state = useMemo((): GameStateI => {
    return {
      players: [player1.player],
      updatePlayerPosition: (id: string, position: [number, number]) => {
        const player = players[id]

        if (!player) {
          return console.error(`Player with id ${id} not found`)
        }

        player.updatePlayerPosition(position)
      },
    }
  }, [player1.player, players])

  return (
    <GameStateContext.Provider value={state}>
      {children}
    </GameStateContext.Provider>
  )
}

interface ComponentProps {
  children: React.ReactNode
}
