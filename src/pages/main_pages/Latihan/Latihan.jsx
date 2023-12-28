import React from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import LatihanImg1 from "../../../assets/img/icon/latihan (1).png";
import LatihanImg2 from "../../../assets/img/icon/latihan (2).png";
import { Link } from "react-router-dom";

const Latihan = () => {
  return (
    <div>
      <HeadingContent title="Latihan" />

      <div className="main-content">
        <div className="latihan-wrapper">
          <Link to={"/latihan/tts"} className="latihan-item">
            <div className="img">
              <img src={LatihanImg1} alt="" />
            </div>
            <h1>Teka Teki Silang</h1>
          </Link>
          <Link to={"/latihan/pengantar-soal"} className="latihan-item">
            <div className="img">
              <img src={LatihanImg2} alt="" />
            </div>
            <h1>Latihan Soal</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Latihan;
