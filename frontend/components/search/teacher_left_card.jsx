import React from 'react';

class TeacherLeftCard extends React.Component {

    
    render() {
        const { 
            name, 
            profilePicture,
            title, 
            hourlyRate, 
            trialRate, 
        } = this.props.teacher;

        // debugger
        return (
            <div className="teacher-card-left">
                <div className="teacher-card-detail-top">
                    <div className="teacher-card-avatar">
                        <div className="avatar avatar-big avatar-shadow avatar-placeholder" url="T063017470">
                            <img src={profilePicture} alt="Avatar"/>
                        </div>
                    </div>

                    <div className="teacher-card-information">
                        <h1>
                            <span>{name}</span>
                            <i className="fas fa-globe-americas"></i>
                        </h1>
                        <p><span>{title}</span></p>
                        <div className="teacher-card-divider"></div>
                        <p>Teaches</p>
                        <h2><span><span>{this.props.language}</span></span></h2>
                    </div>

                </div>
                <div className="teacher-card-detail-bottom">
                    <div className="teacher-card-rating">
                        <div className="teacher-card-stars">
                            <div className="stars-box">
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                            </div>
                        </div>
                        <p><span>243 LESSONS</span></p>
                    </div>

                    <div className="teacher-card-information">
                        <div className="teacher-card-rate">
                            <div className="teacher-card-hourly">
                                <p><span>Hourly Rate From</span></p>
                                <h2 className="teacher-price-rate">USD {hourlyRate}</h2>
                            </div>
                            <div className="teacher-card-trial">
                                <p><span>Trial</span></p>
                                <h2 className="teacher-price-rate"><span>USD {trialRate}</span></h2>
                            </div>
                        </div>

                    </div>
                </div>
                <i className="teacher-card-favorite"></i>
            </div>
        )
    }
}

export default TeacherLeftCard;


