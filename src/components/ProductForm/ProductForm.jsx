import React, { useState } from 'react';

function ProductForm(props) {
  // You will need to keep this state in this component
  // if you're only using something in one component,
  // you do not need to move it to redux
  let [productToAdd, setProductToAdd] = useState({ name: '', price: 0 });

  function handlePriceChange(event) {
    setProductToAdd({
      ...productToAdd,
      price: event.target.value,
    });
  }

  function handleNameChange(event) {
    setProductToAdd({      
        ...productToAdd,
        name: event.target.value,      
    });
  }

  function addProduct(event) {
    event.preventDefault();
    
    // TODO: Dispatch here, instead of using addNewProduct from parent
    props.addNewProduct(productToAdd);

    // TODO: Clear input fields

  };

  return (
    <form onSubmit={(event) => addProduct(event)}>
      <input onChange={handleNameChange} type='text' placeholder='name' />

      <input
        onChange={handlePriceChange}
        type='text'
        placeholder='price'
      />
      
      <input type='submit' value='Submit' />
    </form>
  );
}

export default ProductForm;
