import React from 'react';
import TeacherMain from './teacher_main';
import TeacherRight from './teacher_right';


class TeacherProfile extends React.Component {

    componentDidMount() {
        this.props.fetchTeacher(parseInt(this.props.match.params.teacherId));
        this.props.fetchLessons(parseInt(this.props.match.params.teacherId));
    }

    render() {
        if (!this.props.teacher || !this.props.lessons) {
            return null
        }
        return (
            <div className="flex-container">
                <div style={{position: "static", zIndex: "inherit"}}>
                    <div className="Teacher">
                        <TeacherMain lessons={this.props.lessons} teacher={this.props.teacher} />
                        <TeacherRight teacher={this.props.teacher} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherProfile;
