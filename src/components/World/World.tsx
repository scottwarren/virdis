import { Player } from '../Player/Player'

import { useGameState } from '@/state/GameState/GameStateProvider'

export function World() {
  const { players } = useGameState()

  return (
    <div className='flex min-h-screen w-screen bg-green-600 '>
      {players.map((player) => {
        const [x, y] = player.position
        return <Player key={player.id} x={x} y={y} />
      })}
    </div>
  )
}
