import React from 'react';
import ReactDOM from 'react-dom/client';
import './resum1.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const name = "Janvi Moradiya";
  const dob = "dec 1, 2005";
  const gender = "Female";
  const address = "123 Main Street, New York, NY";
  const mobile = "1234567891";
  const email = "janvi@2gmail.com";
   const education = "BCA Computer Science";

 
    
    var output = (<div>      
      <section className='resume'>
        <h1>Personal Information</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Date of Birth:</strong> {dob}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Mobile:</strong> {mobile}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Education:</strong> {education}</p>
      </section>
      

      </div>)


root.render(output)


