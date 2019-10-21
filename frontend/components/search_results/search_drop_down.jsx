import React from "react";
import DropDownItem from "./drop_down_item";

class SearchDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllLanguages();
  }

  handleClick(e) {
    this.props.closeModal();
    location.reload();
  }

  render() {
    if (!this.props.languages) {
      return null;
    }
    const { languages } = this.props;
    return (
      <div className="menu teach-menu">
        <div
          className="menu-items menu-items-down"
          style={{
            overflowY: "hidden"
          }}
        >
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            <div className="menu-group">
              <h1 className="menu-group-name">POPULAR LANGUAGES</h1>
              <div className="session-form-close">
                <img
                  src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/cross_icon.ad79cc7a.svg"
                  alt="close"
                  onClick={this.props.closeModal}
                />
              </div>
              {languages.map(language => (
                <DropDownItem
                  key={language.id}
                  closeModal={this.handleClick}
                  language={language.language}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDropDown;
