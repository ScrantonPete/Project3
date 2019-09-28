import React, { Component } from "react";
import "./style.css";
<<<<<<< HEAD
import Date from "../components/DatePicker";
=======
import "rc-time-picker/assets/index.css";
// import moment from "moment";
// import Timer from "../components/TimePicker";
import API from "../utils/API";
>>>>>>> 7fdeda4e8f281a957d5f6bab6d2c16f11d84ea66
import "rc-time-picker/assets/index.css";
// import ReactDom from 'react-dom';
import moment from "moment";

import Timer from "../components/TimePicker";

const format = "h:mm a";
const now = moment()
  .hour(0)
  .minute(0);

class Eat extends Component {
  state = {
    feed: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submitted");

    API.feedMe()
      .then(res => this.setState({ feed: res.data }))
      .catch(err => console.log("Error" + err));
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
        <h2>Feed Me</h2>
        <Date />
        <p></p>
        <Timer />

        <div className="input-group">
          <div className="input-group-prepend">
            <label className="input-group-text">Details</label>
          </div>
          <textarea className="form-control"></textarea>
        </div>
        <button
          type="button"
          className="btn btn-info"
          id="save"
          onClick={this.handleFormSubmit}
          value={this.state.feed}
        >
          Save
        </button>
      </div>
    );
  }
}
export default Eat;
