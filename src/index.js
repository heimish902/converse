import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

export let cartItem = [];

function reducer(state = cartItem, action) {
  let copyItem = [...state];
  switch (action.type) {
    case 'AddCart':
      countItem(copyItem, action);
      console.log(copyItem);
      return copyItem;

    case 'plusItem':
      let found = copyItem.findIndex((a) => a.id === action.data);
      if (found >= 0) {
        copyItem[found].quan++;
        const price = document.querySelectorAll('.item')[found];
        price.querySelector('.price').innerText = `${copyItem[found].price * copyItem[found].quan}원`;
      }
      return copyItem;

    case 'minusItem':
      let founds = copyItem.findIndex((a) => a.id === action.data);
      if (founds >= 0) {
        copyItem[founds].quan--;
        const prices = document.querySelectorAll('.item')[founds];
        prices.querySelector('.price').innerText = `${copyItem[founds].price * copyItem[founds].quan}원`;
      }
      return copyItem;
  }
}

let store = createStore(reducer);

function countItem(cartItem, action) {
  let found = cartItem.findIndex((a) => {
    return a.id === action.payload.id && a.size === action.payload.size;
  });
  if (found >= 0) {
    cartItem[found].quan++;
  } else {
    cartItem.push(action.payload);
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
