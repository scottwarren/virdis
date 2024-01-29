import { World } from '@/components/World/World'
import { GameState } from '@/components/game/GameState'
import { useFrameTime } from '@/state/GameState/GameState.hook'
import { GameStateProvider } from '@/state/GameState/GameStateProvider'

export default function Home() {
  return <PageWithProviders />
}

function PageWithProviders() {
  return (
    <GameStateProvider>
      <World />
    </GameStateProvider>
  )
}
