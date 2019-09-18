import React from "react";
import "./style.css";

import 'rc-time-picker/assets/index.css';
import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}

ReactDom.render(
    <div class="page">
        <h2>Feed Me</h2>

        <TimePicker
            showSecond={false}
            defaultValue={now}
            className="xxx"
            onChange={onChange}
            format={format}
            use12Hours
            inputReadOnly
        />,
        document.getElementById('__react-content')

        <div class="input-group">
            <div class="input-group-prepend">
            <label class="input-group-text">Details</label>
            </div>
            <textarea class="form-control"></textarea>
        </div>
        <button type="button" class="btn btn-info" id="save">Save</button>
    </div>
);

export default Eat;