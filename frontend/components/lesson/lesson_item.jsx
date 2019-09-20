import React from 'react';

class LessonItem extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchAllLessonsByTeacher(this.props.lesson.teacherId);
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    render() {
        const { title, description, category, price, duration } = this.props.lesson
        if (!this.props.lesson) {
            return null;
        }

        const randLesson = Math.floor(Math.random() * Math.floor(200));

        return (
            <div className="modal-container">
                <div className="modal-head">
                    <div className="modal-head-title">
                        <span>Lesson Details</span>
                    </div>
                    <div onClick={this.props.closeLesson} className="modal-close-lesson">
                        <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/cross_icon.ad79cc7a.svg" alt="close"/>
                    </div>
                </div>
                <div className="modal-body-lesson" style={{maxHeight: "617px"}}>
                    <div className="modal-flex">
                        <div className="modal-lessonDetail-title">{title}</div>
                        <div className="modal-lessonDetail-taught">{randLesson} <span>Lessons taught</span></div>
                        <div className="modal-lessonDetail-language">
                            <div className="title">
                                <span>LANGUAGE</span>
                            </div>
                            <div className="content">
                                Placeholder
                            </div>
                        </div>
                        <div className="modal-lessonDetail-category">
                            <div className="title">
                                <span>CATEGORY</span>
                            </div>
                            <div className="content">
                                {category}
                            </div>
                        </div>
                        <div className="modal-lessonDetail-tags">
                            <span>Pronunciation</span>
                            <span>Listening</span>
                            <span>Grammar</span>
                        </div>
                        <div className="modal-lessonDetail-description">
                            {description}
                        </div>
                        <div className="modal-lessonDetail-price">
                            <span>Price</span>
                        </div>
                        <div className="flex-row">
                            <div className="modal-lessonDetail-prieCard">
                                <div className="modal-lessonDetail-prieCard-time">
                                    <span>{duration} min</span>
                                </div>
                                <div className="lessonCard-price-red">
                                    <span>USD {price}</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-detail">
                            <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/notice.90012b4a.svg" alt="notice"/>
                            <div className="notice-text">
                                <span>Some teachers may include a 5 minute break in the lesson time</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer-lesson flex-row-center">
                    <button onClick={() => alert("Feature coming soon! :D")} type="button" className="modal-lessonDetail-bookBtn">
                        <span>BOOK NOW</span>
                    </button>
                </div>
            </div>
        )
    }
};

export default LessonItem;
