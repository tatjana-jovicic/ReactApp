import { create } from "zustand";

export const useOrderStore = create((set) => ({
  order: [],
  // addItemToOrderCart: (newItem) =>
  //   set((state) => ({ orders: [...state.orders, newItem] })), // Append the new item to the cart array
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
    }), // Append the new item to the cart array
  removeItemFromOrderCart: (itemId) =>
    set((state) => ({
      order: state.order.filter((item) => item.id !== itemId),
    })), // Remove the item from the cart array by filtering out the item with the given ID
  clearOrderCart: () => set({ order: [] }),
}));
