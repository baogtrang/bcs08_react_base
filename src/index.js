import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import { numberReducer } from './DemoRedux/redux/reducer/numberReducer';
import { shoeReducer } from './Ex_Shoe_Redux/reducer/shoeReducer';
import { rootReducer } from './Ex_Shoe_Redux/reducer/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

let store= createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider> 


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
