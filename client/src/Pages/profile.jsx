import React from "react";
import { useState } from "react";
import { loginPoint } from "../halper/halper";
import useFetch from "../hooks/fetch.hook.jsx";

const login = () => {
  const { apiData } = useFetch();

  const initialData = {
    name: apiData?.name || "",
    username: apiData?.username || "",
    email: apiData?.email || "",
  };

  //   const [input, setInput] = useState(initialData);

  return (
    <div>
      <h1>Profile Details</h1>
      <h1>Name : {initialData.name}</h1>
      <h1>username : {initialData.username}</h1>
      <h1>Email : {initialData.email}</h1>

      <button type="submit">Logout </button>
    </div>
  );
};

export default login;
