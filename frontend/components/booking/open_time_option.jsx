import React from "react";
import Moment from "react-moment";

const OpenTimeOption = props => {
  const { openTimeSlot, handleClick } = props;

  return (
    <div
      onClick={() => handleClick("openTimeSlot", openTimeSlot)}
      className="time-option-container"
    >
      <Moment className="time-option-start-time" format="LLL">
        {openTimeSlot.startTime}
      </Moment>
    </div>
  );
};

export default OpenTimeOption;
