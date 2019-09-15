import React from 'react';
import Splash from '../splash/splash';
import SearchBarContainer from '../search/search_bar_container';

const HomePageHero = props => {

    return (
        <div className="homepage-hero">
            <Splash />
            <div className="homepage-fluent">
            <SearchBarContainer />
            </div>
        </div>
    )
};

export default HomePageHero;