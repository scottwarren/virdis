import { useMemo } from 'react'

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
      className={`${BASE_CLASSES} ${REGULAR_VERSION_CLASSES}`}
    />
  )
}

const BASE_CLASSES = 'h-4 w-4 rounded-full'

// Classes that style the "default" version of the component
const REGULAR_VERSION_CLASSES = 'bg-green-800'

// Classes that style the "alt" version of the component
const ALT_VERSION_CLASSES = 'bg-green-200'

interface ComponentProps {
  /** X position of the player */
  x: number
  /** Y position of the player */
  y: number
}
