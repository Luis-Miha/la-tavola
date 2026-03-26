import { create } from "zustand";

const useCartStore = create((set, get) => ({
  items: [],
  isCartOpen: false,

  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    }));
  },

  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  toggleCart: () => {
    set((state) => ({ isCartOpen: !state.isCartOpen }));
  },

  openCart: () => {
    set({ isCartOpen: true });
  },

  closeCart: () => {
    set({ isCartOpen: false });
  },
}));

// Selector for item count - this is reactive
export const useCartItemCount = () =>
  useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
export const useCartItems = () => useCartStore((state) => state.items);
export const useCartTotal = () =>
  useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );

export default useCartStore;
