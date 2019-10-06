import React from "react";

class SearchResults extends React.Component {
  componentDidMount() {
    this.props.fetchAllTeachersByLanguage(this.props.match.params.languageName);
  }

  render() {
    return (
      <div>
        {this.props.teachers.map(teacher => (
          <p>{teacher.name}</p>
        ))}
      </div>
    );
  }
}

export default SearchResults;
