import axois from "./api";
// import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Set default headers

const token = localStorage.getItem("token");

axois.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// user Account

// user registration
export async function registration(pdata) {
  try {
    const { data } = await axois.post("/signup", pdata);
    return Promise.resolve(data);
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 422) {
        return { error: data };
      }

      return { error: data };
    } else if (error.request) {
      return { error: "No Response Received" };
    } else {
      return { error: error.message };
    }
  }
}

// user login
export async function loginPoint(userdata) {
  try {
    const { data } = await axois.post("/signin", userdata);
    return Promise.resolve(data);
  } catch (error) {
    return error;
  }
}

// user data get from token
export async function getUsername() {
  const token = localStorage.getItem("token");

  const decoded = jwtDecode(token);
  return decoded;
}

// get student
export async function getStudent() {
  const { data } = await axois.get("/");
  return data;
}

export async function addProduct(pdata) {
  // console.log(pdata);
  const { data } = await axois.post("/productAdd", pdata);
  return data;
}

export async function productDelete(deleteId) {
  const data = await axois.delete(`/${deleteId}`);
  return data;
}

export async function productUpdate(updatedData) {
  const data = await axois.put("/updateProduct", updatedData);

  return data;
}
