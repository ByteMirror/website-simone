import { useCallback, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

interface UsePageTransitionOptions {
  duration?: number
}

export function usePageTransition(options: UsePageTransitionOptions = {}) {
  const { duration = 400 } = options
  const navigate = useNavigate()
  const [isExiting, setIsExiting] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  const navigateWithTransition = useCallback(
    (to: string) => {
      setIsExiting(true)

      // Wait for exit animation to complete, then navigate
      setTimeout(() => {
        navigate(to)
      }, duration)
    },
    [navigate, duration]
  )

  return {
    mainRef,
    isExiting,
    navigateWithTransition,
  }
}
