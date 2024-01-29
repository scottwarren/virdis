import { useGameState } from '@/state/GameState/GameStateProvider.hooks'
import { useEffect, useState } from 'react'
import { DEFAULT_PLAYER_VELOCITY_PER_FRAME } from '../Player/Player.types'

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
      // Calculate each player's new position
      players.forEach((player) => {
        const [x, y] = player.position
        const [xVelocity, yVelocity] = player.velocity

        const isPlayerOutOfBounds = isOutOfBounds(x, y)

        if (isPlayerOutOfBounds) {
          // Invert the velocity
          const newXVelocity = xVelocity * -1
          const newYVelocity = yVelocity * -1

          updatePlayerVelocity(player.id, [newXVelocity, newYVelocity])
        }

        const xMovement = xVelocity * frameTime
        const yMovement = yVelocity * frameTime

        const newX = isPlayerOutOfBounds ? x - xMovement : x + xMovement

        const newY = isPlayerOutOfBounds ? y - yMovement : y + yMovement

        updatePlayerPosition(player.id, [newX, newY])
      })
    }, TICKS_PER_FRAME)

    if (gameOver) {
      window.clearInterval(gameLoopID)
    }

    return () => window.clearInterval(gameLoopID)
  }, [frameTime, gameOver, players, updatePlayerPosition, updatePlayerVelocity])
}

const TICKS_PER_SECOND = 60

// 16.66666667 ticks per second for 60fps
const TICKS_PER_FRAME = 1000 / TICKS_PER_SECOND

/**
 * Function used to determine whether a player is out of bounds.
 */
function isOutOfBounds(x: number, y: number) {
  const xMax = document.body.clientWidth
  const yMax = document.body.clientHeight

  if (x > xMax || y > yMax) {
    return true
  }

  if (x < 0 || y < 0) {
    return true
  }

  return false
}
