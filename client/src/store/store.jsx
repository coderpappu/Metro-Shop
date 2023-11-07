import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  addCourse: (product) => {
    set((state) => ({
      products: product,
    }));
  },
}));

export { useProductsStore };
