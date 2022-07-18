import create from 'zustand';
// import { configurePersist } from 'zustand-persist';
import { persist } from 'zustand/middleware';

// const { persist, purge } = configurePersist({
//   storage: localStorage,
// });
// --- Zustand persistent store for outfit list ---
const useOutfitListStore = create(
  persist(
    (set) => ({
      outfits: [],
      addOutfit: (newOutfit) => {
        set((state) => ({
          outfits: [
            newOutfit,
            ...state.outfits,
          ],
        }));
      },
      removeOutfit: (outfit) => {
        set((state) => ({
          outfits: state.outfits.filter((item) => item.id !== outfit.id),
        }));
      },
    }),
    {
      name: 'user-outfits',
    },
  ),
);

export default useOutfitListStore;
