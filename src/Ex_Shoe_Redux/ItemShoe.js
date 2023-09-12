import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART } from "./constant/shoeConstant";

class ItemShoe extends Component {
  render() {
    let { image, name } = this.props.item;
    return (
      <div className="card text-left col-3">
        <img className="card-img-top" src={image} alt />
        <div className="card-body p-0">
          <small className="">{name}</small>
          <p className="card-text">
            <button
              onClick={() => {this.props.handleAddToCart(this.props.item);}}
              class="btn btn-primary mr-2">Add</button>
            <button 
              onClick={() => {this.props.handleViewDetail(this.props.item)}} 
              class="btn btn-info">View</button>
          </p>
        </div>
      </div>
    );
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleViewDetail: (shoe) => {
      let action = {
          type:"VIEW_DETAIL", payload: shoe,
      };
      dispatch(action);
    },

    handleAddShoe: (shoe) => {
      let action = {
        type: ADD_TO_CART,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};

export default connect (null, mapDispatchToProps)(ItemShoe);