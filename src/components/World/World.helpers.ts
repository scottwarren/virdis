import { X_EDGE_BUFFER, Y_EDGE_BUFFER } from './World.constants'

/**
 * Function used to determine whether a player is out of bounds on the X axis.
 */
export function isOutOfBoundsForX(x: number) {
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
 */
export function isOutOfBoundsForY(y: number) {
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
