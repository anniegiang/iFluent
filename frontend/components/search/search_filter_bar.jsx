import React from 'react'
import FilterSection from './filter_section';
import SearchTeacher from './search_teacher';

class SearchFilterBar extends React.Component {

    render() {
        return (
            <div className="filter-bar" style={{top: "70px"}}>
                <FilterSection tag="From" />
                <FilterSection tag="Also speaks" />
                <FilterSection tag="Price" />
                <FilterSection tag="Availability" />
                <FilterSection tag="Native speaker" />
                <SearchTeacher />
            </div>
        )
    }
};

export default SearchFilterBar;