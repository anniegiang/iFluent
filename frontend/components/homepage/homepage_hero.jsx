import React from 'react';
import Splash from '../splash/splash';
import SearchBar from '../search/search_bar';

const HomePageHero = props => {

    return (
        <div className="homepage-hero">
            <Splash />
            <div className="homepage-fluent">
            <SearchBar />
            </div>
        </div>
    )
};

export default HomePageHero;