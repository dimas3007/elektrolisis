import React from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import LatihanImg1 from "../../../assets/img/icon/latihan (1).PNG";
import LatihanImg2 from "../../../assets/img/icon/latihan (2).PNG";
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, eos nostrum? Cum.
            </p>
          </Link>
          <Link to={"/latihan/soal"} className="latihan-item">
            <div className="img">
              <img src={LatihanImg2} alt="" />
            </div>
            <h1>Latihan Soal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              maiores in ratione, amet labore, dolore earum sequi perspiciatis
              unde consectetur voluptates eligendi quibusdam?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Latihan;