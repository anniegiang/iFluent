import React from 'react';

class TeacherRightCard extends React.Component {
    render() {
        return (
            <div className="teacher-card-right">
                <div className="teacher-card-tab-head">
                    <div className="teacher-card-tabs">
                        <div className="teacher-card-tab">
                            <p><span>Video</span></p>
                        </div>
                        <div className="teacher-card-tab">
                            <p><span>Intro</span></p>
                        </div>
                        <div className="teacher-card-tab">
                            <p><span>Calendar</span></p>
                        </div>
                    </div>
                </div>
                <div className="teacher-card-tab-body">
                    <div className="teacher-card-video">
                        <div className="iframe-video">
                            <div className="video-player">
                                <img src={this.props.teacher.videoUrl} alt=""/>
                                {/* <img src="https://i.imgflip.com/15a5s4.jpg" alt=""/> */}
                                <iframe 
                                    title="video" 
                                    width="343" 
                                    height="193" 
                                    src={this.props.teacher.videoUrl}
                                    frameBorder="0" 
                                    // allow="autoplay" 
                                    allowFullScreen="" 
                                    style={{display: "block"}}
                                ></iframe>

                                <div className="video-poster-overlay">
                                    <i className="video-play-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default TeacherRightCard;


