import React, { Component } from 'react'

export default class ButtonColor extends Component {
  render() {
    // this.props refer to properties passed down from the parent component to chile
    let {color, activeColor} = this.props; 
    let isActive = color == activeColor;
    return (
      <button 
        onClick = {() => {this.props.handleChange(color)}}
        style ={{background: color, transform: `scale(${isActive ? 2 : 1})`, transition: "1s" }}
        className ="btn text-white mx-5">{color}
      </button>
    )
  }
}

// Outer Curly Braces: In JSX, curly braces ({}) are used to evaluate JavaScript expressions. So, when you see {}, you're essentially telling JSX: "I'm going to give you a JavaScript expression to evaluate."
// Inner Curly Braces: This represents a JavaScript object. Inline styles in React are passed as objects.
