import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner } from "./components/KandyKorner"  //importing the module that determines layout and order of all components; then calling the function from that module down below.
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <KandyKorner />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
