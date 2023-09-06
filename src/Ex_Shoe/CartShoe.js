import { tr } from '@faker-js/faker';
import React, { Component } from 'react'

export default class CartShoe extends Component {
  
  renderCart = () => {
    let {cart} = this.props;

    return cart.map( (item, index) => {
      let {name, price, image} = item;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <img width={100} src={image} alt="" />
          </td>
          <td>
            <button className="btn-danger">Delete</button>
          </td>
        </tr>
      )
    } )
  }

  render() {

    return (
      <div className='col-6'>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </thead>
          <tbody>{this.renderCart()}</tbody>
        </table>
      </div>
    )
  }
}
