import iconAngket from "../../assets/img/icon/angket.png";
import iconExcel from "../../assets/img/icon/excel_electro.png";
import iconLatihan from "../../assets/img/icon/latihan.png";
import iconMateri from "../../assets/img/icon/materi.png";
import iconPetaKonsep from "../../assets/img/icon/peta_konsep.png";
import iconPeriodik from "../../assets/img/icon/tabel_periodik.png";
import iconTentang from "../../assets/img/icon/tentang_kami.png";
import iconTutorial from "../../assets/img/icon/tutorial.png";
import logo from "../../assets/img/logo/logo.png";
import logoWhite from "../../assets/img/logo/logo_putih.png";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="item">
        <div className="icon">
          <img src={iconPetaKonsep} alt="logo brand" />
        </div>
        <h4>Peta Konsep</h4>
      </div>
      <div className="item active">
        <div className="icon">
          <img src={iconPeriodik} alt="logo brand" />
        </div>
        <h4>Tabel Periodik</h4>
      </div>
      <div className="item">
        <div className="icon">
          <img src={iconMateri} alt="logo brand" />
        </div>
        <h4>Materi</h4>
      </div>
      <div className="item">
        <div className="icon">
          <img src={iconExcel} alt="logo brand" />
        </div>
        <h4>Excel</h4>
      </div>
      <div className="item">
        <div className="icon">
          <img src={iconTutorial} alt="logo brand" />
        </div>
        <h4>Tutorial</h4>
      </div>
      <div className="item">
        <div className="icon">
          <img src={iconLatihan} alt="logo brand" />
        </div>
        <h4>Latihan</h4>
      </div>
      <div className="item">
        <div className="icon">
          <img src={iconTentang} alt="logo brand" />
        </div>
        <h4>Angket</h4>
      </div>
      <div className="item">
        <div className="icon">
          <img src={iconAngket} alt="logo brand" />
        </div>
        <h4>Tentang</h4>
      </div>
      <div className="item logout">
        <div className="icon">
          <IoMdLogOut />
        </div>
        <h4>Logout</h4>
      </div>
    </div>
  );
};

export default Sidebar;
