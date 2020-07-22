import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createStore from './store';
const store = createStore();

setTimeout(function(){
  store.dispatch({
    type:'tfujhbkjbk'
  })
})

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>,
  
  document.getElementById('root')
);

