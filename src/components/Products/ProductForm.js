import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props) {
        super(props);

        // TODO: Move these products into the ProductReducer
        this.state = {
            productToAdd: {name: '', price: 0}
        }
    }

    handlePriceChange = (event) => {
        this.setState({
            productToAdd: {
                ...this.state.productToAdd,
                price: event.target.value
            },
        });
    }

    handleNameChange = (event) => {
        this.setState({
            productToAdd: {
                ...this.state.productToAdd,
                name: event.target.value
            },
        });
    }

    addProduct = (event) => {
        event.preventDefault();
        this.props.addNewProduct(this.state.productToAdd);
    }

    render() {
        return (
            <form onSubmit={this.addProduct}>
                <input onChange={this.handleNameChange} type="text" placeholder="name" />
                <input onChange={this.handlePriceChange} type="text" placeholder="price" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default ProductForm;