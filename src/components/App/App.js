import React, { Component } from 'react';
import './App.css';
// Shorthand import, {} in import is called destructuring
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Components
import Products from '../Products/Products.js';
import Checkout from '../Checkout/Checkout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Shopping Cart</h1>
        
        <Router>
          <div>
            <ul className="nav">
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
            <Route exact path="/" component={Products} />
            <Route exact path="/checkout" component={Checkout} />            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
