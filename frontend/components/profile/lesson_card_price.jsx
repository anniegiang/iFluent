import React from "react";

const LessonCardPrice = props => {
  const { price, duration } = props.item;
  return (
    <div className="modal-lessonDetail-prieCard">
      <div className="modal-lessonDetail-prieCard-time">
        <span>{duration} min</span>
      </div>
      <div className="lessonCard-price-red">
        <span>USD {price}</span>
      </div>
    </div>
  );
};

export default LessonCardPrice;
