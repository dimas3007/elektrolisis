import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const ContentLayout = ({ children }) => {
  return (
    <div className="content-layout">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="box-content">{children}</div>
      </div>
    </div>
  );
};

export default ContentLayout;
