import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="next-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="prev-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

class TeachersCarousel extends Component {
  render() {
    const settings = {
      speed: 500,
      rows: 2,
      slidesPerRow: 3,
      dots: true,
      infinite: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="teachers-carousel-container">
        <h1>
          10,000+ teachers.
          <span className="anylanguage"> Any language.</span>
        </h1>
        <Slider {...settings}>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
          <div className="teacher-item">
            <img
              src="https://www.italki.com/static/media/dutch.5e6ef5bd.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default TeachersCarousel;
