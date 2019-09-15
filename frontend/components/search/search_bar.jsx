import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchClick = this.handleSearchClick.bind(this);    
    }

    componentDidMount() {
        this.props.fetchAllLanguages();
    }
    
    handleSearchClick(e) {
        console.log(this.props.languages);
    }

    render() {
        return (
            <div className="search-container">
                <h1><span>BECOME FLUENT IN ANY LANGUAGE</span></h1>
                <p><span>Choose from over 10,000 teachers for 1-on-1 lessons based on your goals and interests.</span></p>
                <div className="searchbar">
                    <input onClick={this.handleSearchClick} className="search-input" type="text"  placeholder="Choose a language"/>
                    <button className="search-btn">
                        <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/icon-search.5d60d25a.svg"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBar;