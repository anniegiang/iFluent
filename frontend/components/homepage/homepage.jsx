import React from 'react';
import HomePageHero from './homepage_hero';
import HomePageTeachersSlider from './homepage_teachers_slider';
import HomePageWhyItalki from './homepage_why_italki';
import HomePageHowItWorks from './homepage_how_it_works';

const HomePage = props => {
    return (
        <div className="homepage">
            <HomePageHero />
            <HomePageTeachersSlider />
            <HomePageWhyItalki />
            <HomePageHowItWorks />
      </div>
    )
}

export default HomePage;