import { useState, useEffect, useRef } from 'react'

/**
 * usePointer hook throttled with requestAnimationFrame.
 * Tracks pointer coordinates relative to a container bounding box.
 * Automatically halts calculations when tab is hidden or element is idle.
 */
export function usePointer(containerRef, enabled = true) {
  const [coords, setCoords] = useState({ x: -1000, y: -1000, active: false })
  const frameRef = useRef(null)
  const latestMouse = useRef({ x: -1000, y: -1000, active: false })

  useEffect(() => {
    if (!enabled) return

    const container = containerRef.current
    if (!container) return

    const updateFrame = () => {
      setCoords({ ...latestMouse.current })
      frameRef.current = null
    }

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect()
      latestMouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateFrame)
      }
    }

    const handlePointerLeave = () => {
      latestMouse.current = { x: -1000, y: -1000, active: false }
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateFrame)
      }
    }

    container.addEventListener('pointermove', handlePointerMove, { passive: true })
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true })

    return () => {
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [containerRef, enabled])

  return coords
}
