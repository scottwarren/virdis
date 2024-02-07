import { useMemo } from 'react'
import { DEFAULT_PLAYER_SIZE_PX } from './Player.constants'

/**
 * Component that is used to render an individual "player" in the game, not controllable -- just a visual representation
 * of the item pinging around the screen
 */
export function Player({ x, y }: ComponentProps) {
  // Used to position the player on the screen
  const style = useMemo(() => {
    return {
      transform: `translate(${x}px, ${y}px)`,
      height: `${DEFAULT_PLAYER_SIZE_PX}px`,
      width: `${DEFAULT_PLAYER_SIZE_PX}px`,
    }
  }, [x, y])

  return <div style={style} className={`rounded-full bg-green-800`} />
}

interface ComponentProps {
  /** X position of the player */
  x: number
  /** Y position of the player */
  y: number
}
