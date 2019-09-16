import React, { Component } from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
        this.renderDropDown = this.renderDropDown.bind(this);    
        this.getMenuItems = this.getMenuItems.bind(this);    
        this.handleItemClick = this.handleItemClick.bind(this);    
    }

    componentDidMount() {
        this.props.fetchAllLanguages();
    }

    handleItemClick(e) {
        
    }

    getMenuItems() {
        const divMenuItems = document.createElement("div");
        const divMenuGroup = document.createElement("div");

        divMenuItems.classList.add("homepage-menu-items");
        divMenuGroup.classList.add("homepage-menu-group");
        
        const languages = [];

        for(let language of this.props.languages) {
            let divMenuItem = document.createElement("div");
            let span = document.createElement("span");
            divMenuItem.classList.add("homepage-menu-item");

            divMenuItem.onclick = this.handleItemClick;
            span.innerHTML = language.language;

            divMenuItem.appendChild(span);
            divMenuGroup.appendChild(divMenuItem);
        }


        divMenuItems.appendChild(divMenuGroup);
        return divMenuItems;
    }
    
    
    renderDropDown(e) {
        const menuChoice = document.querySelector(".homepage-menu-choice");
        const menuSelect = document.querySelector(".homepage-menu-select");
        const searchIcon = document.querySelector(".homepage-search-icon");
        const menuItems = this.getMenuItems();
        

        menuSelect.classList.add(".homepage-menu-select-open");
        searchIcon.classList.add(".homepage-search-icon-open");
        
        menuChoice.append(menuItems);
        menuItems.insertAdjacentHTML("afterbegin", "<h1 id='homepage-menu-items-title'>Popular languages</h1>");

        document.body.addEventListener("click", (e) => {
            menuSelect.classList.remove(".homepage-menu-select-open");
            searchIcon.classList.remove(".homepage-search-icon-open");
            menuChoice.removeChild(menuItems);
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

                        onClick={this.renderDropDown} 
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