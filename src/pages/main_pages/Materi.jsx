import React from "react";
import HeadingContent from "../../layouts/components/HeadingContent";
import { BsFillCircleFill } from "react-icons/bs";
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

  return (
    <div>
      <HeadingContent title="Materi" />

      <div className="main-content">
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

        <Comment page="materi" />
      </div>
    </div>
  );
};

export default Materi;
