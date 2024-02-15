import './App.css'

import { World } from '@/components/World/World'
import { GameStateProvider } from '@/state/GameState/GameStateProvider'

function App() {
  return (
    <GameStateProvider>
      <World />
    </GameStateProvider>
  )
}

export default App
