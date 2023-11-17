import { useEffect, useState } from "react";
import HeadingContent from "../../layouts/components/HeadingContent";
import { BsFillCalendarWeekFill, BsFillCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handout1 from "../../assets/img/handout/1.png";
import handout2 from "../../assets/img/handout/2.png";
import handout3 from "../../assets/img/handout/3.png";
import handout4 from "../../assets/img/handout/4.png";
import handout5 from "../../assets/img/handout/5.png";
import handout6 from "../../assets/img/handout/6.png";
import handout7 from "../../assets/img/handout/7.png";
import handout8 from "../../assets/img/handout/8.png";
import Comment from "../../layouts/components/Comment";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiSolidCloudDownload } from "react-icons/bi";

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

const HANDOUTS = [
  handout1,
  handout2,
  handout3,
  handout4,
  handout5,
  handout6,
  handout7,
  handout8,
];

const Materi = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState("materi");

  const [data, setData] = useState({});

  const users = useSelector((state) => state.users.usersArray);
  const liked = useSelector((state) => state.likes.likesUser);

  let totalViews = useSelector((state) => state.views.viewsArray);
  let totalDownloads = useSelector((state) => state.downloads.downloadsArray);
  let totalLikes = useSelector((state) => state.likes.likesArray);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleDownload = () => {
    // Tentukan path file ZIP yang akan diunduh
    const zipFilePath = "/handout.zip";

    // Create a URL for the ZIP file
    const downloadUrl = window.location.origin + zipFilePath;

    // Create an <a> element to trigger the download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "handout.zip";

    // Append the <a> element to the document and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Remove the <a> element from the document after it's done
    document.body.removeChild(link);

    dispatch(addDownloadToFirestore(data));
    dispatch(fetchDownloads(page));
  };

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

  return (
    <div>
      <HeadingContent title="Materi" />

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
              <p>Unduh Materi - {totalDownloads.length} pengunduh</p>
            </div>
          </div>
        </div>
        <div className="handout">
          <Slider {...settings}>
            {HANDOUTS.map((handout, key) => (
              <div className="handout-item" key={key}>
                <img src={handout} alt="handout" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="d-none">
          <div className="content-description">
            <h2>Materi Elektrolisis</h2>
          </div>
          <div className="content-part">
            <div className="part-wrapper vertical">
              <div className="part-item">
                <BsFillCircleFill className="icon-sm" />
                <h4>Pengertian Sel Elektrolisis</h4>
              </div>
              <div className="part-item">
                <BsFillCircleFill className="icon-sm" />
                <h4>Susunan Sel Elektrolisis</h4>
              </div>
              <div className="part-item">
                <BsFillCircleFill className="icon-sm" />
                <h4>Reaksi-reaksi Sel Elektrolisis</h4>
              </div>
              <div className="part-item">
                <BsFillCircleFill className="icon-sm" />
                <h4>Faktor yang Memengaruhi Sel Elekrolisis</h4>
              </div>
              <div className="part-item">
                <BsFillCircleFill className="icon-sm" />
                <h4>Aspek Kuantitatif Sel Elektrolisis</h4>
              </div>
              <div className="part-item">
                <BsFillCircleFill className="icon-sm" />
                <h4>Penerapan Sel Elektrolisis</h4>
              </div>
            </div>
          </div>
        </div>

        <Comment page={page} />
      </div>
    </div>
  );
};

export default Materi;
