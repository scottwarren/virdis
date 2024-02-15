import { describe, it, expect } from 'vitest'
import { blockHitDetection } from './World.helpers'

describe('World.helpers', () => {
  describe('blockHitDetection', () => {
    it('should return true if the playerX is within the blockX, blockX+BLOCK_SIZE', () => {
      expect(blockHitDetection([60, 50], [60, 50])).toEqual(true)
    })
  })
})
