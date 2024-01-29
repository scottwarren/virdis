import { Player } from '@/components/player'

/**
 * The component that handles rendering and updating the game.
 */
export function Loop() {
  return (
    <div className='flex h-full w-full bg-green-200 '>
      <div>
        <Player />
        <Player />
      </div>
    </div>
  )
}
