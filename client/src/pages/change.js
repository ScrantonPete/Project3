import React, { Component } from "react";
import "./style.css";
// import DatePicker from "../components/DatePicker";
import "rc-time-picker/assets/index.css";
// import ReactDom from 'react-dom';
import moment from "moment";
import TimePicker from "rc-time-picker";
import API from "../utils/API";
// import App from "../App"

const format = "hh:mm a";
// const now = moment()
//   .hour(0)
//   .minute(0);


class Change extends Component {
  state = {
    value: moment(),
    // user: [],
    details: ""
  };

  getChangeTime = () => {
    API.getChangeTime()
      .then(res =>
        this.setState({
          value: res.data,
          details: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = (value, details) => {

    this.setState({ value });
    this.setState({ details });


    this.getChangeTime(this.state.value.format('hh:mm:ss'));
    this.getChangeTime(this.state.details);
    console.log("time: " + this.state.value.format('hh:mm:ss'));
    console.log("details: " + this.state.details);
 
  };


  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <h2>Change Me</h2>
        <TimePicker
          showSecond={false}
          defaultValue={value}
          className="xxx"
          onChange={value => this.handleFormSubmit(value)}
          format={format}
          use12Hours
          inputReadOnly
          name="value"
          
        />

        
        <div className="input-group">
          <div className="input-group-prepend">
            <label className="input-group-text">Details</label>
          </div>
          <textarea className="form-control" id="details" name="details" onClick={details => this.handleFormSubmit(details)}>
          </textarea>
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
        // 
    );
  }
}


export default Change;
