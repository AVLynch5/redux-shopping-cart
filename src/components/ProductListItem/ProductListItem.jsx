import React from 'react';

// Displays a single Product with price on the DOM
function ProductListItem(props) {

  const addProductToCart = () => {
    console.log(props.product);
    // TODO: Dispatch here
  }

  return (
    <li>
      {props.product.name}: {props.product.price}{' '}
      <button onClick={addProductToCart}>Add to Cart</button>
    </li>
  );
}

export default ProductListItem;
