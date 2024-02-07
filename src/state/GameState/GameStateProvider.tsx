'use client'

import { createContext, useCallback, useMemo, useState } from 'react'

import { GameStateI, INITIAL_STATE } from './GameState.types'
import { PlayerUpdateT } from '@/components/Player/Player.types'
import { UsePlayerReturnI, usePlayer } from '@/components/Player/Player.hooks'

export const GameStateContext = createContext<GameStateI>(INITIAL_STATE)

/**
 * Component used to render the game loop context provider
 */
export function GameStateProvider({ children }: ComponentProps) {
  const player1 = usePlayer()
  const [gamePaused, setGamePaused] = useState(false)

  const players = useMemo((): Record<string, UsePlayerReturnI> => {
    return {
      [player1.player.id]: player1,
    }
  }, [player1])

  const updatePlayer = useCallback(
    (id: string, update: PlayerUpdateT) => {
      const player = players[id]

      if (!player) {
        return console.error(`Player with id ${id} not found`)
      }

      if (update.position) {
        player.updatePlayerPosition(update.position)
      }

      if (update.velocity) {
        player.updatePlayerVelocity(update.velocity)
      }
    },
    [players],
  )

  const state = useMemo((): GameStateI => {
    return {
      players: [player1.player],
      gamePaused,
      setGamePaused,
      updatePlayerVelocity: (id: string, velocity: [number, number]) => {
        const player = players[id]

        if (!player) {
          return console.error(`Player with id ${id} not found`)
        }

        player.updatePlayerVelocity(velocity)
      },
      updatePlayerPosition: (id: string, position: [number, number]) => {
        const player = players[id]

        if (!player) {
          return console.error(`Player with id ${id} not found`)
        }

        player.updatePlayerPosition(position)
      },
    }
  }, [gamePaused, player1.player, players])

  return (
    <GameStateContext.Provider value={state}>
      {children}
    </GameStateContext.Provider>
  )
}

interface ComponentProps {
  children: React.ReactNode
}
