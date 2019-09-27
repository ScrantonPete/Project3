import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./start";
import "./style.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
    //   keepSignedIn: false
  };

  handleFormSubmit = event => {
      event.preventDefault();
      // if (this.state.email && this.state.password) {
          API.saveLogin({
              email: this.state.email,
              password: this.state.password,
          })
            .then(res =>
              this.setState({
                email: "",
                password: ""
              })
            )
          // if email & login match, load start page
          // .then( <Route exact path="/start" component={Start} />)

          // .catch(err => console.log("Error" + err))
      // }
      console.log("email: " + this.state.email);
      console.log("password: " + this.state.password);
  };

  // handleInputChange = event => {
  //   const { keepSignedIn } = event.target;
  //   this.setState({
  //     [keepSignedIn]: true
  //   });
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"  
              onChange={this.handleInputChange} 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="********"
              name="password"  
              onChange={this.handleInputChange}
            />
          </div>
          
          {/* <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1" onClick={this.handleInputChange}>Keep Me Signed In</label>
                    </div> */}
          <Link to="/start" className={window.location.pathname === "/start"}>
            <button type="submit" 
                    className="btn btn-info"
                    onClick={this.handleFormSubmit}
            >
            Submit
            </button>
          </Link>

          <a className="" href="/register">
            Register your baby here!
          </a>
        </form>
      </div>
    );
  }
}

export default Login;
