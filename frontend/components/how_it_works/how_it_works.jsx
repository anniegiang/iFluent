import React from 'react'
import Animation from './how_it_works_animation';

const HowItWorks = props => {

    return (
        <div className="homepage-how-works-animations">
            <div className="homepage-how-step-1">
                <Animation 
                    src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/desktop_teachers_search.f2645d44.mp4"
                    id="VideoLazyLoad1359"
                    className="VideoLazyLoad"
                    poster="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/desktop_teachers_search_p.de1f5ea9.png"
                /> 
                <div className="homepage-how-steps">
                    <h1><span>Choose Your Teacher</span></h1>
                    <p><span>Watch teacher introduction videos and read reviews from other students.</span></p>
                    <div className="homepage-how-works-number">1</div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;