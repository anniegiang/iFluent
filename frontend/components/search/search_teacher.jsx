import React from 'react';

class SearchTeacher extends React.Component {

    render() {
        return (
            <div className="search-teacher-input">
                <div id="search_teachers_btn" className="search-teachers-input-icon">
                    <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/search.8dea3739.svg" alt="search icon" />
                </div>
                {/* <form action="search-form-hide">
                    <input id="search_teachers_skills" placeholder="Search teacher by name" value=""/>
                </form> */}
            </div>
        )
    }
}

export default SearchTeacher;