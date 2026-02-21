import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
var num1=20;
var num2=2;

var output = (<div>
  <h1>Expression in reactjs</h1>
  <hr/>
 <b>num1 = {num1} num2 = {num2}</b>
  <ol>
    <li>Addition = {num1 + num2}</li>
    <li>Subtraction= {num1 - num2}</li>
    <li>Multiplication = {num1 * num2}</li>
    <li>Division= {num1 /num2}</li>
  </ol>
</div>)
root.render(output);


