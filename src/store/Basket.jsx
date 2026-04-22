import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBasket = create(
  persist((set, get) => ({
    cart: [],

    addToCart: (product) => {
      const existing = get().cart.find((item) => item.id === product.id);
      if (existing) {
        set({
          cart: get().cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
        });
      } else {
        set({ cart: [...get().cart, { ...product, quantity: 1 }] });
      }
    },

    decreaseQuantity: (id) =>
      set((state) => ({
        cart: state.cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0),
      })),

    removeFromCart: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),
  })),
);

export default useBasket;
