import React, { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';

let productData = [
  { name: 'Marshmallow Mateys', price: 6.98 },
  { name: `Golden Honey O's`, price: 6.48 },
  { name: `Frosted Flakes`, price: 3.98 },
];

function Products() {
  // TODO: Use the productReducer instead of state
  let [products, setProducts] = useState(productData);

  // TODO: This will be replaced by a method inside ProductForm
  const addNewProduct = (product) => {
    console.log(product);
    
    setProducts([...products, product]);
  }

  return (
    <div>
      <h2>Products</h2>
      {/* 
        TODO - When ProductForm & ProductList work with Redux directly,
        there is no longer a reason to pass props into these components.
      */}

      <ProductForm addNewProduct={addNewProduct} />
      
      <ProductList products={products} />
    </div>
  );
} // end Products

export default Products;
