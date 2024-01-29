/**
 * Component that is used to render an individual "player" in the game, not controllable -- just a visual representation
 * of the item pinging around the screen
 */
export function Player({ alt = false }: ComponentProps) {
  if (alt) {
    return <div className={`${BASE_CLASSES} ${ALT_VERSION_CLASSES}`} />
  }

  return <div className={`${BASE_CLASSES} ${REGULAR_VERSION_CLASSES}`} />
}

const BASE_CLASSES = 'h-4 w-4 rounded-full'

// Classes that style the "default" version of the component
const REGULAR_VERSION_CLASSES = 'bg-green-800'

// Classes that style the "alt" version of the component
const ALT_VERSION_CLASSES = 'bg-green-200'

interface ComponentProps {
  /** Whether or not to render the alt version of the component. Defaults to false */
  alt?: boolean
  /** X position of the player */
  x: number
  /** Y position of the player */
  y: number
}
