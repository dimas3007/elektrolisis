import iconAngket from "../../assets/img/icon/angket.png";
import iconExcel from "../../assets/img/icon/excel_electro.png";
import iconLatihan from "../../assets/img/icon/latihan.png";
import iconMateri from "../../assets/img/icon/materi.png";
import iconPetaKonsep from "../../assets/img/icon/peta_konsep.png";
import iconPeriodik from "../../assets/img/icon/tabel_periodik.png";
import iconTentang from "../../assets/img/icon/tentang_kami.png";
import iconTutorial from "../../assets/img/icon/tutorial.png";
import { IoMdLogOut, IoIosHelpCircle } from "react-icons/io";

import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ openModal }) => {
  const location = useLocation();
  let { pathname } = location;

  return (
    <div className="sidebar">
      <Link to={"/peta-konsep"}>
        <div className={`item ${pathname == "/peta-konsep" && "active"}`}>
          <div className="icon">
            <img src={iconPetaKonsep} alt="logo brand" />
          </div>
          <h4>Mind Mapping</h4>
        </div>
      </Link>
      <Link to={"/tabel-periodik"}>
        <div className={`item ${pathname == "/tabel-periodik" && "active"}`}>
          <div className="icon">
            <img src={iconPeriodik} alt="logo brand" />
          </div>
          <h4>Tabel Periodik</h4>
        </div>
      </Link>
      <Link to={"/materi"}>
        <div className={`item ${pathname == "/materi" && "active"}`}>
          <div className="icon">
            <img src={iconMateri} alt="logo brand" />
          </div>
          <h4>Materi</h4>
        </div>
      </Link>
      <Link to={"/video-tutorial"}>
        <div className={`item ${pathname == "/video-tutorial" && "active"}`}>
          <div className="icon">
            <img src={iconTutorial} alt="logo brand" />
          </div>
          <h4>Tutorial</h4>
        </div>
      </Link>
      <Link to={"/excel-download"}>
        <div className={`item ${pathname == "/excel-download" && "active"}`}>
          <div className="icon">
            <img src={iconExcel} alt="logo brand" />
          </div>
          <h4>Materi Excel</h4>
        </div>
      </Link>
      <Link to={"/latihan"}>
        <div className={`item ${pathname == "/latihan" && "active"}`}>
          <div className="icon">
            <img src={iconLatihan} alt="logo brand" />
          </div>
          <h4>Latihan</h4>
        </div>
      </Link>
      <Link to={"/angket"}>
        <div className={`item ${pathname == "/angket" && "active"}`}>
          <div className="icon">
            <img src={iconAngket} alt="logo brand" />
          </div>
          <h4>Angket</h4>
        </div>
      </Link>
      <Link to={"/tentang"}>
        <div className={`item ${pathname == "/tentang" && "active"}`}>
          <div className="icon">
            <img src={iconTentang} alt="logo brand" />
          </div>
          <h4>Tentang</h4>
        </div>
      </Link>
      <div className="item help" onClick={openModal}>
        <div className="icon">
          <IoIosHelpCircle />
        </div>
        <h4>Petunjuk</h4>
      </div>
      <div className="item logout">
        <div className="icon logout">
          <IoMdLogOut />
        </div>
        <h4>Logout</h4>
      </div>
    </div>
  );
};

export default Sidebar;
