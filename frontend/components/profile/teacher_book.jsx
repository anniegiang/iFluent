import React from 'react';

class TeacherBook extends React.Component {
    

    render() {
        debugger
        return (
            <div className="teacher-book">
                <div className="bookCards">
                    <div className="bookCard-box">

                        <div className="bookCard">

                            <div className="bookCard-left">
                                <div className="bookCard-title">
                                    <span>Trial Lesson</span>
                                </div>
                            </div>

                            <div className="bookCard-right">
                                <div className="bookCard-priceNew">
                                    <span>USD {this.props.teacher.trialRate}</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="bookCard-hr"></div>
                    <div className="bookCard-box">

                        <div className="bookCard">

                            <div className="bookCard-left">
                                <div className="bookCard-title">
                                    <span>Lessons</span>
                                </div>
                            </div>

                            <div className="bookCard-right">
                                <div className="bookCard-priceNew">
                                    <span>USD {this.props.teacher.hourlyRate}</span>
                                </div>
                            </div>
                            <div className="bookCard-price-from"><span>FROM</span></div>

                        </div>

                    </div>
                    <div className="bookCard-hr"></div>
                    <button onClick={() => alert("Feature coming soon! :D")} id="schedule-lesson" type="button" className="teacher-right-booknow btn btn-standard btn-main btn-gradient">
                        <span>BOOK NOW</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default TeacherBook;
