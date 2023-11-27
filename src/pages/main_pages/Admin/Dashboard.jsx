import React from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import { IoMdLogOut } from "react-icons/io";

const Dashboard = () => {
  return (
    <div>
      <HeadingContent title="Admin - Dashboard" showAuthor={false} />

      <div className="main-content">
        <div className="dashboard-wrap">
          <div className="dashboard-item">
            <div className="icon">
              <IoMdLogOut />
            </div>
            <div className="info">
              <span>Total User</span>
              <h1>30</h1>
            </div>
          </div>
          <div className="dashboard-item">
            <div className="icon">
              <IoMdLogOut />
            </div>
            <div className="info">
              <span>Total User</span>
              <h1>30</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
