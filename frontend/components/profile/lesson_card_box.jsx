import React from 'react';

const LessonCardBox = props => {

    const randLesson = Math.floor(Math.random() * Math.floor(200));

    return (
        <div className="lessonCard-bar">
            <div className="lessonCard-left">
                <div className="lessonCard-title">{props.lesson.title}</div>
                <div className="blackbar"></div>
                <div className="lessonCard-content">
                    <span className="lesson-count-lowercase">{randLesson}&nbsp;<span>Lessons</span></span>
                </div>
            </div>
            <div className="lessonCard-right">
                <span className="lessonCard-price-green"><span>USD {props.lesson.price}</span></span>
            </div>
        </div>
) 
};

export default LessonCardBox;
