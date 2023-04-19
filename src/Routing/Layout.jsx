import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <h3>THis is Header Layout</h3>
      </div>
      <Outlet></Outlet>
      <div>
        <h3>THis is Foter Layout</h3>
      </div>
    </>
  );
};

export default Layout;
