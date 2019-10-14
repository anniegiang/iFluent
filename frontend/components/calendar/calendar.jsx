import React, { useState } from "react";
import DatePicker from "react-datepicker";

// class Calendar extends React.Component {
//   state = {
//     startDate: new Date()
//   };

//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };

//   render() {
//     return (
//       <DatePicker
//         selected={this.state.startDate}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};

export default Calendar;
