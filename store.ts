import { create } from 'zustand'
import { NewsProp } from './types/types'

interface StoreState{
  data: NewsProp[],
  setData: (data: NewsProp[]) => void
}

export const useStore = create<StoreState>((set) => ({
  data: [],
  setData: (data) => set({ data: data }),
}))
