import React from "react";
import Sidebar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="flex">
          {showSidebar && <Sidebar />}
          <div className="flex-1 flex flex-col">
            <NavBar />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
