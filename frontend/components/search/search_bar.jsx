import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <h1><span>BECOME FLUENT IN ANY LANGUAGE</span></h1>
                <p><span>Choose from over 10,000 teachers for 1-on-1 lessons based on your goals and interests.</span></p>
                Search Bar <input type="text"  placeholder="Choose a language"/>
                <button>Search</button>
            </div>
        )
    }
}

export default SearchBar;