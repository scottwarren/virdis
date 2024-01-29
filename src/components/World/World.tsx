import { useGameState } from '@/state/GameState/GameStateProvider.hooks'
import { Player } from '../Player/Player'
import { useFrameTime, useGameLoop } from './World.hooks'

export function World() {
  const { players, setGameOver } = useGameState()
  const frameTime = useFrameTime()
  useGameLoop(frameTime)

  return (
    <div className='flex min-h-screen w-screen'>
      {players.map((player) => {
        const [x, y] = player.position
        return <Player key={player.id} x={x} y={y} />
      })}
      <div className='flex flex-row justify-end'>
        <button onClick={() => setGameOver(true)}>End Game</button>
      </div>
    </div>
  )
}
