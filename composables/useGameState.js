import { useStorage } from '@vueuse/core'

export const useGameState = () => useStorage('words', () => Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    text: ''
  })))