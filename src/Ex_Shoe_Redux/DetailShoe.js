// rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DetailShoe extends Component {
  render() {
    let {image} = this.props.detail;
    return (
      <div>
        <img src={image} alt="shoe" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { //object
    detail: state.shoeReducer.detail,
  };
}

export default connect(mapStateToProps)(DetailShoe)