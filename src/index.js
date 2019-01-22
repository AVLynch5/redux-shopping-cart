import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    // This is a reducer... we'll talk about it in a minute, hang on for a second
    () => {
        console.log(`Hey!!! I'm a reducer y'all!!!`);
    },
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
