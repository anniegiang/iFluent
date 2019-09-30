import React from "react";

class HomePageHeroMenu extends React.Component {
  render() {
    return (
      <div className="homepage-hero_menu">
        <div className="homepage-hero_menu-choice">
          <input
            className="homepage-hero_menu-choice-select"
            type="text"
            placeholder="Choose a language"
          />
          <span className="homepage-hero_menu-search-icon">
            <img
              width="24px"
              height="24px"
              src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/icon-search.5d60d25a.svg"
              alt="menu-search"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default HomePageHeroMenu;
