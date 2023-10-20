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

export async function deleteProduct(id) {
  
  const data = await axois.delete(`/${id}`);
  return data;
}
