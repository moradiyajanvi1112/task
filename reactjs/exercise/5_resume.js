
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resume2.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Resume(data)
{
  return(  <div className="container my-5">
  <div className="card shadow">
    <div className="card-body">

    
      <div className="text-center mb-4">
        <h1 className="fw-bold">{data.name}</h1>
      </div>

     
      <div className="mb-4">
        <h4 className="section-title">Career Objective</h4>
        <p>
          Enthusiastic and motivated fresher seeking an opportunity to start a career in web development. 
          Strong foundation in HTML, CSS, Bootstrap, and JavaScript with a passion for learning new technologies.
        </p>
      </div>

      <div className="mb-4">
        <h4 className="section-title">Education</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Bachelor of Computer Science</strong><br/>
            Mkbu University (2023 - 2026)<br/>
            
          </li>
          <li className="list-group-item">
            <strong>Higher Secondary</strong><br/>
            Knya Vidhyaly School (2019 - 2021)
          </li>
        </ul>
      </div>

     
      <div className="mb-4">
        <h4 className="section-title">Skills</h4>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap 5</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>ReactJS (Basic)</li>
              <li>NodeJS (Basic)</li>
              <li>Git & GitHub</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </div>
      </div>

    
      <div className="mb-4">
        <h4 className="section-title"> Personal Projects</h4>
        <div className="mb-2">
          <strong>Portfolio Website</strong>
          <p>Created a personal portfolio website using HTML, CSS, and Bootstrap.</p>
        </div>
        <div>
          <strong>Online Shopping Website</strong>
          <p>Developed a responsive e-commerce frontend using Bootstrap and JavaScript.</p>
        </div>
      </div>

    
      <div className="mb-4">
        <h4 className="section-title">Contact </h4>
            <div className="mb-4 ">
        <p className="mb-1">📧 janvi@12gmail.com | 📱 +91 9876543210</p>
      </div>
      </div>

      
      
    </div>
  </div>
</div>)
}
let data = {
  name:'Janvi Moradiya',
}
root.render(Resume(data))