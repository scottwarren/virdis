import { GameLoop } from '@/components/game/GameLoop'
import { useFrameTime } from '@/state/GameLoop/GameLoop.hook'
import { GameLoopProvider } from '@/state/GameLoop/GameLoopProvider'

export default function Home() {
  return <PageWithProviders />
}

function Page() {
  const frameTime = useFrameTime()
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='max-h-screen w-full max-w-5xl items-center justify-center align-middle font-mono text-sm lg:flex'>
        <GameLoop frameTime={frameTime} />
      </div>
    </main>
  )
}

function PageWithProviders() {
  return (
    <GameLoopProvider>
      <Page />
    </GameLoopProvider>
  )
}
