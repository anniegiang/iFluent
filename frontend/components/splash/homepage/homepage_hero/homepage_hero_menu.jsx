import React from "react";

class HomePageHeroMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.renderDropDown = this.renderDropDown.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllLanguages();
  }

  handleItemClick(e) {
    const language = e.target.innerText;
    this.props
      .fetchAllTeachersByLanguage(language)
      .then(() => this.props.history.push(`/teachers/${language}`));
  }

  getMenuItems() {
    const divMenuItems = document.createElement("div");
    const divMenuGroup = document.createElement("div");

    divMenuItems.classList.add("homepage-menu-items");
    divMenuGroup.classList.add("homepage-menu-group");

    const languages = [];

    for (let language of this.props.languages) {
      let divMenuItem = document.createElement("div");
      divMenuItem.classList.add("homepage-menu-item");

      divMenuItem.onclick = this.handleItemClick;
      divMenuItem.innerHTML = language.language;

      divMenuGroup.appendChild(divMenuItem);
    }

    divMenuItems.appendChild(divMenuGroup);
    return divMenuItems;
  }

  renderDropDown(e) {
    const menu = document.querySelector(".homepage-hero_menu");
    const menuChoice = document.querySelector(".homepage-hero_menu-choice");
    const menuSelect = document.querySelector(
      ".homepage-hero_menu-choice-select"
    );
    const searchIcon = document.querySelector(
      ".homepage-hero_menu-search-icon "
    );
    const menuItems = this.getMenuItems();

    menuSelect.classList.add(".homepage-menu-select-open");
    searchIcon.classList.add(".homepage-search-icon-open");

    menu.append(menuItems);
    menuItems.insertAdjacentHTML(
      "afterbegin",
      "<h1 id='homepage-menu-items-title'>Popular languages</h1>"
    );

    document.body.addEventListener("click", e => {
      menuSelect.classList.remove(".homepage-menu-select-open");
      searchIcon.classList.remove(".homepage-search-icon-open");
      menuItems.style.display = "none";
    });
  }

  render() {
    return (
      <div className="homepage-hero_menu" onClick={this.renderDropDown}>
        <form className="homepage-hero_menu-choice">
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
        </form>
      </div>
    );
  }
}

export default HomePageHeroMenu;
