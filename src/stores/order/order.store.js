import { create } from "zustand";

export const useOrderStore = create((set) => ({
  order: [],
  // addItemToOrderCart: (newItem) =>
  //   set((state) => ({ orders: [...state.orders, newItem] })),
  addItemToOrderCart: (newItem) =>
    set((state) => {
      const existingItem = state.order.find((item) => item.id === newItem.id);

      if (existingItem) {
        return {
          order: state.order.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: newItem.price,
                }
              : item
          ),
        };
      } else {
        return {
          order: [
            ...state.order,
            { ...newItem, quantity: 1, totalPrice: newItem.price },
          ],
        };
      }
    }),
  removeItemFromOrderCart: (itemId) =>
    set((state) => ({
      order: state.order.filter((item) => item.id !== itemId),
    })),
  clearOrderCart: () => set({ order: [] }),

  incrementNumberOfOrder: (itemId) =>
    set((state) => ({
      order: state.order.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
            }
          : item
      ),
    })),
  decrementNumberOfOrder: (itemId) =>
    set((state) => ({
      order: state.order.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  // decrementNumberOfOrder: (itemId) =>
  //   set((state) => ({
  //     order: state.order.map((item) =>
  //       item.id === itemId
  //         ? { ...item, quantity: Math.max(1, item.quantity - 1) }
  //         : item
  //     ),
  //   })),
}));
