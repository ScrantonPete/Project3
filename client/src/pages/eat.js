import React, { Component } from "react";
import "./style.css";

import 'rc-time-picker/assets/index.css';
// import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

class Eat extends Component {
    state = {
    };

    // function onChange(value) {
    //   console.log(value && value.format(format));
    // }

    render() {
        return(
        <div className="page">
            <h2>Feed Me</h2>

            <TimePicker
                showSecond={false}
                defaultValue={now}
                className="xxx"
                // onChange={onChange}
                format={format}
                use12Hours
                inputReadOnly
            />,

            <div className="input-group">
                <div className="input-group-prepend">
                <label className="input-group-text">Details</label>
                </div>
                <textarea className="form-control"></textarea>
            </div>
            <button type="button" className="btn btn-info" id="save">Save</button>
        </div>
    )};
}
export default Eat;