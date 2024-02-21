import { useGameState } from '@/state/GameState/GameStateProvider.hooks'
import { useEffect } from 'react'
import { DEFAULT_PLAYER_VELOCITY_PER_TICK } from '@/models/Player/Player'
import { SECONDS_PER_TICK } from '@/models/World/World'
import {
  blockHitDetection,
  isPlayerOutOfBoundsForX,
  isPlayerOutOfBoundsForY,
} from './World.helpers'
import { useFitCanvasToScreen } from '@/components/Canvas/Canvas.hooks'
import { drawPlayer } from '@/components/Player/Player.helpers'
import { drawBlock } from '@/components/Block/Block.helpers'
import { clearCanvas } from '../Canvas/Canvas.helpers'

export function useGameLoop() {
  const {
    blocks,
    players,
    updatePlayerPosition,
    updatePlayerVelocity,
    updatePlayerScore,
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
            updatePlayerScore(player.id, player.score + 1)
            deleteBlock(block.id)
          }

          return isPlayerHittingBlock
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
    updatePlayerScore,
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

  // Renders the players and the blocks on the canvas
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      console.log('Canvas not found')
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      console.log('Canvas context not found')
      return
    }

    // Clear the canvas before rendering the players and blocks, since we can't move an entiy within the canvas, therefore we have to clear the canvas and redraw the frame.
    clearCanvas(context, {
      width: canvas.width,
      height: canvas.height,
    })

    // Render the players
    players.forEach((player) => {
      drawPlayer(context, player)
    })

    // Render the blocks
    blocks.forEach((block) => {
      drawBlock(context, block)
    })
  }, [blocks, canvasRef, players])
}
