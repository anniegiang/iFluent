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
      return <p className="search-total">{teachers.length} teachers found</p>;
    } else {
      <p className="search-total">{teachers.length} teacher found</p>;
    }
  }

  render() {
    const { teachers } = this.props;
    return (
      <React.Fragment>
        <LandingNavBar />
        <div className="search-results-container">
          {this.renderTotalResults()}
          {teachers.map(teacher => (
            <TeacherCard teacher={teacher} key={teacher.id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResults;
