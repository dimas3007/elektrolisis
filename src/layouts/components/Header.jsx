import React from "react";
import mainLogo from "../../assets/img/logo/logo_moon.png";
import iconTentang from "../../assets/img/icon/tentang_kami.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-content">
      <Link to="/">
        <div className="logo-wrapper">
          <div className="logo">
            <img src={mainLogo} alt="logo brand" />
          </div>
        </div>
      </Link>
      {/* <div className="user-button">
        <button className="btn-secondary">Register</button>
        <button className="btn-primary">Login</button>
      </div> */}
      <div className="user-info-wrapper">
        <div className="user-info">
          <div className="user-img">
            <img src={iconTentang} alt="user foto" />
          </div>
          <div className="user-info">
            <h3>Putri Rahmasari</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
