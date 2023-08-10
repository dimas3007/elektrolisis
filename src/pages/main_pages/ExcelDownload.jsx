import iconTentang from "../../assets/img/icon/tentang_kami.png";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { AiFillEye, AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { BiSolidCloudDownload } from "react-icons/bi";

const ExcelDownload = () => {
  return (
    <div>
      <div className="heading-content">
        <div className="author">
          <div className="user-img">
            <img src={iconTentang} alt="user foto" />
          </div>
          <div className="user-info">
            <h3>Putri Rahmasari</h3>
            <p>Mahasiswi Pendidikan Kimia USK</p>
          </div>
        </div>
        <h1 className="title">
          <i>Excel</i> Elektrolisis Interaktif
        </h1>
      </div>

      <div className="main-content">
        <div className="overview"></div>
        <div className="content-info">
          <div className="info">
            <div className="icon-img">
              <BsFillCalendarWeekFill />
            </div>
            <p>Senin, 11 November 2023</p>
          </div>
          <div className="right">
            <div className="info">
              <div className="icon-img green">
                <AiFillEye />
              </div>
              <p>100 Dilihat</p>
            </div>
            <div className="info">
              <div className="icon-img red">
                <AiFillHeart />
              </div>
              <p>100 Suka</p>
            </div>
            <div className="info">
              <div className="icon-img yellow">
                <BiSolidCloudDownload />
              </div>
              <p>Unduh Video</p>
            </div>
          </div>
        </div>
        <div className="content-description">
          <h2>
            Apa ya <i>Excel</i> Elektrolisis Interaktif itu?
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, a.
            Deserunt nihil at debitis, doloribus consectetur odit repellat quasi
            voluptates mollitia ad in sit quam voluptatem aperiam labore
            possimus laboriosam iusto nostrum a doloremque consequuntur
            temporibus similique sequi! Minima id sit qui?
          </p>
        </div>
        <div className="content-footer">
          <div className="cta">
            <button className="btn-yellow">
              <BiSolidCloudDownload />
              Unduh file excel
            </button>
            <button className="btn-primary">
              <AiFillPlayCircle />
              Lihat video tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelDownload;
