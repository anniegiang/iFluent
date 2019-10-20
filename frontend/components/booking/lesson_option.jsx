import React from 'react';

const LessonOption = props => {
  return (
    <li value={props.lesson.id} onClick={props.handleChange('lessonItemId')}>
      {props.lesson.title}
    </li>
  )
};

export default LessonOption
