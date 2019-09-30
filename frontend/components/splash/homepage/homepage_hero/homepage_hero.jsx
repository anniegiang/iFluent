import React from "react";
import HomePageHeroMenu from "./homepage_hero_menu";
class HomePageHero extends React.Component {
  render() {
    return (
      <div className="homepage-hero">
        <div className="homepage-hero_video">
          <video
            loop=""
            playsInline=""
            autoPlay=""
            poster="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/hero-img.5353d1d3.jpg"
            src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/homepagevideo_short_version2.98c5bfce.mp4"
          ></video>
          <div className="homepage-hero_background"></div>
        </div>

        <div className="homepage-hero_fluent">
          <h1>BECOME FLUENT IN ANY LANGUAGE</h1>
          <p>
            Choose from over 10,000 teachers for 1-on-1 lessons based on your
            goals and interests.
          </p>
          <HomePageHeroMenu />
        </div>
      </div>
    );
  }
}

export default HomePageHero;
