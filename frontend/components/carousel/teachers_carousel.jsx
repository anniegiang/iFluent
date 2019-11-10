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
  static defaultProps = {
    teachers: [
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/english-UK-0b1dc079.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/uk.png",
        language: "English"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/spanish-32d567a0.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/spain.png",
        language: "Spanish"
      },
      {
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/france.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/french-87f7b7cf.jpg",
        language: "French"
      },
      {
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/japan.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/japanese-99636b79.jpg",
        language: "Japanese"
      },
      {
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/china.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/chinese-ba590708.jpg",
        language: "Chinese"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/german-8ce1eca6.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/germany.svg",
        language: "German"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/italian-c4abb062.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/italy.svg",
        language: "Italian"
      },
      {
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/russia.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/russian-c6c8acfd.jpg",
        language: "Russian"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/portuguese-e159c420.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/portuguese.png",
        language: "Portuguese"
      },
      {
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/korea.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/korean-a0d01156.jpg",
        language: "Korean"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/arabic-5d7f2efc.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/arabic.png",
        language: "Arabic"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/dutch-5e6ef5bd.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/nederland.svg",
        language: "Dutch"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/turkish-3433d42b.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/turkish.png",
        language: "Turkish"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/hebrew-faaf0b13.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/israel.svg",
        language: "Hebrew"
      },
      {
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/poland.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/polish-faad616a.jpg",
        language: "Polish"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/hindi-5c1a2b79.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/hindi.png",
        language: "Hindi"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/serbian-cae18b82.jpg",
        flag:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/countries/seberia.png",
        language: "Serbian"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/english-US-small-f573024c.jpg",
        flag: "https://www.italki.com/static/media/usa.4b11fcae.svg",
        language: "ASL"
      }
    ]
  };

  render() {
    const settings = {
      speed: 1000,
      rows: 2,
      slidesPerRow: 3,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
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
          {this.props.teachers.map((teacher, idx) => (
            <div key={idx} className="teacher-item">
              <div className=".teacher-item-pic-container">
                <a href={`#/teachers/${teacher.language}`}>
                  <img
                    className="teacher-item-pic"
                    src={teacher.img}
                    alt={teacher}
                  />
                </a>
                <div className="teacher-detail">
                  <img
                    className="teacher-flag"
                    src={teacher.flag}
                    alt={teacher.language}
                  />
                  <h2 className="teacher-detail-title">{teacher.language}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="homepage-find-your-teacher">
          <a href="#/teachers/English">
            <div className="find-your-teacher">Find your teacher</div>
          </a>
        </div>
      </div>
    );
  }
}

export default TeachersCarousel;
