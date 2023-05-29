import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { MenuProvider } from './components/menu/menuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: rootReducer });

root.render(
  <Provider store={store}>
    <MenuProvider>
      <App />
    </MenuProvider>
  </Provider>,
);

reportWebVitals();
