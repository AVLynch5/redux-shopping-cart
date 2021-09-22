import React from 'react';
//import useSelector
import {useSelector} from 'react-redux';

function Checkout() {
  //access the store
  const reduxStore = useSelector(store => store);

  const handleCheckout = () => {
    // TODO: Clear the cart and navigate to the product page
  }

  return (
    <div>
      <h2>Checkout</h2>
      {/* TODO: Display items in the cart */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {reduxStore.checkoutReducer.map((item, i) =>
            (<tr key={i}>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>)
          )}
        </tbody>
      </table>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Checkout;
