import React from "react";
import "./style.css";

function Login() {

    return (

        <div className="container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">Not baby's...yours!</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="********" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Keep Me Signed In</label>
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        </div>
    )
  }
  export default Login;