import React, { Component } from 'react'
import ListShoe from './ListShoe'
import DetailShoe from './DetailShoe'
import CartShoe from './CartShoe'
import { shoeArr } from './data'

export default class Ex_Shoe extends Component {
    state = {
        shoeArr: shoeArr,
        cart: [],
        detail: {},
    }

    handleAddToCart = () => {
        // case 1: the shoe hasn't been added to the cart => 
        // create an object, theem key soLuong: 1 => push
        // case 2: the shoe has already in the cart => update key 
        // soLuong +1

    }

    render() {
        return (
        <div>
            <div className="row">
                <CartShoe cart={this.state.cart}/>
                <ListShoe list={this.state.shoeArr} />
            </div>
            <DetailShoe />
        </div>

        )
    }
}
