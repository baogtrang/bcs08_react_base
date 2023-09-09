import React, { Component } from 'react'
import ItemShoe from './ItemShoe';

export default class ListShoe extends Component {
    renderListShoe = () => {
        // the "index" will NOT be passed to the "ItemShoe", only the "item" object
        return this.props.list.map( (item, index) => {
            return <ItemShoe 
            handleAddToCart = {this.props.handleAddToCart}
            item={item} key={index} />;
        } );
    };
    
    render() {
        return (
        <div className="col-6 row">
            {/* muốn return có html trên UI luôn nên để () */}
            {this.renderListShoe()}
        </div>
        )
    }
}
