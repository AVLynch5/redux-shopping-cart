import React from 'react';

function Checkout() {

  const handleCheckout = () => {
    // TODO: Clear the cart and navigate to the product page
  }

  return (
    <div>
      <h2>Checkout</h2>
      {/* TODO: Display items in the cart */}

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Checkout;
