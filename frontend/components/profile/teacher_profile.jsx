import React from 'react';

class TeacherProfile extends React.Component {

    componentDidMount() {
        this.props.fetchTeacher(parseInt(this.props.match.params.teacherId));
    }

    render() {
        if (!this.props.teacher) {
            return null
        }
        
        return (
            <div className="flex-container">

            </div>
        )
    }
}

export default TeacherProfile;
