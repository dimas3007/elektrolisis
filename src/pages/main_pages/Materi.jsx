import React from "react";
import HeadingContent from "../../layouts/components/HeadingContent";
import { BsFillCircleFill } from "react-icons/bs";

const Materi = () => {
  return (
    <div>
      <HeadingContent title="Materi" />

      <div className="main-content">
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
    </div>
  );
};

export default Materi;
