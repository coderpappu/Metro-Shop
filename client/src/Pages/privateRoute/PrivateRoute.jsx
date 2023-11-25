import axios from "../../halper/api";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/store";

const PrivateRoute = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // user details get from store
  // const tokenData = ProductStore((state) => state.tokenData);
  // const authStore = useProductStore();
  const dataList = useProductStore((state) => state.auth.dataList);

  console.log(dataList);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await axios.get("/user-auth");

        if (response?.data === "Ok") {
          setStatus(true);
        } else {
          setStatus(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    if (token) {
      authCheck();
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  if (status) {
    return <Outlet />;
  }
};

export default PrivateRoute;
