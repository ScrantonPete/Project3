import React from "react";
// import React, { Component } from 'react';
// class Image extends Component {
//constructor(props) {
    // super(props);
    // this.state = {
    //     data: ''
    // };

function Container ({ fluid, children }) {
    return (
    <div className={`container${fluid ? "-fluid" : "" }`}>
        {children}
    </div>
    );

};

export default Container;