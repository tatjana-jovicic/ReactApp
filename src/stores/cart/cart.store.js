import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addItemToCart: (itemToAdd) =>
    set((state) => ({
      cart: [...state.cart, itemToAdd],
    })),
  clearCart: () => set({ cart: [] }),
  deleteItem: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));
