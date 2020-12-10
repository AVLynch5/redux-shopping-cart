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

    // TODO: This will be replaced by a method inside ProductForm
    addNewProduct = (product) => {
        console.log(product);
        this.setState({
            products: [...this.state.products, product],
        })
    }

    render() {
        return (
            <div>
                <h2>Products</h2>
                {/* 
                    TODO - When ProductForm & ProductList work with Redux directly,
                    there is no longer a reason to pass props into these components.
                 */}
                <ProductForm addNewProduct={this.addNewProduct} />
                <ProductList products={this.state.products} />
            </div>
        )
    }
}

export default Products;