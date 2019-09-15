import React from 'react';
import Splash from '../splash/splash';
import SearchBarContainer from '../search/search_bar_container';

const HomePageHero = props => {

    return (
        <div className="homepage-hero">
            <Splash />
            <div className="homepage-fluent">
                <h1><span>BECOME FLUENT IN ANY LANGUAGE</span></h1>
                <p><span>Choose from over 10,000 teachers for 1-on-1 lessons based on your goals and interests.</span></p>
                <SearchBarContainer />
            </div>
        </div>
    )
};

export default HomePageHero;