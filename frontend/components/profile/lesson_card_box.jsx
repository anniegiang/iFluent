import React from 'react';

const LessonCardBox = props => {


    return (
        <div className="lessonCard-bar">
            <div className="lessonCard-left">
                <div className="lessonCard-title">Trial lesson</div>
                <div className="blackbar"></div>
                <div className="lessonCard-content">
                    <span className="lesson-count-lowercase">12&nbsp;<span>Lessons</span></span>
                </div>
            </div>
            <div className="lessonCard-right">
                <span className="lessonCard-price-green"><span>USD 4.00</span></span>
            </div>
        </div>
) 
};

export default LessonCardBox;
