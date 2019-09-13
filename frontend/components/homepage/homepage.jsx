import React from 'react';
import HomePageHero from './homepage_hero';
import HomePageTeachersSlider from './homepage_teachers_slider';
import HomePageWhyItalki from './homepage_why_italki';
import HomePageHowItWorks from './homepage_how_it_works';

const HomePage = props => {
    return (
        <div>
            
            <div className="flex-container">
                <div className="homepage">
                    <HomePageHero />
                    <HomePageTeachersSlider />
                    <HomePageWhyItalki />
                    <HomePageHowItWorks />
                </div>
        </div>
      </div>
    )
}

export default HomePage;