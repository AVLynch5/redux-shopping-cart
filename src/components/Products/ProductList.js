import React, { Component } from 'react';
import ProductListItem from './ProductListItem';

class ProductList extends Component {
    constructor(props) {
        super(props);

        // TODO: Move these products into the ProductReducer
        this.state = {
            productsToAdd: { name: '', price: 0 }
        }
    }

    addProductToCart = () => {

    }

    render() {
        return (
            <div>
                <ul>
                   {this.props.products.map((product, i) => {
                       return (
                           <ProductListItem key={i} product={product} />
                       );
                   })} 
                </ul>
            </div>
        )
    }
}

export default ProductList;