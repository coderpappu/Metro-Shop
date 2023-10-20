import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-xl text-orange-600 font-medium">Admin Dashboard</h1>{" "}
      <br />
      <br />
      <br />
      <a href="/productAdd" className="px-5 py-3 bg-amber-700">
        Product Add
      </a>{" "}
      <br />
      <br />
      <br />
      <a href="/actionsys" className="px-5 py-3 bg-amber-700">
        All Action
      </a>
    </div>
  );
};

export default Dashboard;
