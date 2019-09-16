import React from 'react';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                {this.props.teachers.map(teacher => <h2>{teacher.country}</h2>)}
            </div>
        )
    }
};

export default SearchResults;



