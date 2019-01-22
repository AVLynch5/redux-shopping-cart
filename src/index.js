import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Array of products are stored here
const productReducer = (state = [], action) => {
    // TODO: Add new products to this reducer


    return state;
};

// Items in the cart
const checkoutReducer = (state = [], action) => {
    // TODO: Add ability to add products to the cart
    
    
    return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        productReducer,
        checkoutReducer
    }),    
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();