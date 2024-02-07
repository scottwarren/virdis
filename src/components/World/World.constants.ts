import { DEFAULT_PLAYER_SIZE_PX } from '../Player/Player.constants'

export const TICKS_PER_SECOND = 60

// 16.66666667 ticks per second for 60fps
export const SECONDS_PER_TICK = 1000 / TICKS_PER_SECOND

// Add some spacing/buffer to the edge of the screen so it doesn't look like the player is going off the screen
export const X_EDGE_BUFFER = DEFAULT_PLAYER_SIZE_PX * 1.25
export const Y_EDGE_BUFFER = DEFAULT_PLAYER_SIZE_PX * 1.25
