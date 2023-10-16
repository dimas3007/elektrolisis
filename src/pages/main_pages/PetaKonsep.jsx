import React from "react";
import HeadingContent from "../../layouts/components/HeadingContent";
import petaKonsep from "../../assets/img/content/Mind_map.png";
const PetaKonsep = () => {
  return (
    <div>
      <div>
        <HeadingContent title="Mind Mapping" />
      </div>

      <div className="main-content">
        <img src={petaKonsep} alt="" />
      </div>
    </div>
  );
};

export default PetaKonsep;
