import React from "react";
import Moment from "react-moment";

const OpenTimeOption = props => {
  return (
    <h1>
      <Moment format="LLL">{props.openTimeSlot.startTime}</Moment>
    </h1>
  );
};

export default OpenTimeOption;
