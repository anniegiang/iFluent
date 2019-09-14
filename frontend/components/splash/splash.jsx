import React from 'react';

class Splash extends React.Component {


    handleDownArrow(e) {
        window.scrollTo({
            top: 777,
            left: 777,
            behavior: 'smooth'
        });
    }

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
                <div className="homepage-video-triangle"></div>
                <div onClick={this.handleDownArrow.bind(this)} className="homepage-downarrow"></div>
                </div>
            </div>
        )
    }
}

export default Splash;