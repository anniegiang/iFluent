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
            <div className="homepage-how-step-2">
                <div className="homepage-how-steps">
                    <h1><span>BOOK YOUR LESSON</span></h1>
                    <p><span>Only schedule lessons at a time and date that suit you.</span></p>
                    <div className="homepage-how-works-number">2</div>
                </div>
                <Animation 
                    src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/desktop_schedule_a_lesson.bab8e4d9.mp4"
                    id="VideoLazyLoad2362"
                    className="VideoLazyLoad"
                    poster="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/desktop_schedule_a_lesson_p.40917ad0.png"
                /> 
            </div>
            <div className="homepage-how-step-1">
                <Animation 
                    src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/desktop_chat.5eaefe37.mp4"
                    id="VideoLazyLoad5485"
                    className="VideoLazyLoad"
                    poster="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/desktop_chat_p.85765402.png"
                /> 
                <div className="homepage-how-steps">
                    <h1><span>START YOUR JOURNEY</span></h1>
                    <p><span>Connect with your teacher via video chat software, and let the learning begin!</span></p>
                    <div className="homepage-how-works-number">3</div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;