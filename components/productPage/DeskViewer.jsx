import React, { useState } from "react";
import chevron from "../../public/img/icons/chevron_down_filled.svg";

export default function DeskViewer({ images, toggle }) {
  const [viewer, setViewer] = useState(0);
  const handleSlide = (direction) => {
    if (direction === "left") {
      viewer === 0 ? setViewer(images.length - 1) : setViewer(viewer - 1);
    } else if (direction === "right") {
      viewer === images.length - 1 ? setViewer(0) : setViewer(viewer + 1);
    }
  };
  const handleCloseViewer = (e) => {
    console.log(e.target.getAttribute("class"));
    e.target.getAttribute("class") === "img-desk-viewer" ||
    e.target.getAttribute("class") === "slide-icon left" ||
    e.target.getAttribute("class") === "slide-icon right"
      ? toggle(true)
      : toggle(false);
  };
  return (
    <div onClick={handleCloseViewer} className="desk-viewer-container">
      <div className="desk-viewer-close">
        <button onClick={handleCloseViewer}>X</button>
      </div>
      <div className="desk-viewer-content">
        <img
          src={chevron}
          onClick={() => {
            handleSlide("left");
          }}
          alt=""
          className="slide-icon left"
        />
        <img
          src={images[viewer]}
          alt="img-dek-viewer"
          className="img-desk-viewer"
        />
        <img
          src={chevron}
          onClick={() => {
            handleSlide("right");
          }}
          alt=""
          className="slide-icon right"
        />
      </div>
    </div>
  );
}
