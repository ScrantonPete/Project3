import React, { Component } from "react";
import "./style.css";
import DatePicker from "../components/DatePicker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import Timer from "../components/TimePicker";
import API from "../utils/API";
import Date from "../components/DatePicker";

const format = "hh:mm a";

class Change extends Component {
  state = {
    user: "connie@mail.com",
    date: "1999-01-01 05:00:00.000Z",
    value: moment(),
    details: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.postChange({
      user: "connie@mail.com",
      date: "1999-01-01 05:00:00.000Z",
      time: this.state.value.format("hh:mm a"),
      details: this.state.details
    }).then(res =>
      this.setState({
        value: res.data,
        details: ""
      })
    );

    console.log("details: " + this.state.details);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Change Me</h2>
        <Date />
        <p></p>
        <Timer />

        <div className="input-group">
          <div className="input-group-prepend">
            <label className="input-group-text">Details</label>
          </div>
          <textarea
            className="form-control"
            id="details"
            name="details"
            onChange={this.handleInputChange}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-info"
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
