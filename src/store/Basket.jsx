import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBasket = create(
  persist((set, get) => ({
    cart: [],

    addToCart: (product) =>
      set((state) => ({
        cart: [...state.cart, product],
      })),

    removeFromCart: (id) =>
      set((state) => ({
        cart: get().cart.filter((item) => item.id !== id),
      })),
  })),
);

export default useBasket;
