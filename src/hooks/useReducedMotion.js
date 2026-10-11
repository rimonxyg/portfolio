import { useState, useEffect } from 'react'

/**
 * Custom hook to detect if the user has requested reduced motion in their OS.
 * Respecting prefers-reduced-motion is essential for accessibility.
 */
export function useReducedMotion() {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (e) => setMatches(e.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return matches
}
