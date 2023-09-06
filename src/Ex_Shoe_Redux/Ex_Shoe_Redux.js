import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from "./data";

export default class Ex_Shoe_Redux extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
    detail: {},
  };
  handleAddToCart = (shoe) => {
    let cloneCart = this.state.cart;
    // kiểm tra sp đã có trong giỏ hàng hay chưa

    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) {
      // sp chưa có
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      // đã có
      cloneCart[index].soLuong++;
    }
    this.setState({
      cart: cloneCart,
    });

    // th1: sp chưa có trong giỏ hàng=> tạo object mới có thêm key soLuong:1 => push
    // th2: sp đã có trong giỏ hàng=> update key soLuong lên 1 đơn vị
  };
  handleRemove = (idShoe) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.indexOf((item) => {
      return item.id === idShoe;
    });
    cloneCart.splice(index, 1);
    this.setState({ cart: cloneCart });
  };
  handleChangeQuantity_v2 = (idShoe, option) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == idShoe;
    });
    if (option == TANG_SO_LUONG) {
      cloneCart[index].soLuong++;
    } else {
      cloneCart[index].soLuong--;
      cloneCart[index].soLuong == 0 && this.handleRemove(idShoe);
    }
    this.setState({ cart: cloneCart });
  };
  handleChangeQuantity = (idShoe, option) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == idShoe;
    });
    option == TANG_SO_LUONG && cloneCart[index].soLuong++;
    option == GIAM_SO_LUONG && cloneCart[index].soLuong-- && cloneCart[index].soLuong == 0 && this.handleRemove(idShoe);

    this.setState({
      cart: cloneCart,
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <CartShoe handleChangeQuantity={this.handleChangeQuantity} handleRemove={this.handleRemove} cart={this.state.cart} />
          <ListShoe list={this.state.shoeArr} handleAddToCart={this.handleAddToCart} />
        </div>
        <DetailShoe />
      </div>
    );
  }
}
