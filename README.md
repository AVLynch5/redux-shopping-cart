# Redux Shopping Cart

## Setup

- Fork
- Clone
- `npm install`
- `npm start`

## Tasks

Good news! A lot is already working here! After running `npm start`, you should be able to add a new product to the list. Our project has now grown so large that we would like to start using redux.

Redux has been added to this project, but the project isn't really using redux. Follow these steps to integrate redux into the project.

- [ ] Add the Redux Logger (If covered in lecture)
- [ ] Update the **ProductList** to display from the `productReducer`
- [ ] Update the **ProductForm** to dispatch to the `productReducer`
- [ ] When **Add to Cart** is clicked on, dispatch that product to the `checkoutReducer`
- [ ] Display products in the cart on the **Checkout** page
- [ ] When the **Checkout** button is clicked on the **Checkout** page, clear the cart

## Stretch

- When the **Checkout** button is clicked on the **Checkout** page, in addition to clearing the cart, navigate the user back to the **Product** page
- [ ] In `ProductForm`, using currying to consolidate `handlePriceChange` and `handleNameChange` into a single function
- [ ] Show the total cost on the Checkout page
- [ ] Ability to remove from cart
- [ ] Ability to remove a product
