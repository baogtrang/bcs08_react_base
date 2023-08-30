import React, { Component } from "react";

export default class ButtonColor extends Component {
  render() {
    let { color } = this.props;
    return (
      <button
        onClick={() => {
          this.props.handleChange(color);
        }}
        style={{ background: color }}
        className=" btn text-white mx-5"
      >
        {color}
      </button>
    );
  }
}
