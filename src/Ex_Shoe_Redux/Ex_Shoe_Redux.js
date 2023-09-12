import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";

export default class Ex_Shoe_Redux extends Component {
 
  render() {
    return (
      <div>
        <div className="row">
          <CartShoe />
          <ListShoe />
        </div>
        <DetailShoe />
      </div>
    );
  }
}
