import { useGameState } from '@/state/GameState/GameStateProvider.hooks'
import { useEffect, useState } from 'react'
import {
  DEFAULT_PLAYER_SIZE_PX,
  DEFAULT_PLAYER_VELOCITY_PER_TICK,
} from '@/models/Player/Player'
import { SECONDS_PER_TICK } from '@/models/World/World'
import {
  blockHitDetection,
  isPlayerOutOfBoundsForX,
  isPlayerOutOfBoundsForY,
} from './World.helpers'

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
  const {
    blocks,
    players,
    updatePlayerPosition,
    updatePlayerVelocity,
    gamePaused,
    deleteBlock,
  } = useGameState()

  useEffect(() => {
    const gameLoopIntervalID = window.setInterval(() => {
      // Calculate each player's new position and velocity
      players.forEach((player) => {
        const [x, y] = player.position
        const [xVelocity, yVelocity] = player.velocity

        const hitBlocks = blocks.filter((block) => {
          const isPlayerHittingBlock = blockHitDetection(
            player.position,
            block.position,
          )

          if (!isPlayerHittingBlock) {
            return false
          }

          // delete the block
          deleteBlock(block.id)

          return true
        })

        const didPlayerHitBlock = hitBlocks.length > 0

        const outOfBoundsX = isPlayerOutOfBoundsForX(x)
        const outOfBoundsY = isPlayerOutOfBoundsForY(y)

        const shouldInvertXVelocity = outOfBoundsX || didPlayerHitBlock
        const shouldInvertYVelocity = outOfBoundsY || didPlayerHitBlock

        const newXVelocity = shouldInvertXVelocity ? xVelocity * -1 : xVelocity
        const newYVelocity = shouldInvertYVelocity ? yVelocity * -1 : yVelocity

        // Trigger an update of the player's velocity within the game state
        updatePlayerVelocity(player.id, [newXVelocity, newYVelocity])

        const xMovement = DEFAULT_PLAYER_VELOCITY_PER_TICK * xVelocity
        const yMovement = DEFAULT_PLAYER_VELOCITY_PER_TICK * yVelocity

        // If the player is out of bounds, we want to invert its direction of movement
        // on the axis that it is out of bounds
        const newX = shouldInvertXVelocity ? x - xMovement : x + xMovement
        const newY = shouldInvertYVelocity ? y - yMovement : y + yMovement

        updatePlayerPosition(player.id, [newX, newY])
      })
    }, SECONDS_PER_TICK)

    // This means the game loop won't run
    if (gamePaused) {
      window.clearInterval(gameLoopIntervalID)
    }

    // Cleanup the timeout upon unmount to prevent memory leaks.
    return () => window.clearInterval(gameLoopIntervalID)
  }, [
    blocks,
    deleteBlock,
    frameTime,
    gamePaused,
    players,
    updatePlayerPosition,
    updatePlayerVelocity,
  ])
}

// collision detection:
// todo: figure out if this should include the edges of the screen (i.e. out of bounds detection)

// pseudo code
// get list of current blocks
// get pos for each of the blocks
// check if the player is overlapping with the block's position
//
