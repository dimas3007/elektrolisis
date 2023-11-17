import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Back = ({ page, url }) => {
  return (
    <Link to={url} className="back">
      <FaArrowLeft />
      Halaman {page}
    </Link>
  );
};

export default Back;
