import React from 'react';
import SearchFilterBar from './search_filter_bar';
import TeacherCard from './teacher_card';


class SearchResults extends React.Component {
    constructor(props) {
        super(props)

        this.handleDownArrow = this.handleDownArrow.bind(this);
        this.handleUpArrow = this.handleUpArrow.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllTeachersByLanguage(this.props.match.params.languageName);
    }

    handleDownArrow(e) {
        const parentEl = document.querySelector("#language-to-learn");
        const downArrow = document.querySelector(".arrow-down");
        const upArrow = document.createElement("span");
        
        upArrow.classList.add("arrow-up");
        upArrow.onclick = this.handleUpArrow;

        parentEl.removeChild(downArrow);
        parentEl.appendChild(upArrow);

        this.props.openDropDown();
    }

    handleUpArrow(e) {
        const parentEl = document.querySelector("#language-to-learn");
        const upArrow = document.querySelector(".arrow-up");
        const downArrow = document.createElement("span");

        downArrow.classList.add("arrow-down");
        downArrow.onclick = this.handleDownArrow;

        parentEl.removeChild(upArrow);
        parentEl.appendChild(downArrow);
    }

    render() {
        return (
            <div className="flex-container">
                <div style={{position: "static", zIndex: "inherit"}}>
                    <div className="teachers-list">
                        
                        <div className="teachers-filter">
                            <div className="teach-language" style={{top: "0px"}}>
                                <p className="teach-language-choice">
                                    <span onClick={this.handleDownArrow} id="language-to-learn">{this.props.match.params.languageName}
                                    <span onClick={this.handleDownArrow} className="arrow-down"></span>
                                    </span>
                                </p>
                                <SearchFilterBar />
                            </div>
                        </div>
                        
                        <div className="teachers">
                            <p className="teachers-result" id="found-teacher-count">
                                <span>{this.props.teachers.length} </span>
                                {this.props.teachers.length === 0 || this.props.teachers.length > 1 ? "teachers found" : "teacher found"}
                            </p>
                            {this.props.teachers.map(teacher => 
                                <TeacherCard 
                                key={teacher.id} 
                                teacherId={teacher.id}
                                fetchTeacher={this.props.fetchTeacher}
                                history={this.props.history}
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



