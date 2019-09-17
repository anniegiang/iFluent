import React from 'react';
import TeacherLeftCard from './teacher_left_card';
import TeacherRightCard from './teacher_right_card';

class TeacherCard extends React.Component {

    render() {
        return (
            <div className="teacher-card">
                <TeacherLeftCard language={this.props.language} teacher={this.props.teacher} />
                <TeacherRightCard language={this.props.language} teacher={this.props.teacher} />
            </div>
        )
    }
}

export default TeacherCard;
