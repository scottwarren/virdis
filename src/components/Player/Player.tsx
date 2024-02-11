import { useMemo } from 'react'
import { DEFAULT_PLAYER_SIZE_PX } from '@/models/Player/Player'

/**
 * Component that is used to render an individual "player" in the game, not controllable -- just a visual representation
 * of the item pinging around the screen
 */
export function Player({ x, y }: ComponentProps) {
  // Used to position the player on the screen
  const style = useMemo(() => {
    return {
      ...DEFAULT_STYLES,
      transform: `translate(${x}px, ${y}px)`,
    }
  }, [x, y])

  return (
    <div
      style={style}
      className={`w[${DEFAULT_PLAYER_SIZE_PX}px] h[${DEFAULT_PLAYER_SIZE_PX}px] rounded-full bg-green-800`}
    />
  )
}

const DEFAULT_STYLES = {
  height: `${DEFAULT_PLAYER_SIZE_PX}px`,
  width: `${DEFAULT_PLAYER_SIZE_PX}px`,
}

interface ComponentProps {
  /** X position of the player */
  x: number
  /** Y position of the player */
  y: number
}
