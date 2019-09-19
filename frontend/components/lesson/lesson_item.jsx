import React from 'react';

class LessonItem extends React.Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    render() {
        debugger
        return (
            <div>
                <h1 id="h1">Lesson Item</h1>
            </div>
        )
    }
};

export default LessonItem;
