import React from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import Back from "../../../layouts/components/Back";
import { Link } from "react-router-dom";
import exampleSoal from "../../../assets/img/latihan/example-soal.png";
import exampleSolusi from "../../../assets/img/latihan/example-solusi.png";
import exampleExcel from "../../../assets/img/latihan/example-excel.png";
import { BsQuestionCircleFill } from "react-icons/bs";

const Pengantar = () => {
  return (
    <div>
      <HeadingContent title="Latihan Soal" />
      <div className="main-content">
        <Back url={"/latihan"} page={"Latihan"} />
        <div>
          <div className="button-pengantar-latihan-wrap">
            <Link to="/latihan/soal">
              <button className="btn-green">Mulai Latihan</button>
            </Link>
          </div>
          <div className="header-example">
            <div className="part-header">
              <h2>Contoh pengerjaan latihan</h2>
              <BsQuestionCircleFill />
            </div>
            <p className="example-text">
              Sebelum memulai anda dapat melihat contoh soal beserta bagaimana
              cara untuk mencari solusi pada <i>Excel Elektrolisis</i>, sebagai
              berikut:
            </p>
          </div>
          <div className="example-soal">
            <h2>Contoh Soal:</h2>
            <img src={exampleSoal} alt="" />
          </div>
          <div className="example-soal">
            <h2>Solusi:</h2>
            <img src={exampleSolusi} alt="" />
          </div>
          <div className="example-soal">
            <h2>Solusi Pada Excel Elektrolisis:</h2>
            <img src={exampleExcel} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengantar;
