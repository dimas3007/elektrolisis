import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHelpCircle, IoMdLogOut } from "react-icons/io";
import logo from "../../assets/img/logo/logo.png";
import iconTentang from "../../assets/img/icon/tentang_kami.png";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { deleteUser } from "../../store/UsersSlice";

import { useSelector, useDispatch } from "react-redux";

const HeaderLanding = ({ openModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.usersArray);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(deleteUser());
        navigate("/masuk");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        dispatch(deleteUser());
      });
  };

  return (
    <header className="header-top">
      <div className="brand">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="action">
        {Object.entries(users)?.length ? (
          <>
            <div className="author header">
              <div className="user-img">
                <img src={iconTentang} alt="user foto" />
              </div>
              <div className="user-info">
                <h3>{users.email}</h3>
              </div>
            </div>
            <button className="btn-red logout" onClick={handleLogout}>
              <IoMdLogOut />
              <p>Keluar</p>
            </button>
          </>
        ) : (
          <>
            <Link to={"/masuk"}>
              <button className="btn-secondary">Masuk</button>
            </Link>
            <Link to={"/daftar"}>
              <button className="btn-primary">Daftar sekarang</button>
            </Link>
          </>
        )}
        <button className="btn-yellow" onClick={openModal}>
          <IoIosHelpCircle />
        </button>
      </div>
    </header>
  );
};

export default HeaderLanding;
