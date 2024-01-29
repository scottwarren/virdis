import { Dispatch, useCallback } from 'react'

import { ValidActions } from '@/state/GameLoop/GameLoop.reducer'
import { useGameLoop } from '@/state/GameLoop/GameLoopProvider'

/**
 * Hook that returns a callback to update a player's position.
 */
export function useUpdatePlayerPositionCallback() {
  const value = useGameLoop()
  console.log('value', value)

  return useCallback((playerIndex: number, position: [number, number]) => {
    console.log({
      // dispatch({
      type: 'update_player',
      payload: {
        playerIndex,
        playerUpdate: {
          position,
        },
      },
    })
  }, [])
}
