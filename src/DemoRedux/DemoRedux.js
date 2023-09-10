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

// mapStateToProps: lấy data từ redux đưa về component dưới dạng props
let mapStateToProps = (state) => {
  return {
    number: state.soLuong,
  };
};

// send actions/messages back the redux store
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
        payload: 1,
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux); 
// I want to connect my DemoRedux component to the Redux store
// I want to map certain parts of the state to this component's props using mapStateToProps
// I want to give this component the ability to dispatch actions back to the Redux store using mapDispatchToProps