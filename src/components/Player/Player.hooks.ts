import { useMemo, useRef, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { PlayerI } from './Player.types'

export function usePlayer(): UsePlayerReturnI {
  const idRef = useRef<string>(uuidv4())

  const [player, setPlayer] = useState<PlayerI>({
    position: [0, 0],
    id: uuidv4(),
    score: 0,
  })

  const [position, setPosition] = useState<[number, number]>([0, 0])
  const [score, setScore] = useState<number>(0)

  return {
    player: {
      position,
      id: idRef.current,
      score,
    },
    updatePlayerPosition: setPosition,
    updatePlayerScore: setScore,
  }
}

export interface UsePlayerReturnI {
  /** The player entity */
  player: PlayerI
  /** Update the player's position */
  updatePlayerPosition: (position: [number, number]) => void
  /** Update the player's score */
  updatePlayerScore: (score: number) => void
}
