import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const ContentLayout = ({ openModal }) => {
  return (
    <div className="content-layout">
      <Header />
      <div className="content">
        <Sidebar openModal={openModal} />
        <div className="box-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
