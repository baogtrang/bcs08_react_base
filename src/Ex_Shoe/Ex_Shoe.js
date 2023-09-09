import React, { Component } from 'react'
import ListShoe from './ListShoe'
import DetailShoe from './DetailShoe'
import CartShoe from './CartShoe'
import { TANG_SO_LUONG, GIAM_SO_LUONG, shoeArr } from './data'

export default class Ex_Shoe extends Component {
    state = {
        shoeArr: shoeArr,
        cart: [],
        detail: {},
    }

    handleRemove = (idShoe) => {
        // dùng splice hay filter đều được
        let clonedCart = this.state.cart;
        let index = clonedCart.indexOf((item) => {
            return item.id === idShoe;
        })
        clonedCart.splice(index, 1)
        this.setState({
            cart: clonedCart
        })
    }    

    handleAddToCart = (shoe) => {
        let clonedCart = this.state.cart;
        let index = clonedCart.findIndex( (item) => {
            return item.id === shoe.id;
        })
        // case 1: the shoe hasn't been added to the cart => 
        // create an object, key soLuong: 1 => push
        if (index == -1) {
            let newShoe = {...shoe, soLuong: 1};
            clonedCart.push(newShoe);
        } // case 2: the shoe has already in the cart => update key 
        // soLuong +1
        else {
            clonedCart[index].soLuong ++;
        }
        this.setState  ({
            cart: clonedCart,
        });        
    }

    handleChangeQuantity_v2 = (idShoe, option) => {
        let clonedCart = this.state.cart;
        let index = clonedCart.findIndex( (item) => {
            return item.id == idShoe;
        });
        if (option == TANG_SO_LUONG){
            clonedCart[index].soLuong++;
        } else {
            clonedCart[index].soLuong--;
            clonedCart[index].soLuong == 0 && this.handleRemove(idShoe);
        }
        this.setState({
            cart: clonedCart,
        })
    }

    handleChangeQuantity = (idShoe, option) => {
        let clonedCart = this.state.cart;
        let index = clonedCart.findIndex( (item) => {
            return item.id == idShoe;
        });
        option == TANG_SO_LUONG &&  clonedCart[index].soLuong++;
        option == GIAM_SO_LUONG &&  clonedCart[index].soLuong-- 
            && clonedCart[index].soLuong == 0 && this.handleRemove(idShoe);
        this.setState({
            cart: clonedCart,
        })
    }

    render() {
        return (
        <div>
            <div className="row">
                <CartShoe  
                    handleChangeQuantity={this.handleChangeQuantity}
                    cart={this.state.cart} 
                    handleRemove={this.handleRemove}/>
                <ListShoe list={this.state.shoeArr} handleAddToCart = {this.handleAddToCart} />              
            </div>
            <DetailShoe />
        </div>

        )
    }
}
