import React from 'react';

class TeacherLeftCard extends React.Component {

    
    render() {
        const { 
            country, 
            about_me, 
            title, 
            video_url, 
            hourly_rate, 
            trial_rate, 
            work_experience, 
            education, 
            certificates, 
            name, 
            profilePicture 
        } = this.props.teacher;

        return (
            <div className="teacher-card-left">
                <div className="teacher-card-detail-top">
                    <div className="teacher-card-avatar">
                        <div className="avatar avatar-big avatar-shadow avatar-placeholder" url="T063017470">
                            <img src={profilePicture} alt="Avatar"/>
                        </div>
                    </div>
                    <div className="teacher-card-information">
                        <h1>{name}</h1>
                        <i className="fas fa-globe-americas"></i>
                        <p><span>{title}</span></p>
                        <div className="teacher-card-divider"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherLeftCard;


