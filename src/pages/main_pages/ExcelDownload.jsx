import iconTentang from "../../assets/img/icon/tentang_kami.png";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { AiFillEye, AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { BiSolidCloudDownload } from "react-icons/bi";
import HeadingContent from "../../layouts/components/HeadingContent";
import ExcelFoto from "../../assets/img/content/excel_screenshot.png";

const ExcelDownload = () => {
  return (
    <div className="content-wrapper">
      <HeadingContent
        icon={iconTentang}
        title={
          <>
            <i>Excel</i> Elektrolisis
          </>
        }
      />

      <div className="overview">
        <img src={ExcelFoto} alt="excel screenshot" />
      </div>

      <div className="main-content">
        <div className="content-info">
          <div className="info">
            <div className="icon-img">
              <BsFillCalendarWeekFill />
            </div>
            <p>Minggu, 13 Agustus 2023</p>
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
          </div>
        </div>
        <div className="content-description">
          <h2>
            Apa ya <i>Excel</i> Elektrolisis Interaktif itu?
          </h2>
          <p>
            Excel adalah perangkat lunak spreadsheet yang dikembangkan oleh
            Microsoft. Perangkat ini dapat dimanfaatkan penggunaanya dalam
            bidang pendidikan terutama untuk pengembangan media pembelajaran
            sehingga diciptakan media pembelajaran interaktif{" "}
            <b>“EXCEL ELEKTROLISIS”</b>. Excel elektrolisis berisi penggambaran
            dari proses sel elektrolisis yaitu larutan elektrolit (zat yang
            dapat menghantarkan listrik dalam bentuk larutan) ditempatkan di
            antara dua elektroda, yaitu sebuah katoda (elektroda negatif) dan
            sebuah anoda (elektroda positif). Ketika arus listrik dialirkan
            melalui larutan elektrolit, reaksi redoks terjadi di permukaan
            elektroda. Gambaran reaksi sel elektrolisis menggunakan excel ini
            akan sangat meningkatkan pemahaman kalian terhadap materi sel
            elektrolisis.
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
