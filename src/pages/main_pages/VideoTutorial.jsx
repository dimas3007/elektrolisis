import iconTentang from "../../assets/img/icon/tentang_kami.png";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { AiFillEye, AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { BiSolidCloudDownload } from "react-icons/bi";
import HeadingContent from "../../layouts/components/HeadingContent";

const VideoTutorial = () => {
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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gxJxK5byoKY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="main-content">
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
            Bagaimana Cara Menggunakan <i>Excel</i> Elektrolisis Interaktif?
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, a.
            Deserunt nihil at debitis, doloribus consectetur odit repellat quasi
            voluptates mollitia ad in sit quam voluptatem aperiam labore
            possimus laboriosam iusto nostrum a doloremque consequuntur
            temporibus similique sequi! Minima id sit qui?
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorial;
