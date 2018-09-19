import React from "react";
import "./Header.css";
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContent = () => {
  return (
    <div className="Header-content">
      <ImageThumbnail />
      <HeaderTitle />
    </div>
  );
};

export default HeaderContent;
