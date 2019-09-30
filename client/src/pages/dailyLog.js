import React, { Component } from "react";
import "./style.css";
import Container from "../components/Container/container";
import API from "../utils/API";

class DailyLog extends Component {
  state = {
    feed: [],
    sleep: [],
    change: []
  }

  componentDidMount = (feed, sleep, change) => {
    console.log("mounted");
    console.log(this.state.change)

    API.getFeed(feed)
      .then(res => {
        this.setState({ feed: res.data })
        console.log(res.data)
      })
      .catch(err => console.log("Error" + err));

    API.getSleep(sleep)
      .then(res => {
        this.setState({ sleep: res.data })
      })
      .catch(err => console.log("Error" + err));

    API.getChange(change)
      .then(res => {
        this.setState({ change: res.data })
      })
      .catch(err => console.log("Error" + err));

  };

  render() {

      return (
  
        <div className="container">
        <h2>Daily Log</h2>
        <div className="log">
          <Container
            itemList={this.state.change}
            title="Changes"> 
          </Container>
          <Container
            itemList={this.state.sleep}
            title="Sleep"> 
          </Container>
          <Container
            itemList={this.state.feed}
            title="Feed"> 
          </Container>
        </div>
      </div>
    );
  }
}
export default DailyLog;
