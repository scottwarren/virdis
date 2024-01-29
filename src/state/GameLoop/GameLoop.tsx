// 'use client'

import { createContext } from 'react'
import { GameLoopStateI } from './GameLoop.types'

export const INITIAL_STATE: GameLoopStateI = {
  players: [],
  score: [0, 0],
}

const GameLoopContext = createContext<GameLoopStateI>(INITIAL_STATE)

export { GameLoopContext }
