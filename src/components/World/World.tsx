import { useGameLoop } from './World.hooks'

import { useGameState } from '@/state/GameState/GameStateProvider.hooks'

import { useEffect, useRef } from 'react'
import { DEFAULT_PLAYER_SIZE_PX, PlayerI } from '@/models/Player/Player'
import { BlockI, DEFAULT_BLOCK_SIZE } from '@/models/Block/Block'

export function World() {
  const { blocks, players } = useGameState()
  useGameLoop()

  const canvasRef = useRef<HTMLCanvasElement>(null)

  // These hooks are responsible for rendering the players and blocks on the canvas
  usePlayerRenderer(canvasRef, players)
  useBlockRenderer(canvasRef, blocks)

  return (
    <canvas
      className='outline-dashed outline-1 outline-red-700'
      ref={canvasRef}
    />
  )
}

/**
 * Uses the canvasRef to render the players on the canvas.
 */
function usePlayerRenderer(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  players: PlayerI[],
) {
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      console.warn('Canvas not found')
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      console.warn('Canvas context not found')
      return
    }

    // Ensure the canvas is the same size as the window
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Clear the canvas, for re-drawing the entire frame.
    context.clearRect(0, 0, canvas.width, canvas.height)

    // render the players
    players.forEach((player) => {
      drawPlayer(context, player)
    })
  }, [players, canvasRef])
}

/**
 * Function used to draw a player on the canvas.
 */
function drawPlayer(context: CanvasRenderingContext2D, player: PlayerI) {
  const [x, y] = player.position

  context.fillStyle = 'green'

  context.beginPath()

  context.arc(
    x,
    y,
    DEFAULT_PLAYER_SIZE_PX,
    CIRCLE_START_ANGLE,
    CIRCILE_END_ANGLE,
  )

  context.fill()
}

// Start/end angle for a circle, used to draw the player.
const CIRCLE_START_ANGLE = 0
const CIRCILE_END_ANGLE = Math.PI * 2

function drawBlock(context: CanvasRenderingContext2D, block: BlockI) {
  const [x, y] = block.position

  context.fillStyle = 'red'

  context.fillRect(x, y, DEFAULT_BLOCK_SIZE, DEFAULT_BLOCK_SIZE)
}

function useBlockRenderer(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  blocks: BlockI[],
) {
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')

    // render the blocks
  }, [blocks, canvasRef])
}
