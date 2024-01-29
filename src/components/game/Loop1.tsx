import { Player } from '@/components/Player1'

/**
 * The component that handles rendering and updating the game.
 */
export function Loop() {
  return (
    <div className='flex h-full w-full bg-green-600 '>
      <div>
        <Player />
        <Player alt />
      </div>
    </div>
  )
}

interface ComponentProps {}
