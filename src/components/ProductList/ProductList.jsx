import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
//import useSelector
import {useSelector} from "react-redux";

function ProductList() {
  //access the redux store
  const reduxStore = useSelector(store=>store);
  return (
    <div>
      {/*<p>{JSON.stringify(reduxStore)}</p>*/}
      <ul>
        {reduxStore.productReducer.map((product, i) => {
          return <ProductListItem key={i} product={product} />;
        })}
      </ul>
    </div>
  );
}

export default ProductList;
