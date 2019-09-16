import React from 'react';

class TeacherLeftCard extends React.Component {

    render() {
        return (
            <div className="teacher-card-left">
                <div className="teacher-card-detail-top">
                    <div className="teacher-card-avatar">
                        <div className="avatar avatar-big avatar-shadow avatar-placeholder" url="T063017470">
                            <img src={this.props.teacher.profilePicture} alt="Avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherLeftCard;


