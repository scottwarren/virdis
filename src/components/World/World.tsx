import { useGameState } from '@/state/GameState/GameStateProvider.hooks'
import { Player } from '@/components/Player/Player'
import { useGameLoop } from './World.hooks'
import { Block } from '@/components/Block/Block'

export function World() {
  const { blocks, players } = useGameState()
  useGameLoop()

  return (
    <div className='flex min-h-screen w-screen'>
      {players.map((player) => {
        const [x, y] = player.position
        return <Player key={player.id} x={x} y={y} />
      })}
      {blocks.map((block) => {
        const [x, y] = block.position
        return <Block key={block.id} x={x} y={y} />
      })}
    </div>
  )
}
