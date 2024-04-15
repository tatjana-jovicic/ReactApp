import { create } from "zustand";

export const useAddItemToCart = create((set) => ({
  numberOfItems: 0,
  startCart: [],
  addItemtoCart: (object) =>
    set((state) => ({
      startCart: [...state.startCart, object],
      numberOfItems: state.numberOfItems + 1,
    })),
  removeOneIteminCart: () =>
    set((state) => ({
      startCart: state.startCart.slice(0, -1),
      numberOfItems: state.numberOfItems - 1,
    })),
  resetCart: () => set({ startCart: [], numberOfItems: 0 }),
}));
