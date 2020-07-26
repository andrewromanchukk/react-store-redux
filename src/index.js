import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App'
import createStore from "./store";
const store = createStore();





ReactDOM.render(
  
    <Provider store={createStore()}>
       <App />
    </Provider>,
    
  
  document.getElementById('root')
);

