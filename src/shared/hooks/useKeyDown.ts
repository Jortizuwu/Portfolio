import { useState, useEffect, useCallback } from 'react'

type TypingState = 'idle' | 'start' | 'typing'

export const useKeyDown = (active: boolean) => {
  const [typingState, setTypingState] = useState<TypingState>('idle')
  const [keyPress, setKeyPress] = useState<string>('')
  const [charTyped, setCharTyped] = useState<string>('')

  const handleKeyDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      setKeyPress(key)
      if (!active) return

      console.log(code)
      setCharTyped((prev) => prev + key)
    },
    [active]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  return {
    charTyped,
    keyPress,
    typingState,
    setTypingState
  }
}
