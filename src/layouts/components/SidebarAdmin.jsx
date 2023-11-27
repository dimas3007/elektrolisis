import iconPeriodik from "../../assets/img/icon/tabel_periodik.png";
import iconLatihan from "../../assets/img/icon/latihan.png";
import iconTentang from "../../assets/img/icon/tentang_kami.png";

import { IoMdLogOut, IoIosHelpCircle } from "react-icons/io";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/UsersSlice";

const SidebarAdmin = ({ openModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let { pathname } = location;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(deleteUser());
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        dispatch(deleteUser());
      });
  };
  return (
    <div className="sidebar">
      <Link to={"/admin"}>
        <div className={`item ${pathname == "/admin" && "active"}`}>
          <div className="icon">
            <img src={iconPeriodik} alt="logo brand" />
          </div>
          <h4>Dashboard</h4>
        </div>
      </Link>
      <Link to={"/admin/manage-user"}>
        <div className={`item ${pathname == "/admin/manage-user" && "active"}`}>
          <div className="icon">
            <img src={iconTentang} alt="logo brand" />
          </div>
          <h4>Users</h4>
        </div>
      </Link>
      <Link to={"/admin/hasil-latihan"}>
        <div
          className={`item ${pathname == "/admin/hasil-latihan" && "active"}`}
        >
          <div className="icon">
            <img src={iconLatihan} alt="logo brand" />
          </div>
          <h4>Latihan</h4>
        </div>
      </Link>
      <div className="item help" onClick={openModal}>
        <div className="icon">
          <IoIosHelpCircle />
        </div>
        <h4>Petunjuk</h4>
      </div>
      <div className="item logout" onClick={handleLogout}>
        <div className="icon logout">
          <IoMdLogOut />
        </div>
        <h4>Logout</h4>
      </div>
    </div>
  );
};

export default SidebarAdmin;
