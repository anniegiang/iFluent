import React, { Component } from 'react';
import Suggestions from './suggestions';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        }
        this.handleDropDown = this.handleDropDown.bind(this);    
        this.handleInputChange = this.handleInputChange.bind(this); 
    }

    componentDidMount() {
        this.props.fetchAllLanguages();
    }
    
    
    handleDropDown(e) {
        return (
            <Suggestions languages={this.props.languages} />
        )
    }

    handleInputChange(e) {
        this.setState({ query: e.target.value }, () => {
            console.log(this.state.query)
        });
    }

    render() {
        return (
            <div className="homepage-menu">
                <h1><span>BECOME FLUENT IN ANY LANGUAGE</span></h1>
                <p><span>Choose from over 10,000 teachers for 1-on-1 lessons based on your goals and interests.</span></p>
                <form className="homepage-menu-choice">
                    <input 
                        onChange={this.handleInputChange} 
                        onClick={this.handleDropDown} 
                        className="search-input" 
                        type="text"  
                        placeholder="Choose a language"
                        />
                    <button className="search-btn">
                        <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/icon-search.5d60d25a.svg"/>
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;