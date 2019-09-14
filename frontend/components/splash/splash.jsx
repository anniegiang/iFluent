import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <div className="homepage-video">
                <video 
                    autoPlay loop
                    // src="assets/homepagevideo_short_version2.98c5bfce.mp4"
                    poster="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/hero-img.5353d1d3.jpg"
                    src={window.splashVideo}
                    type='video/mp4'
                >
                </video>
                <div className="homepage-background">

                </div>
            </div>
        )
    }
}

export default Splash;