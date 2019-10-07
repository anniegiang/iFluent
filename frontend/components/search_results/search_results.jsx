import React from "react";
import LandingNavBar from "../navbar/landing_navbar_container";
class SearchResults extends React.Component {
  componentDidMount() {
    this.props.fetchAllTeachersByLanguage(this.props.match.params.languageName);
  }

  render() {
    return (
      <div className="search-results-container">
        <LandingNavBar />
        {this.props.teachers.map(teacher => (
          <p>{teacher.name}</p>
        ))}
      </div>
    );
  }
}

export default SearchResults;
