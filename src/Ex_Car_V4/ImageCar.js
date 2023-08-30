import React, { Component } from "react";

export default class ImageCar extends Component {
  render() {
    let { imgPath } = this.props;
    return <img src={imgPath} alt="" className="col-4" />;
  }
}
