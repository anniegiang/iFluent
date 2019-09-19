import React from 'react';

const HomepageBottomBanner = props => {

    return (
        <div className="homepage-bottom-section visible-class">
            <div className="homepage-bottom-section-color"></div>
            <div className="homepage-bottom-section-content">
                <h1><span>Learn more than just a language</span></h1>
                <p><span>On italki it’s about mastering a timeless skill, cultivating new perspectives, and connecting with fascinating people from around the world.</span></p>
                <a href="#/teachers/English">
                    <div className="homepage-bottom-section-btn">
                        <span>GET STARTED NOW</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default HomepageBottomBanner;
