import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function ProductForm() {
  // You will need to keep this state in this component
  // if you're only using something in one component,
  // you do not need to move it to redux
  //create default product const
  const defaultProduct = { name: '', price: 0 };
  //initialize with defaultProduct
  let [productToAdd, setProductToAdd] = useState(defaultProduct);

  const dispatch = useDispatch();

  const handlePriceChange = (event) => {
    setProductToAdd({
      ...productToAdd,
      price: event.target.value,
    });
  }

  const handleNameChange = (event) => {
    setProductToAdd({      
        ...productToAdd,
        name: event.target.value,      
    });
  }

  const addProduct = (event) => {
    event.preventDefault();
    const action = {
      type: 'ADD_NEW_PRODUCT',
      payload: productToAdd
    };
    // TODO: Dispatch here, instead of using addNewProduct from parent
    //addNewProduct(productToAdd);//no longer needed
    dispatch(action);
    // TODO: Clear input fields
    setProductToAdd(defaultProduct);
  };

  return (
    <form onSubmit={(event) => addProduct(event)}>
      <input onChange={handleNameChange} type='text' placeholder='name' value={productToAdd.name}/>

      <input
        onChange={handlePriceChange}
        type='text'
        placeholder='price'
        value={productToAdd.price}
      />
      
      <input type='submit' value='Submit' />
    </form>
  );
}

export default ProductForm;
