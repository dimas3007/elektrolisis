import React from "react";
import HeaderLanding from "./components/HeaderLanding";
import { Outlet } from "react-router-dom";

const LandingLayout = ({ openModal }) => {
  return (
    <>
      <HeaderLanding openModal={openModal} />
      <Outlet />
    </>
  );
};

export default LandingLayout;
