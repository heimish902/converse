import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

export let cartItem = [];

function reducer(state = cartItem, action) {
  switch (action.type) {
    case 'AddCart':
      let copyItem = [...state];
      countItem(copyItem, action);
      console.log(copyItem);
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
