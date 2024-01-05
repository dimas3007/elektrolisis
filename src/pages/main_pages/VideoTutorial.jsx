import iconTentang from "../../assets/img/icon/tentang_kami.png";
import {
  BsFillCalendarWeekFill,
  BsFillPlayFill,
  BsCollectionPlay,
} from "react-icons/bs";
import { AiFillEye, AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { BiSolidCloudDownload } from "react-icons/bi";
import HeadingContent from "../../layouts/components/HeadingContent";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import ExcelFoto from "../../assets/img/content/excel_screenshot.png";
import TutorialVideo from "../../assets/video/tutorial.mp4";
import { downloadVideo } from "../../helper/helper";

import { useDispatch, useSelector } from "react-redux";
import { addViewToFirestore, fetchViews } from "../../store/ViewsSlice";
import {
  addDownloadToFirestore,
  fetchDownloads,
} from "../../store/DownloadsSlice";
import {
  addLikeToFirestore,
  fetchLikes,
  getCurrentUserLike,
} from "../../store/LikesSlice";

import Comment from "../../layouts/components/Comment";
import { useEffect, useState } from "react";

const KONTEN_VIDEO = [
  {
    name: "Standar Kompetensi",
    video: 70,
  },
  {
    name: "Kompetensi Dasar",
    video: 105,
  },
  {
    name: "Indikator",
    video: 113,
  },
  {
    name: "Tujuan Eksperimen",
    video: 133,
  },
  {
    name: "Alat dan Bahan",
    video: 154,
  },
  {
    name: "Video",
    video: 175,
  },
  {
    name: "Elektrolisis Interaktif",
    video: 203,
  },
  {
    name: "Stoikiometri",
    video: 231,
  },
];

const VideoTutorial = () => {
  const [page, setPage] = useState("video-tutorial");
  const [data, setData] = useState({});

  const users = useSelector((state) => state.users.usersArray);
  const liked = useSelector((state) => state.likes.likesUser);

  let totalViews = useSelector((state) => state.views.viewsArray);
  let totalDownloads = useSelector((state) => state.downloads.downloadsArray);
  let totalLikes = useSelector((state) => state.likes.likesArray);

  const handleMateriButton = (to) => {
    let video = document.getElementById("tutorial_video");

    video.currentTime = to;
    video.play();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const newData = {
      page,
      user: users.email,
      user_id: users.uid,
    };

    setData(newData);
    dispatch(getCurrentUserLike(newData));
    dispatch(addViewToFirestore(data));

    dispatch(fetchViews(page));
    dispatch(fetchDownloads(page));
    dispatch(fetchLikes(page));
  }, [dispatch]);

  const handleLike = () => {
    dispatch(addLikeToFirestore(data));
    dispatch(fetchLikes(page));
    dispatch(getCurrentUserLike(data));
  };

  const handleDownload = () => {
    downloadVideo(TutorialVideo);
    dispatch(addDownloadToFirestore(data));
    dispatch(fetchDownloads(page));
  };

  const handleDownloadExcel = () => {
    const fileName = "/elektrolisis.xlsx"; // Ganti 'nama_file.xlsx' dengan nama file Excel Anda

    fetch(fileName)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "ELEKTROLISIS_5_1_2024.xlsx";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });

    dispatch(addDownloadToFirestore(data));
    dispatch(fetchDownloads(page));
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
            <p>Selasa, 21 November 2023</p>
          </div>
          <div className="right">
            <div className="info">
              <div className="icon-img green">
                <AiFillEye />
              </div>
              <p>{totalViews.length} Dilihat</p>
            </div>
            <div className="info" onClick={handleLike}>
              <div className={`icon-img red ${liked.length ? "active" : ""}`}>
                <AiFillHeart />
              </div>
              <p>{totalLikes.length} Suka</p>
            </div>
            <div className="info" onClick={handleDownload}>
              <div className="icon-img yellow">
                <BiSolidCloudDownload />
              </div>
              <p>Unduh Video - {totalDownloads.length} pengunduh</p>
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
              {KONTEN_VIDEO.map((konten, key) => (
                <div
                  className="part-item"
                  onClick={() => handleMateriButton(konten.video)}
                  key={key}
                >
                  <BsFillPlayFill />
                  <h4>{konten.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="content-footer">
          <div className="cta">
            <button className="btn-yellow" onClick={handleDownloadExcel}>
              <BiSolidCloudDownload />
              Unduh file excel
            </button>
          </div>
        </div>

        <Comment page={page} />
      </div>
    </div>
  );
};

export default VideoTutorial;
