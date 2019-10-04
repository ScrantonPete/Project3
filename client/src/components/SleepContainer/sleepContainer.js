import React, { Component } from "react";
import "./style.css";

class SleepContainer extends Component {
  renderItems() {
    return this.props.itemList.map(item => (
      <div className="item" key={item._id}>
        <p>Start Time: {item.starttime}</p>
        <p>End Time: {item.endtime}</p>
        <p>Details: {item.details}</p>
      </div>
    ));
  }
  render() {
    return (
      <div className="itemList">
        <h5>{this.props.title} </h5>
        {this.renderItems()}
        {(!this.props.itemList || this.props.itemList.length < 1) && (
          <p>No records to show.</p>
        )}
      </div>
    );
  }
}

export default SleepContainer;
