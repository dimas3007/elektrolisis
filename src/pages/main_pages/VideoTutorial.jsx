import iconTentang from "../../assets/img/icon/tentang_kami.png";
import {
  BsFillCalendarWeekFill,
  BsFillPlayFill,
  BsCollectionPlay,
} from "react-icons/bs";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiSolidCloudDownload } from "react-icons/bi";
import HeadingContent from "../../layouts/components/HeadingContent";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import ExcelFoto from "../../assets/img/content/excel_screenshot.png";
import TutorialVideo from "../../assets/video/tutorial.mp4";

const VideoTutorial = () => {
  const handleMateriButton = (to) => {
    let video = document.getElementById("tutorial_video");
  };
  return (
    <div>
      <HeadingContent
        icon={iconTentang}
        title={
          <>
            Video <i>Tutorial</i>
          </>
        }
      />

      <div className="overview">
        <img src={ExcelFoto} alt="excel screenshot" />
      </div>

      <div className="overview stack">
        <video id="tutorial_video" controls>
          <source src={TutorialVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
            <div className="info">
              <div className="icon-img yellow">
                <BiSolidCloudDownload />
              </div>
              <p>Unduh Video</p>
            </div>
          </div>
        </div>
        <div className="content-wrapp-grid">
          <div className="content-description">
            <h2>
              Bagaimana Cara Menggunakan <i>Excel</i> Elektrolisis Interaktif?
            </h2>
            <p>
              Excel elektrolisis berisi penggambaran dari proses sel
              elektrolisis menggunakan media pembelajaran digital excel.
              Penjelasan cara penggunaan media interaktif ini akan dijelaskan
              dengan menggunakan video tutorial di atas. Kalian dapat
              menggunakan shortcut di bawah untuk langsung menonton topik-topik
              yang belum dipahami cara penggunaannya <FaRegFaceSmileWink />
            </p>
          </div>
          <div className="content-part">
            <div className="part-header">
              <h2>Konten Video</h2>
              <BsCollectionPlay />
            </div>
            <p>
              klik pada salah satu konten video dibawah ini untuk melihat video
              materi terkait.
            </p>
            <div className="part-wrapper">
              <div className="part-item">
                <BsFillPlayFill />
                <h4>Standar Kompetensi</h4>
              </div>
              <div className="part-item">
                <BsFillPlayFill />
                <h4>Kompetensi Dasar</h4>
              </div>
              <div className="part-item">
                <BsFillPlayFill />
                <h4>Indikator</h4>
              </div>
              <div className="part-item">
                <BsFillPlayFill />
                <h4>Tujuan Eksperimen</h4>
              </div>
              <div className="part-item">
                <BsFillPlayFill />
                <h4>Alat dan Bahan</h4>
              </div>
              <div className="part-item">
                <BsFillPlayFill />
                <h4>Video</h4>
              </div>
              <div className="part-item">
                <BsFillPlayFill />
                <h4>Elektrolisis Interaktif</h4>
              </div>
              <div className="part-item">
                <BsFillPlayFill />
                <h4>Stoikiometri</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorial;
