import { DEFAULT_BLOCK_SIZE } from '@/models/Block/Block'
import { DEFAULT_PLAYER_SIZE_PX } from '@/models/Player/Player'
import { X_EDGE_BUFFER, Y_EDGE_BUFFER } from '@/models/World/World'

/**
 * Function used to determine whether a player is out of bounds on the X axis.
 *
 * @params x {Number} position on the screen on the x axis, used for out of bounds check.
 */
export function isPlayerOutOfBoundsForX(x: number) {
  const xMin = 0

  const xMax = document.body.clientWidth - X_EDGE_BUFFER

  if (x > xMax) {
    return true
  }

  if (x < xMin) {
    return true
  }

  return false
}

/**
 * Function used to determine whether a player is out of bounds on the y axis.
 *
 * @params y {Number} position on the screen on the y axis, used for out of bounds check.
 */
export function isPlayerOutOfBoundsForY(y: number) {
  const yMin = 0

  const yMax = document.body.clientHeight - Y_EDGE_BUFFER

  if (y > yMax) {
    return true
  }

  if (y < yMin) {
    return true
  }

  return false
}

/**
 * Function used to detect if a player is colliding with a block.
 *
 * @returns Boolean
 */
export function blockHitDetection(
  [playerX, playerY]: [number, number],
  [blockX, blockY]: [number, number],
) {
  // We need to check if the player is within the block's area, so we need the 0, 0 position of the block and the end position.
  const blockXEnd = blockX + DEFAULT_BLOCK_SIZE
  const blockYEnd = blockY + DEFAULT_BLOCK_SIZE

  // We want to use the bottom right corner of the player to check for collision.
  const playerXEnd = playerX + DEFAULT_PLAYER_SIZE_PX
  const playerYEnd = playerY + DEFAULT_PLAYER_SIZE_PX

  if (playerXEnd >= blockX && playerXEnd <= blockXEnd) {
    if (playerYEnd >= blockY && playerYEnd <= blockYEnd) {
      return true
    }
  }

  return false
}
