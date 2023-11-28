import React from "react";
import { Link } from "react-router-dom";

const adminDashboard = () => {
  return (
    <div>
      <Link to="/prodadd">Product Add</Link> <br></br>
      <Link to="/actionpanel">Action Panel</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default adminDashboard;
