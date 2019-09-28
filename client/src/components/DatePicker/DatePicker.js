import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

class Date extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = event => {
    const { name, value } = event.target;

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
export default DatePicker;
