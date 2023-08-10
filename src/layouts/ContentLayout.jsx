import Sidebar from "./components/sidebar";
import Header from "./components/header";

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
