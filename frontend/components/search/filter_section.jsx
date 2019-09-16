import React from 'react';

const FilterSection = props => {

    return (
        <div className="filter-section">
            <div className="tag-filter">
                <span>{props.tag}</span>
            </div>
        </div>
    )
};

export default FilterSection;


