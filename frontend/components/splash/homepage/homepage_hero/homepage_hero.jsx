import React from "react";
import HomePageHeroMenuContainer from "./homepage_hero_menu_container";

class HomePageHero extends React.Component {
  constructor(props) {
    super(props);

    this.handleDownArrow = this.handleDownArrow.bind(this);
  }

  handleDownArrow(e) {
    window.scrollTo({
      top: 777,
      left: 777,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="homepage-hero">
        <div className="homepage-hero_video">
          <video
            autoPlay
            loop
            poster="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/hero-img.5353d1d3.jpg"
            src={window.splashVideo}
            type="video/mp4"
          ></video>
          <div className="homepage-hero_background"></div>
          <div className="homepage-hero_video-triangle"></div>
          <div
            onClick={this.handleDownArrow.bind(this)}
            className="homepage-hero_downarrow"
          ></div>
        </div>

        <div className="homepage-hero_fluent">
          <h1>BECOME FLUENT IN ANY LANGUAGE</h1>
          <p>
            Choose from over 10,000 teachers for 1-on-1 lessons based on your
            goals and interests.
          </p>
          <HomePageHeroMenuContainer />
        </div>
      </div>
    );
  }
}

export default HomePageHero;