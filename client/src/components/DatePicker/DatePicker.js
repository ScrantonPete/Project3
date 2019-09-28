import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { start } from "repl";
// CSS Modules, react-datepicker-cssmodules.css

class DatePick extends Component {
  state = {
    startDate: new Date()
  };

<<<<<<< HEAD
  handleChange = date => {
    // console.log(startDate);
    // if (startDate === this.state.startDate) return;
=======
  handleChange = event => {
    const { name, value } = event.target;

>>>>>>> 7fdeda4e8f281a957d5f6bab6d2c16f11d84ea66
    this.setState({
      [name]: value
    });
  };
  

  render() {
    return (
      <DatePicker
        selected={this.startDate}
        onChange={this.handleChange}
        defaultValue={this.value}
        name="value"
        inputReadOnly
      />
    );
  }
}

export default DatePick;
