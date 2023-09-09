import React, { Component } from 'react'

// nhận "item" props từ ListShoe
export default class ItemShoe extends Component {
  render() {
    let {image, name} = this.props.item;

    return (
      // b4-card-align
      <div className="card text-left col-3">
        <img className="card-img-top" src={image} alt="img" />
        <div className="card-body p-0">
          <small className="card-title">{name}</small>
          <p className="card-text">
            <button onClick={()=>{this.props.handleAddToCart(this.props.item)}} className="btn btn-primary mr-2">Add</button>
            <button className="btn btn-info">View</button>
          </p>
        </div>
      </div>
    );
  }
}
