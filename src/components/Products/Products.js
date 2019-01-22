import React, { Component } from 'react';
import ProductForm from './ProductForm.js';
import ProductList from './ProductList.js';

class Products extends Component {
    constructor(props) {
        super(props);

        // TODO: Use the productReducer instead of state
        this.state = {
            products: [
                { name: 'Marshmallow Mateys', price: 6.98 },
                { name: `Golden Honney O's`, price: 6.48 },
                { name: `Frosted Flakes`, price: 3.98 },
            ],
        }
    }

    addNewProduct = (product) => {
        console.log(product);
        // TODO: Switch from using local state to dispatching an action
        this.setState({
            products: [...this.state.products, product],
        })
    }

    render() {
        return (
            <div>
                <h2>Products</h2>
                <ProductForm addNewProduct={this.addNewProduct} />
                <ProductList products={this.state.products} />
            </div>
        )
    }
}

export default Products;