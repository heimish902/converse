import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Scroll from './Scroll';
export let cartItem = [];

function reducer(state = cartItem, action) {
  let copyItem = [...state];
  switch (action.type) {
    case 'AddCart':
      countItem(copyItem, action);
      console.log(copyItem);
      return copyItem;

    case 'plusItem':
      let found = copyItem.findIndex((a) => a.id === action.id && a.size === action.size);
      if (found >= 0) {
        copyItem[found].quan++;
        const price = document.querySelectorAll('.item')[found];
        price.querySelector('.price').innerText = `${copyItem[found].price * copyItem[found].quan}원`;
      }
      return copyItem;

    case 'minusItem':
      let founds = copyItem.findIndex((a) => a.id === action.id && a.size === action.size);
      if (founds >= 0) {
        copyItem[founds].quan--;
        const prices = document.querySelectorAll('.item')[founds];
        prices.querySelector('.price').innerText = `${copyItem[founds].price * copyItem[founds].quan}원`;
      }
      return copyItem;
  }
}

let store = createStore(reducer);

function countItem(copyItem, action) {
  let found = copyItem.findIndex((a) => {
    return a.id === action.payload.id && a.size === action.payload.size;
  });
  if (found >= 0) {
    copyItem[found].quan++;
  } else {
    copyItem.push(action.payload);
    saveLocal(action);
  }
}

function saveLocal(action) {
  let list = localStorage.getItem('cartItem');
  if (list === null) {
    list = [];
  } else {
    list = JSON.parse(list);
  }

  list.push(action.payload);
  list = new Set(list);
  list = [...list];
  localStorage.setItem('cartItem', JSON.stringify(list));
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Scroll />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
