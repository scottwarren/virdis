import { Loop } from '@/components/game/Loop'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='max-h-screen w-full max-w-5xl items-center justify-center align-middle font-mono text-sm lg:flex'>
        <Loop />
      </div>
    </main>
  )
}
