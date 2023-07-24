'use client'
import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
  const media = window.matchMedia(query)
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    else if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, media.matches, query])
  return matches
}
export default useMediaQuery
