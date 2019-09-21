import React, { Component } from "react";
import "./style.css";
import DatePicker from "../components/DatePicker";
import "rc-time-picker/assets/index.css";
// import ReactDom from 'react-dom';
import moment from "moment";
import TimePicker from "rc-time-picker";

const format = "h:mm a";
const now = moment()
  .hour(0)
  .minute(0);

class Change extends Component {
  state = {};

  // onChange = value => {
  // console.log(value && value.format(format))
  // }

  render() {
    return (
      <div className="container">
        <DatePicker></DatePicker>
        <h2>Change Me</h2>
        <TimePicker
          showSecond={false}
          defaultValue={now}
          className="xxx"
          // onChange={onChange}
          format={format}
          use12Hours
          inputReadOnly
        />
        ,
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text">Details</label>
          </div>
          <textarea class="form-control"></textarea>
        </div>
        <button type="button" class="btn btn-info" id="save">
          Save
        </button>
      </div>
    );
  }
}

export default Change;
