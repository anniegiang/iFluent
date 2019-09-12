import React from 'react';
import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
 
const TeachersCarousel = () => {
  const handleOnDragStart = e => e.preventDefault();
  const imgUrl = [
    "https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/english_UK.0b1dc079.jpg",
    "https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/spanish.32d567a0.jpg"
  ]

  return (
    <AliceCarousel mouseDragEnabled >
      <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/spanish.32d567a0.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/english_UK.0b1dc079.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>
  )
}

export default TeachersCarousel;