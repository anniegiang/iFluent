import React from 'react';
import SearchFilterBar from './search_filter_bar';


class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="flex-container">
                <div style={{position: "static", zIndex: "inherit"}}>
                    <div className="teachers-list">
                        <div className="teachers-filter">
                            <div className="teach-language" style={{top: "0px"}}>
                                <p className="teach-language-choice">
                                    <span id="language-to-learn">banana</span>
                                    <span className="arrow-down"></span>
                                </p>
                                <SearchFilterBar />
                                {this.props.teachers.map(teacher => <h2>{teacher.name}</h2>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SearchResults;



