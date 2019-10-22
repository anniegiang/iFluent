import React from "react";
import Moment from "react-moment";

const TeacherSchedule = props => {
  const { openTimeSlots } = props;
  const startTimeStyle = {
    lineHeight: "40px",
    color: "#777"
  };
  return (
    <div className="teacher-schedule">
      <h2 className="schedule-title">Teacher Availability</h2>
      <ul>
        {openTimeSlots.length === 0
          ? "Teacher is currently unavailable."
          : openTimeSlots.map(timeSlot => (
              <li key={timeSlot.id}>
                <Moment
                  style={startTimeStyle}
                  className="schedule-start-time"
                  format="LLL"
                >
                  {timeSlot.startTime}
                </Moment>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default TeacherSchedule;
