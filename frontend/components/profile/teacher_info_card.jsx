import React from 'react';

class TeacherInfoCard extends React.Component {

    render() {
        return (
            <div className="TeacherInfoCard teacherCard-box1 TeacherInfoCard-desktop">
                <div className="Video">
                    <iframe 
                        src="https://www.youtube.com/embed/8fwCQFhjbnM?enablejsapi=1&modestbranding=1&rel=0&showinfo=0" 
                        frameBorder="0"
                        width="100%"
                        height="422"
                        title="video"
                        allowFullScreen=""
                    >
                    </iframe>
                </div>

                <div className="teacherCard">
                    <div className="teacherCard-left">
                        <div className="avatar avatar-big avatar-shadow avatar-placeholder">
                            <img src="https://imagesavatar-static01.italki.com/37T065502490_Avatar.jpg" alt="Avatar"/>
                        </div>
                        <div className="Online">
                            <span>Online</span>
                        </div>
                    </div>
                    <div className="teacherCard-body">
                        <div className="teacherCard-part1">
                            <div className="teacherCard-middle">
                                <div className="teacherCard-name">
                                    Julia
                                    {/* <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/am.a5752aba.svg" alt="AM" width="30px" height="16px" className="flag-icon"/> */}
                                </div>
                                <div className="teacherCard-personalInfo"></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )

    }
}

export default TeacherInfoCard;
