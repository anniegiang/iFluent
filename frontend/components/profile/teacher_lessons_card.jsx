import React from 'react';
import LessonCardBox from './lesson_card_box';

class TeacherLessonsCard extends React.Component {

    render() {
        return (
            <div className="LessonsCard teacherCard-box LessonsCard-desktop">
                <div className="teacherCard-bar">
                    <h2 className="cardTitle LessonsCard-title">
                        <span className="cardTitle-flexStart">
                            <span>Lessons</span>
                        </span>
                    </h2>
                    <div className="lessonCard-box">
                        <LessonCardBox />
                    </div>
                </div>
            </div>
        )

    }
}

export default TeacherLessonsCard;