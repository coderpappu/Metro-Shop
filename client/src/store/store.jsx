import { create } from "zustand";

const useProductStore = create((set) => ({
  addProduct: (data) => {
    set((state) => ({
      product: data,
    }));
  },
  auth: {
    authData: "",
  },

  setAuth: (data) =>
    set((state) => ({
      auth: {
        ...state.auth,
        authData: data,
      },
    })),
}));

export { useProductStore };
