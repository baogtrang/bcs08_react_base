import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Provider là component kết nối redux store với react components
import {Provider} from "react-redux";
import {createStore} from "redux";

// rootReducer là file mình tạo ra, là store tổng của toàn ứng dụng
import { rootReducer } from './Ex_Shoe_Redux/reducer/rootReducer';


import { numberReducer } from './DemoRedux/redux/reducer/numberReducer';
import { shoeReducer } from './Ex_Shoe_Redux/reducer/shoeReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

let store = createStore(numberReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
  // <React.StrictMode>
  // store là props, do thư viện tạo
  // The Provider component wraps around the App component, making the Redux store available to it and all of its child components.
  <Provider store={store}>
    <App />
  </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
