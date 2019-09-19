import React from 'react';

class LessonItem extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchLesson(this.props.lesson.id);
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    render() {
        if (!this.props.lesson) {
            return null;
        }

        return (
            <div className="modal-container">
                <div className="modal-head">
                    <div className="modal-head-title">
                        <span>Lesson Details</span>
                    </div>
                    <div className="modal-close">
                        <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/cross_icon.ad79cc7a.svg" alt="close"/>
                    </div>
                </div>
                <h1>{this.props.lesson.title}</h1>
                <h1>{this.props.lesson.price}</h1>
            </div>
        )
    }
};

export default LessonItem;
