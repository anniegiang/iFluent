import React from "react";
import HomePageHeroMenuItems from "./homepage_hero_menu_items";

class HomePageHeroMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div
        className="homepage-hero_menu"
        onFocus={this.toggleMenu}
        onBlur={this.toggleMenu}
      >
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
        {this.state.menuOpen && <HomePageHeroMenuItems />}
      </div>
    );
  }
}

export default HomePageHeroMenu;
