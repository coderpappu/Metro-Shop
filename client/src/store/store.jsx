import { create } from "zustand";

const ProductStore = create((set) => ({
  addProduct: (data) => {
    set((state) => ({
      product: data,
    }));
  },
  auth: {
    token: "",
  },
  setAuth: (data) =>
    set((state) => ({
      auth: { ...state.auth, token: data },
    })),
}));

export { ProductStore };
