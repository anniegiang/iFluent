import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <div className="homepage-video">
                {/* <img className="homepage-video" src="assets/splash-temp.jpg"/> */}
                <video 
                    autoPlay loop
                    src="assets/homepagevideo_short_version2.98c5bfce.mp4"
                    type='video/mp4'
                >
                </video>
                <div class="homepage-background">

                </div>
            </div>
        )
    }
}

export default Splash;