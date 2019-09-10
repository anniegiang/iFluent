import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <div>
                {/* <img className="homepage-video" src="assets/splash-temp.jpg"/> */}
                <video 
                    autoPlay loop
                    src="assets/homepagevideo_short_version2.98c5bfce.mp4"
                    className="homepage-video"
                    type='video/mp4'
                >
                    
                </video>

            </div>
        )
    }
}

export default Splash;