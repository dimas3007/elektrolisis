import React, { useState, useEffect } from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import { useParams } from "react-router-dom";
import angketData from "../../../data/angket.json";

const AngketContent = () => {
  let { angket } = useParams();

  const [dataAngket, setDataAngket] = useState(angketData.angketData);
  const [currentAngket, setCurrentAngket] = useState();

  useEffect(() => {
    let newCurrentAngket = dataAngket.find((item) => {
      return item.link == angket;
    });

    setCurrentAngket(newCurrentAngket);

    return () => {};
  }, [angket]);

  if (!currentAngket) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeadingContent title="Angket" />

      <div className="main-content">
        <div className="content-description">
          <h2>
            {" "}
            <span
              dangerouslySetInnerHTML={{ __html: currentAngket.name }}
            ></span>
          </h2>
        </div>
        {currentAngket ? (
          <iframe
            src={currentAngket?.google_form}
            width="640"
            height="1261"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="iframe"
          >
            Memuat…
          </iframe>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AngketContent;
