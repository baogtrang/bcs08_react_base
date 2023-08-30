import React, { Component } from "react";
import {movieArr} from "./data";
// import { movieArr } from "./data";
// react state , setState

// class-based component
export default class RenderWithMap extends Component {
  // CUSTOM method  
  renderListMovie = () => {
    return movieArr.map((item, index) => {
      let {hinhAnh, tenPhim} = item;
      return (
        <div key={index} className="card text-left col-3">
          <img className="card-img-top" src={hinhAnh} alt="img" />
          <div className="card-body">
            <p className="card-text">{tenPhim}</p>
          </div>
        </div>

      )
    })
  };

  //  render is a BUILT-IN method
  render() {
    return (
    <div className="container">
        <div className="row">{this.renderListMovie()}</div>
    </div>)    
  };
}
// rcc
