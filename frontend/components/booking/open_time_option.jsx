import React from "react";
import Moment from "react-moment";

const OpenTimeOption = props => {
  const { openTimeSlot, handleClick } = props;

  return (
    <div
      onClick={() => handleClick("openTimeSlot", openTimeSlot)}
      className="time-option"
    >
      <Moment className="time-option-start-time" format="LLLL">
        {openTimeSlot.startTime}
      </Moment>
    </div>
  );
};

export default OpenTimeOption;
