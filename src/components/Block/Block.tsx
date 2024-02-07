import React, { useMemo } from 'react'

import { DEFAULT_BLOCK_SIZE } from '@/models/Block/Block'

/**
 * Block is responsible for rendering a single block entity
 * @link @/models/Block/Block
 */
const Component = ({ x, y }: ComponentProps) => {
  const styles = useMemo(() => {
    return {
      ...DEFAULT_STYLES,
      transform: `translate(${x}px, ${y}px)`,
    }
  }, [x, y])
  return <div style={styles} className='bg-red-900' />
}

const DEFAULT_STYLES = {
  height: `${DEFAULT_BLOCK_SIZE}px`,
  width: `${DEFAULT_BLOCK_SIZE}px`,
} as const

Component.displayName = 'Block'

interface ComponentProps {
  x: number
  y: number
}

export { Component as Block }
