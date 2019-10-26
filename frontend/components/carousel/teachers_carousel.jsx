import React from "react";
import AliceCarousel from "react-alice-carousel";

const TeachersCarousel = () => {
  const handleOnDragStart = e => e.preventDefault();
  return (
    <AliceCarousel mouseDragEnabled>
      <img
        src="/img1"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src="/img2"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src="/img3"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src="/img4"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
      <img
        src="/img5"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
      />
    </AliceCarousel>
  );
};

export default TeachersCarousel;
