import axios from "../../halper/api";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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
