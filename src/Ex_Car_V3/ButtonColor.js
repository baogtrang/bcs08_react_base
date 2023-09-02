import React, { Component } from 'react'

export default class ButtonColor extends Component {
  render() {
    // this.props refer to properties passed down from the parent component to chile
    let {color} = this.props; 
    return (
      <button 
        onClick = {() => {this.props.handleChange(color)}}
        style ={{background: color}}
        className ="btn text-white mx-5">{color}
      </button>
    )
  }
}


