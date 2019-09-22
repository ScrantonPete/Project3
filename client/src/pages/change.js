import React, { Component } from "react";
import "./style.css";
import DatePicker from "../components/DatePicker";
import "rc-time-picker/assets/index.css";
// import ReactDom from 'react-dom';
import moment from "moment";
import TimePicker from "rc-time-picker";
import API from "../utils/API";

const format = "h:mm a";
const now = moment()
  .hour(0)
  .minute(0);

class Change extends Component {
  state = {
    time: "",
    // user: [],
    details: ""
  };

  getChangeTime = () => {
    API.getChangeTime()
      .then(res =>
        this.setState({
          time: res.data,
          details: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.getChangeTime(this.state.time);
    this.getChangeTime(this.state.details);
    console.log("time: " + this.state.time);
    console.log("details: " + this.state.details);
  };

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });

    console.log(value && value.format(format));
  };

  render() {
    return (
      <div className="container">
        <DatePicker></DatePicker>
        <h2>Change Me</h2>
        <TimePicker
          showSecond={false}
          defaultValue={now}
          className="xxx"
          onChange={this.onChange}
          format={format}
          use12Hours
          inputReadOnly
          name="time"
          value
        />
        ,
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text">Details</label>
          </div>
          <textarea class="form-control"></textarea>
        </div>
        <button
          type="button"
          class="btn btn-info"
          id="save"
          onClick={this.handleFormSubmit}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Change;
