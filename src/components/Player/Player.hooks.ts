import { useMemo, useRef, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import {
  DEFAULT_PLAYER_VELOCITY_PER_TICK,
  PlayerI,
} from '@/models/Player/Player'

export function usePlayer() {
  // The ref to store the ID of the player.
  const idRef = useRef(uuidv4())

  const [position, setPosition] = useState<[number, number]>([0, 0])
  const [score, setScore] = useState<number>(0)
  const [velocity, setVelocity] = useState<[number, number]>([
    DEFAULT_PLAYER_VELOCITY_PER_TICK,
    DEFAULT_PLAYER_VELOCITY_PER_TICK,
  ])

  return useMemo(
    (): UsePlayerReturnI => ({
      player: {
        position,
        id: idRef.current,
        score,
        velocity,
      },
      updatePlayerPosition: setPosition,
      updatePlayerScore: setScore,
      updatePlayerVelocity: setVelocity,
    }),
    [position, score, velocity],
  )
}

export interface UsePlayerReturnI {
  /** The player entity */
  player: PlayerI
  /** Update the player's position */
  updatePlayerPosition: (position: [number, number]) => void
  /** Update the player's score */
  updatePlayerScore: (score: number) => void
  /** Update the player's velocity */
  updatePlayerVelocity: (velocity: [number, number]) => void
}
