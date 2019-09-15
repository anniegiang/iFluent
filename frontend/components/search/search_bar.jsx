import React, { Component } from 'react';
import Suggestions from './suggestions';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        }
        this.handleDropDown = this.handleDropDown.bind(this);    
        // this.handleInputChange = this.handleInputChange.bind(this); 
    }

    componentDidMount() {
        this.props.fetchAllLanguages();
    }
    
    
    handleDropDown(e) {
        return (
            <Suggestions languages={this.props.languages} />
        )
    }

    // handleInputChange(e) {
    //     this.setState({ query: e.target.value }, () => {
    //         console.log(this.state.query)
    //     });
    // }

    render() {
        return (
            <div className="homepage-menu">
                <form className="homepage-menu-choice">
                    <input 
                        className="homepage-menu-select" 
                        placeholder="Choose a language"
                        type="text"  
                        // onChange={this.handleInputChange} 
                        onClick={this.handleDropDown} 
                        />
                    <span className="homepage-search-icon">
                        <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/icon-search.5d60d25a.svg" alt="search"/>
                    </span>
                </form>
                
            </div>
        )
    }
}

export default SearchBar;