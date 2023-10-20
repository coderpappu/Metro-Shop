import axois from "./api";

// get student
export async function getStudent() {
  const { data } = await axois.get("/");
  return data;
}

export async function addProduct(pdata) {
  const { data } = await axois.post("/productAdd", pdata);
  return data;
}

export async function productDelete(deleteId) {
  const data = await axois.delete(`/${deleteId}`);
  return data;
}
