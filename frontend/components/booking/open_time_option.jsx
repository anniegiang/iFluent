import React from "react";
import Moment from "react-moment";

const OpenTimeOption = props => {
  const { openTimeSlot, handleClick } = props;
  return (
    <div
      onClick={handleClick("openTimeSlotId")}
      className="time-option-container"
      value={openTimeSlot.id}
    >
      <Moment className="time-option-start-time" format="LLL">
        {openTimeSlot.startTime}
      </Moment>
    </div>
  );
};

export default OpenTimeOption;
