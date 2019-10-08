import React from "react";
import LandingNavBar from "../navbar/landing_navbar_container";
import TeacherCard from "./search_teacher_card";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.renderTotalResults = this.renderTotalResults.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTeachersByLanguage(this.props.match.params.languageName);
  }

  renderTotalResults() {
    const { teachers } = this.props;
    if (teachers.length > 1 || teachers.length === 0) {
      return (
        <p className="search-total">
          <strong>{teachers.length}</strong> teachers found
        </p>
      );
    } else {
      return (
        <p className="search-total">
          <strong>{teachers.length}</strong> teacher found
        </p>
      );
    }
  }

  render() {
    const { teachers } = this.props;
    return (
      <React.Fragment>
        <LandingNavBar />
        <div className="search-results-container">
          <div className="search-teachers-list">
            {this.renderTotalResults()}
            {teachers.map(teacher => (
              <TeacherCard
                history={this.props.history}
                language={this.props.match.params.languageName}
                teacher={teacher}
                key={teacher.id}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResults;
