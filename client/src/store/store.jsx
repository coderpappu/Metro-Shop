import { create } from "zustand";

const ProductStore = create((set) => ({
  product: ["hi"],
  addProduct: (data) => {
    set((state) => ({
      product: data,
    }));
  },
}));

export { ProductStore };
