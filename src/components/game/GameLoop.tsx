import { Player } from '@/components/Player/Player'
import { useUpdatePlayerPositionCallback } from '../Player/Player.hooks'
import { useFrameTime } from '@/state/GameLoop/GameLoop.hook'

/**
 * The component that handles rendering and updating the game.
 */
export function GameLoop({ frameTime }: ComponentProps) {
  const updatePlayer = useUpdatePlayerPositionCallback()

  return (
    <div className='flex h-full w-full bg-green-600 '>
      <div>
        <Player />
        <Player alt />
      </div>
    </div>
  )
}

interface ComponentProps {
  /** Frametime. */
  frameTime: number
}
