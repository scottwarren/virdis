import { Player } from '../Player/Player'
import { PlayerI } from '../../models/Player/Player'

export function Players({ players }: ComponentProps) {
  return players.map((player) => {
    const [x, y] = player.position
    return <Player key={player.id} x={x} y={y} />
  })
}

interface ComponentProps {
  players: PlayerI[]
}
