import React, { Component } from 'react'
import { connect } from 'react-redux';

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.handleGiam} className="btn btn-danger">-</button>
        <strong>{this.props.number}</strong>
        <button onClick={this.props.handleTang} className="btn btn-success">+</button>

      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    number: state.soLuong,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleTang: () => {
      let action = {
        type: "TANG",
      };
      dispatch(action);
    },
    handleGiam: () => {
      let action = {
        type: "GIAM",
        payload: 200,
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux); //2 functions ở đây
