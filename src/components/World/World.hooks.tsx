import { useGameState } from '@/state/GameState/GameStateProvider.hooks'
import { useEffect } from 'react'
import { DEFAULT_PLAYER_VELOCITY_PER_TICK } from '@/models/Player/Player'
import { SECONDS_PER_TICK } from '@/models/World/World'
import {
  blockHitDetection,
  isPlayerOutOfBoundsForX,
  isPlayerOutOfBoundsForY,
} from './World.helpers'
import {
  useClearCanvas,
  useFitCanvasToScreen,
} from '@/components/Canvas/Canvas.hooks'
import { usePlayerRenderer } from '@/components/Player/PlayerRenderer'
import { useBlockRenderer } from '@/components/Block/BlockRenderer'

export function useGameLoop() {
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

          if (isPlayerHittingBlock) {
            deleteBlock(block.id)
            return true
          }

          return false
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
    gamePaused,
    players,
    updatePlayerPosition,
    updatePlayerVelocity,
  ])
}

/**
 * Hook used to render the players and blocks on the canvas.
 */
export function useWorldRenderer(
  canvasRef: React.RefObject<HTMLCanvasElement>,
) {
  const { blocks, players } = useGameState()
  // Used to resize the canvas to take up the entire screen
  useFitCanvasToScreen(canvasRef)

  // Used to clear the canvas before rendering the players and blocks
  useClearCanvas(canvasRef)

  // These hooks are responsible for rendering the players and blocks on the canvas
  usePlayerRenderer(canvasRef, players)
  useBlockRenderer(canvasRef, blocks)
}
