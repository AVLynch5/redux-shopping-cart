import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';

function ProductList(props) {
  return (
    <div>
      <ul>
        {props.products.map((product, i) => {
          return <ProductListItem key={i} product={product} />;
        })}
      </ul>
    </div>
  );
}

export default ProductList;
