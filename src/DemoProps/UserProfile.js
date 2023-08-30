import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src="holder.js/100px180/" alt />
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text display-4 text-info">{this.props.username}</p>
            <button onClick={this.props.handleChange} className="btn btn-danger">
              Change Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// Alice => Bob => Alice => Bob => Alice

// faker js npm
