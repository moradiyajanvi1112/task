import React from 'react';
import ReactDOM from 'react-dom/client';
import './resume.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const name = "Janvi Moradiya";
  const dob = "dec 1, 2005";
  const gender = "Female";
  const address = "123 Main Street, New York, NY";
  const mobile = "1234567891";
  const email = "janvi@2gmail.com";
   const education = "BCA Computer Science";

 
    
    var output = (<div className='resume'>      
     <h1>{name}</h1>

      <div className="section">
        <p><span>Date of Birth:</span> {dob}</p>
        <p><span>Gender:</span> {gender}</p>
        <p><span>Address:</span> {address}</p>
        <p><span>Mobile:</span> {mobile}</p>
        <p><span>Email:</span> {email}</p>
      </div>

      <div className="section">
        <h2>Education</h2>
        <p>{education}</p>
      </div>
      

      </div>)


root.render(output)


