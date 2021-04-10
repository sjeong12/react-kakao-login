import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialLogin from './App';
import SignInUp from './SignInUp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SocialLogin />
  </React.StrictMode>,
  document.getElementById('root')
);

{/*
ReactDOM.render(
  <React.StrictMode>
    <SignInUp />
  </React.StrictMode>,
  document.getElementById('token-result')
);
*/}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
