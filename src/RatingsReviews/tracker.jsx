import create from 'zustand';



export const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({count: state.count + 1}))
}))