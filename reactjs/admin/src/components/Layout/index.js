import React from "react";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />

          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
