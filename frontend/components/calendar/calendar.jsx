import React, { useState } from "react";
import DatePicker from "react-datepicker";

class Calendar extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        timeFormat="HH:mm"
      />
    );
  }
}

export default Calendar;
