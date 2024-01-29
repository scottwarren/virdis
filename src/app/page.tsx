'use client'

import { World } from '@/components/World/World'
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
