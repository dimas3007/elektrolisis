import React from "react";
import mainLogo from "../../assets/img/logo/logo_moon.png";
import iconTentang from "../../assets/img/icon/tentang_kami.png";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const users = useSelector((state) => state.users);

  return (
    <header className="header-content">
      <Link to="/">
        <div className="logo-wrapper">
          <div className="logo">
            <img src={mainLogo} alt="logo brand" />
          </div>
        </div>
      </Link>
      {users.length ? (
        <div className="user-info-wrapper">
          <div className="user-info">
            <div className="user-img">
              <img src={iconTentang} alt="user foto" />
            </div>
            <div className="user-info">
              <h3>{users[0].email}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="user-button">
          <Link to={"/masuk"}>
            <button className="btn-secondary">Masuk</button>
          </Link>
          <Link to={"/daftar"}>
            <button className="btn-primary">Daftar</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
