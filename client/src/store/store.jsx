import { create } from "zustand";

const useProductStore = create((set) => ({
  // addProduct: (data) => {
  //   set((state) => ({
  //     product: data,
  //   }));
  // },
  auth: {
    token: "",
    dataList: [], // Assuming you have an array in the auth object
  },
  // setAuth: (data) =>
  //   set(
  //     (state) => (
  //       console.log(data),
  //       {
  //         auth: { ...state.auth, token: data },
  //         token: data,
  //       }
  //     )
  //   ),

  setAuth: (data) =>
    set((state) => ({
      auth: {
        ...state.auth,
        dataList: [...state.auth.dataList, data], // Pushing data into the array
      },
    })),
}));

export { useProductStore };
