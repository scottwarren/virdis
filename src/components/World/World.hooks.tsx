import { useGameState } from '@/state/GameState/GameStateProvider.hooks'
import { useEffect, useState } from 'react'
import { DEFAULT_PLAYER_VELOCITY_PER_TICK } from '../Player/Player.types'
import { SECONDS_PER_TICK } from './World.constants'
import { isOutOfBoundsForX, isOutOfBoundsForY } from './World.helpers'

/**
 * Hook that returns the current frame time
 *
 * @source: https://medium.com/projector-hq/writing-a-run-loop-in-javascript-react-9605f74174b
 */
export function useFrameTime() {
  const [frameTime, setFrameTime] = useState(0)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setFrameTime(performance.now())
    })

    return () => cancelAnimationFrame(frameId)
  }, [])

  return frameTime
}

export function useGameLoop(frameTime: number) {
  const { players, updatePlayerPosition, updatePlayerVelocity, gameOver } =
    useGameState()

  useEffect(() => {
    const gameLoopID = window.setInterval(() => {
      // Calculate each player's new position and velocity
      players.forEach((player) => {
        const [x, y] = player.position
        const [xVelocity, yVelocity] = player.velocity

        const isPlayerOutOfBoundsForX = isOutOfBoundsForX(x)
        const isPlayerOutOfBoundsForY = isOutOfBoundsForY(y)

        const newXVelocity = isPlayerOutOfBoundsForX
          ? xVelocity * -1
          : xVelocity
        const newYVelocity = isPlayerOutOfBoundsForY
          ? yVelocity * -1
          : yVelocity

        // Trigger an update of the player's velocity within the game state
        updatePlayerVelocity(player.id, [newXVelocity, newYVelocity])

        const xMovement = DEFAULT_PLAYER_VELOCITY_PER_TICK * xVelocity
        const yMovement = DEFAULT_PLAYER_VELOCITY_PER_TICK * yVelocity

        const newX = isPlayerOutOfBoundsForX ? x - xMovement : x + xMovement

        const newY = isPlayerOutOfBoundsForY ? y - yMovement : y + yMovement

        updatePlayerPosition(player.id, [newX, newY])
      })
    }, SECONDS_PER_TICK)

    if (gameOver) {
      window.clearInterval(gameLoopID)
    }

    return () => window.clearInterval(gameLoopID)
  }, [frameTime, gameOver, players, updatePlayerPosition, updatePlayerVelocity])
}
