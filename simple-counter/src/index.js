import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Counter from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let time = 0;
setInterval(()=>{
time++;
const Four = Math.floor(time) ;
const Three = Math.floor(time/10) ;
const Two = Math.floor(time/100) ;
const One = Math.floor(time/1000) ;
  root.render(
    <React.StrictMode>
      <Counter numberOne={One} numberTwo={Two} numberThree={Three} numberFour={Four}/>
    </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
