import React from "react";
import { Link } from "react-router-dom";
import { IoIosHelpCircle } from "react-icons/io";
import logo from "../../assets/img/logo/logo.png";

const HeaderLanding = ({ openModal }) => {
  return (
    <header className="header-top">
      <div className="brand">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="action">
        <Link to={"/masuk"}>
          <button className="btn-secondary">Masuk</button>
        </Link>
        <Link to={"/daftar"}>
          <button className="btn-primary">Daftar sekarang</button>
        </Link>
        <button className="btn-yellow" onClick={openModal}>
          <IoIosHelpCircle />
        </button>
      </div>
    </header>
  );
};

export default HeaderLanding;
