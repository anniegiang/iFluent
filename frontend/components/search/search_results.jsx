import React from 'react';
import SearchFilterBar from './search_filter_bar';
import TeacherCard from './teacher_card';


class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    componentDidMount() {
        this.props.fetchAllTeachersByLanguage(this.props.match.params.languageName);
    }

    render() {
        return (
            <div className="flex-container">
                <div style={{position: "static", zIndex: "inherit"}}>
                    <div className="teachers-list">
                        
                        <div className="teachers-filter">
                            <div className="teach-language" style={{top: "0px"}}>
                                <p className="teach-language-choice">
                                    <span id="language-to-learn">{this.props.match.params.languageName}</span>
                                    <span className="arrow-down"></span>
                                </p>
                                <SearchFilterBar />
                            </div>
                        </div>
                        
                        <div className="teachers">
                            <p className="teachers-result" id="found-teacher-count"><span>1 teacher found</span></p>
                            {this.props.teachers.map(teacher => 
                                <TeacherCard 
                                key={teacher.id} 
                                teacher={teacher}
                                language={this.props.match.params.languageName}
                            />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SearchResults;



