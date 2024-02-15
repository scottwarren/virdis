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
      transform: `translate(${x}px, ${y}px)`,
    }
  }, [x, y])

  return (
    <div
      style={style}
      className={`${HEIGHT_CLASS} ${WIDTH_CLASS} rounded-full bg-green-800`}
    />
  )
}

const HEIGHT_CLASS = `h-[${DEFAULT_PLAYER_SIZE_PX}px]`
const WIDTH_CLASS = `w-[${DEFAULT_PLAYER_SIZE_PX}px]`

interface ComponentProps {
  /** X position of the player */
  x: number
  /** Y position of the player */
  y: number
}
