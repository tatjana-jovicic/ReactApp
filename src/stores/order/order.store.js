import { create } from "zustand";

export const useOrderStore = create((set) => ({
  countItem: 0,
  countPrice: 0,
  order: [],
  addItemToCart: (AddItem) =>
    set((state) => ({
      order: [...state.order, AddItem],
      countItem: state.countItem + 1,
      countPrice: state.countPrice + AddItem.price,
    })),
  countPriceItems: (item) =>
    set((state) => ({
      countPrice: state.countPrice + item,
    })),
  clearOrder: () => set({ order: [], countItem: 0, countPrice: 0 }),
  deleteItem: (id) =>
    set((state) => ({
      order: state.order.filter((item) => item.id !== id),
      countItem: state.order.length - 1,
      countPrice:
        state.countPrice - state.order.find((item) => item.id === id).price,
    })),
}));
