import React from "react";
import { useState } from "react";
import { registration } from "../halper/halper";
const singup = () => {
  const initialData = {
    name: "",
    username: "",
    email: "",
    password: "",
    profile: "",
  };

  const [input, setInput] = useState(initialData);

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlerImgInput = async (e) => {
    let base64 = await convertTobase64(e.target.files[0]);
    setInput({
      ...input,
      [e.target.name]: base64,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let signResp = await registration(input);
    if (signResp.error) {
      console.log("SignUp Error : ", signResp.error);
    } else {
      console.log("SignUp Successful!");
    }
  };
  return (
    <div>
      <h1>Registration Form </h1>
      <div>
        <form onSubmit={submitHandler}>
          <label>Name </label>
          <input
            type="text"
            placeholder="Enter Your  Name "
            name="name"
            onChange={handleInput}
          />
          <br />
          <br />

          <label>username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Your username"
            onChange={handleInput}
          />
          <br />
          <br />

          <label>email </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your email "
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

          <br />
          <label htmlFor="">Profile</label>
          <input
            type="file"
            name="profile"
            accept=".png , .jpg, .jpeg"
            onChange={handlerImgInput}
          />

          <button type="submit">Registration </button>
        </form>
      </div>
    </div>
  );
};

export default singup;

function convertTobase64(file) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
