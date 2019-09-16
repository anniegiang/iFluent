import React, { Component } from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
        this.handleDropDown = this.handleDropDown.bind(this);    
        this.getMenuItems = this.getMenuItems.bind(this);    

    }

    componentDidMount() {
        this.props.fetchAllLanguages();
    }

    getMenuItems() {
        const ul = document.createElement("ul");
        const languages = [];

        for(let language of this.props.languages) {
            let li = document.createElement("li");
            li.innerHTML = language.language;
            ul.appendChild(li);
        }
        return ul;
    }
    
    
    handleDropDown(e) {
        const menuChoice = document.querySelector(".homepage-menu-choice");
        const menuSelect = document.querySelector(".homepage-menu-select");
        const searchIcon = document.querySelector(".homepage-search-icon");
        const menuItems = this.getMenuItems();

        menuSelect.classList.add(".homepage-menu-select-open");
        searchIcon.classList.add(".homepage-search-icon-open");
        
        menuChoice.appendChild(menuItems);

        document.body.addEventListener("click", () => {
            menuSelect.classList.remove(".homepage-menu-select-open");
            searchIcon.classList.remove(".homepage-search-icon-open");
            menuChoice.parentNode.removeChild(menuItems);
        });
    }

    render() {
        return (
            <div className="homepage-menu">
                <form className="homepage-menu-choice">
                    <input 
                        className="homepage-menu-select" 
                        placeholder="Choose a language"
                        type="text"  

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