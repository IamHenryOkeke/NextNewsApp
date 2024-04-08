import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { NewsProp } from './types/types'

interface StoreState{
  data: NewsProp[],
  setData: (data: NewsProp[]) => void
}


export const useStore = create<StoreState>()(
  devtools(persist(
    (set) => ({
      data: [],
      setData: (data) => set({ data: data }),
    }),
    {
      name: 'feedData'
    },
  ),)
)