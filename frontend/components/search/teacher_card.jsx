import React from 'react';
import TeacherLeftCard from './teacher_left_card';
import TeacherRightCard from './teacher_right_card';

class TeacherCard extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        const id = e.currentTarget.id;
        this.props.history.push(`/teachers/${id}/${this.props.language}`)
    }

    render() {
        return (
            <div className="teacher-card" id={this.props.teacherId} onClick={this.handleClick}>
                <TeacherLeftCard language={this.props.language} teacher={this.props.teacher} />
                <TeacherRightCard language={this.props.language} teacher={this.props.teacher} />
            </div>
        )
    }
}

export default TeacherCard;
