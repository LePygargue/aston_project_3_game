// /frontend/src/layouts/MainLayout.js
import React from "react";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
