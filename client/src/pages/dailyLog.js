import React, { Component } from "react";
import "./style.css";
import Container from "../components/container";
import API from "../utils/API";


class DailyLog extends Component {
  state = {};

  componentDidMount = () => {
    console.log("mounted");

    API.getFeed()
      .then(res => this.setState({ feed: res.data }))
      .catch(err => console.log("Error" + err));

    API.getSleep()
      .then(res => this.setState({ sleep: res.data }))
      .catch(err => console.log("Error" + err));

    API.getChange()
      .then(res => this.setState({ change: res.data }))
      .catch(err => console.log("Error" + err));
  };

  render() {
    return (
      <div className="container">
        <h2>Daily Log</h2>
        <div className="log">
          <Container>
          <p>Sample text</p>

          </Container>
        </div>
      </div>
    );
  }
}
export default DailyLog;
