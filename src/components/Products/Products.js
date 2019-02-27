import React, { Component } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';

class Products extends Component {
    // TODO: Use the productReducer instead of state
    state = {
        products: [
            { name: 'Marshmallow Mateys', price: 6.98 },
            { name: `Golden Honney O's`, price: 6.48 },
            { name: `Frosted Flakes`, price: 3.98 },
        ],
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