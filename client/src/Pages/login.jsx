import React from "react";
import { useState } from "react";
import { loginPoint } from "../halper/halper";
import { useProductStore } from "../store/store";
import { useNavigate } from "react-router-dom";

const login = () => {
  const Navigate = useNavigate();

  const authStore = useProductStore((state) => state.setAuth);

  const initialData = {
    username: "",
    password: "",
  };

  const [input, setInput] = useState(initialData);

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    let { token } = await loginPoint(input);
    if (token)
      return (
        localStorage.setItem("token", token), authStore(token), Navigate("/")
      );
    else return Navigate("/login");
  };
  return (
    <div>
      login
      <form onSubmit={submitHandler}>
        <label>username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Your username"
          onChange={handleInput}
        />
        <br />
        <br />

        <label>password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your password "
          onChange={handleInput}
        />
        <br />
        <br />

        <button type="submit">Login </button>
      </form>
    </div>
  );
};

export default login;
