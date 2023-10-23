import React, { useState } from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import { BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import angketData from "../../../data/angket.json";

const Angket = () => {
  const [dataAngket, setDataAngket] = useState(angketData.angketData);

  return (
    <div>
      <HeadingContent title="Angket" />

      <div className="main-content">
        <div className="content-description">
          <h2>Angket</h2>
        </div>
        <div className="content-part">
          <div className="part-wrapper vertical">
            {dataAngket.map((angket, key) => (
              <Link
                to={`/angket/content/${angket.link}`}
                className="part-item"
                key={key}
              >
                <BsFillCircleFill className="icon-sm" />
                <h4>
                  <span
                    dangerouslySetInnerHTML={{ __html: angket.name }}
                  ></span>
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Angket;
