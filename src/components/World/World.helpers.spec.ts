import { describe, it, expect } from 'vitest'
import { blockHitDetection } from './World.helpers'

describe('World.helpers', () => {
  describe('blockHitDetection', () => {
    it('should return true if the playerX is within the blockX, blockX+BLOCK_SIZE', () => {
      expect(blockHitDetection([60, 50], [60, 50])).toEqual(true)
    })
    it('should return false is not within the area', () => {
      expect(blockHitDetection([452, 452], [450, 480])).toEqual(false)
      expect(blockHitDetection([0, 0], [450, 480])).toEqual(false)
      expect(blockHitDetection([1000, 460], [450, 480])).toEqual(false)
    })

    it('should return false if the playerY is within the block, but not the X', () => {
      expect(blockHitDetection([100, 490], [450, 480])).toEqual(false)
      expect(blockHitDetection([1000, 490], [450, 480])).toEqual(false)
    })
    it("should return false if the player's X is within the block, but not the Y", () => {
      expect(blockHitDetection([460, 1000], [450, 480])).toEqual(false)
      expect(blockHitDetection([460, 0], [450, 480])).toEqual(false)
    })
  })
})
