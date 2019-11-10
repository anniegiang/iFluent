import React from "react";

const LessonOption = props => {
  const { lesson, handleClick } = props;
  const formatPrice = num => {
    return parseFloat(Math.round(num * 100) / 100).toFixed(2);
  };
  return (
    <div className="lesson-option-container">
      <h1 className="lesson-option-title">{lesson.title}</h1>
      <p className="lesson-option-description">{lesson.description}</p>
      <div className="lesson-items">
        {lesson.lessonItems.map(item => (
          <div
            onClick={() => handleClick("lessonItem", { item, lesson })}
            value={item.id}
            className="lesson-item"
            tabIndex="0"
            key={item.id}
            id={item.id}
            selected={false}
          >
            <h2 className="lesson-item-duration">{item.duration} minutes</h2>
            <h2 className="lesson-item-price">${formatPrice(item.price)}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonOption;
