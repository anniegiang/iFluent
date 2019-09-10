import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <div>
                {/* <img className="homepage-video" src="assets/splash-temp.jpg"/> */}
                <video 
                    loop="" 
                    playsinline="" 
                    autoplay="" 
                    poster="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/hero-img.5353d1d3.jpg" 
                    src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/homepagevideo_short_version2.98c5bfce.mp4"
                    className="homepage-video"
                >
                    
                </video>

            </div>
        )
    }
}

export default Splash;