import React from "react";
import SidebarAdmin from "./components/SidebarAdmin";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ openModal }) => {
  return (
    <div className="content-layout">
      <Header />
      <div className="content">
        <SidebarAdmin openModal={openModal} />
        <div className="box-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
