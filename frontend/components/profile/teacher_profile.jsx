import React from 'react';
import TeacherMain from './teacher_main';
import TeacherRight from './teacher_right';


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
                <div style={{position: "static", zIndex: "inherit"}}>
                    <div className="Teacher">
                        <TeacherMain />
                        <TeacherRight />
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherProfile;
