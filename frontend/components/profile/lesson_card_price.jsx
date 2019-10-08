import React from "react";

const LessonCardPrice = props => {
  const { price, duration } = props.item;

  const formatPrice = num => {
    return parseFloat(Math.round(num * 100) / 100).toFixed(2);
  };
  return (
    <div className="modal-lessonDetail-prieCard">
      <div className="modal-lessonDetail-prieCard-time">
        <span>{duration} min</span>
      </div>
      <div className="lessonCard-price-red">
        <span>USD {formatPrice(price)}</span>
      </div>
    </div>
  );
};

export default LessonCardPrice;
