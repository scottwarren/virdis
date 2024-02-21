'use client'

import { createContext, useCallback, useMemo, useState } from 'react'

import { GameStateI } from '@/models/GameState/GameState'
import { INITIAL_STATE } from './GameState.constants'
import { UsePlayerReturnI, usePlayer } from '@/components/Player/Player.hooks'
import { generateBlocks } from '@/models/Block/Block'
import { BlockI } from '@/models/Block/Block'

export const GameStateContext = createContext<GameStateI>(INITIAL_STATE)

/**
 * Component used to render the game loop context provider
 */
export function GameStateProvider({ children }: ComponentProps) {
  const player1 = usePlayer()

  const [gamePaused, setGamePaused] = useState(false)
  const [blocks, setBlocks] = useState(INITIAL_BLOCKS)
  const handleDeleteBlock = useCallback((id: string) => {
    setBlocks((blocks: BlockI[]) => {
      return blocks.filter((block) => block.id !== id)
    })
  }, [])

  const players = useMemo((): Record<string, UsePlayerReturnI> => {
    return {
      [player1.player.id]: player1,
    }
  }, [player1])

  const state = useMemo((): GameStateI => {
    return {
      players: [player1.player],
      gamePaused,
      deleteBlock: handleDeleteBlock,
      blocks,
      setGamePaused,
      updatePlayerScore: (id: string, score: number) => {
        const player = players[id]

        if (!player) {
          return console.error(`Player with id ${id} not found`)
        }

        player.updatePlayerScore(score)
      },
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
  }, [player1.player, gamePaused, handleDeleteBlock, blocks, players])

  return (
    <GameStateContext.Provider value={state}>
      {children}
    </GameStateContext.Provider>
  )
}

const INITIAL_BLOCKS = generateBlocks(20)

interface ComponentProps {
  children: React.ReactNode
}
