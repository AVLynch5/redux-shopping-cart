import React from 'react';

// Displays a single Product with price on the DOM
function ProductListItem({ product }) {

  const addProductToCart = () => {
    console.log(product);
    // TODO: Dispatch here
  }

  return (
    <li>
      {product.name}: {product.price}{' '}
      <button onClick={addProductToCart}>Add to Cart</button>
    </li>
  );
}

export default ProductListItem;
