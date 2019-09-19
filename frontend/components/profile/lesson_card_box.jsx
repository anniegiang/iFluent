import React from 'react';

class LessonCardBox extends React.Component {
    constructor(props) {
        super(props);
        this.openLesson = this.openLesson.bind(this);
    }
    
    openLesson(e) {
        console.log(e.target);
        // this.props.openLesson();
    }


    render() {
        const randLesson = Math.floor(Math.random() * Math.floor(200));
        return (
            <div onClick={this.openLesson} className="lessonCard-bar">
                <div className="lessonCard-left">
                    <div className="lessonCard-title">{this.props.lesson.title}</div>
                    <div className="blackbar"></div>
                    <div className="lessonCard-content">
                        <span className="lesson-count-lowercase">
                            {randLesson}&nbsp;<span>Lessons</span></span>
                    </div>
                </div>
                <div className="lessonCard-right">
                    <span className="lessonCard-price-green"><span>USD {this.props.lesson.price}</span></span>
                </div>
            </div>
        )
    }
};

export default LessonCardBox;
